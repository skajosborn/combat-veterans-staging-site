import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const DEFAULT_NOTIFY_TO = 'sara@combatveteranstocareers.org'
const MAX_TOTAL_ATTACHMENT_BYTES = 24 * 1024 * 1024

function buildBody(data: FormData): string {
  const lines: string[] = []
  const keys = [...new Set(data.keys())].sort()

  for (const key of keys) {
    const values = data.getAll(key)
    const files = values.filter((v): v is File => v instanceof File)
    const strings = values.filter((v): v is string => typeof v === 'string').filter((s) => s !== '')

    for (const file of files) {
      if (file.size > 0) {
        lines.push(`${key}: [attached: ${file.name}, ${file.size} bytes]`)
      }
    }

    if (strings.length === 1) {
      lines.push(`${key}: ${strings[0]}`)
    } else if (strings.length > 1) {
      lines.push(`${key}: ${strings.join(', ')}`)
    }
  }

  return lines.join('\n')
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error:
          'Email is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL on the server (e.g. in Vercel environment variables).',
      },
      { status: 503 }
    )
  }

  let data: FormData
  try {
    data = await req.formData()
  } catch {
    return NextResponse.json({ error: 'Could not read form submission.' }, { status: 400 })
  }

  const to = process.env.VETERAN_APPLICATION_NOTIFY_TO?.trim() || DEFAULT_NOTIFY_TO

  const attachments: { filename: string; content: Buffer }[] = []
  let totalFileBytes = 0

  for (const key of new Set(data.keys())) {
    for (const value of data.getAll(key)) {
      if (value instanceof File && value.size > 0) {
        totalFileBytes += value.size
        const safeBase = value.name.replace(/[^\w.\-]+/g, '_') || 'upload'
        attachments.push({
          filename: `${key}-${safeBase}`,
          content: Buffer.from(await value.arrayBuffer()),
        })
      }
    }
  }

  if (totalFileBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
    return NextResponse.json({ error: 'Total file size must be 24MB or less.' }, { status: 400 })
  }

  const veteranName = (data.get('veteranName') as string | null)?.trim() || 'Unknown'
  const applicantEmail = (data.get('emailAddress') as string | null)?.trim()
  const body = buildBody(data)

  const resend = new Resend(apiKey)
  const { data: sendResult, error } = await resend.emails.send({
    from,
    to,
    subject: `Veteran application: ${veteranName}`,
    text: body,
    replyTo: applicantEmail && applicantEmail.includes('@') ? applicantEmail : undefined,
    attachments: attachments.length ? attachments : undefined,
  })

  if (error) {
    console.error('Resend error:', error)
    const message =
      typeof error === 'object' &&
      error !== null &&
      'message' in error &&
      typeof (error as { message: unknown }).message === 'string'
        ? (error as { message: string }).message
        : 'Could not send application. Please try again later.'
    return NextResponse.json({ error: message }, { status: 502 })
  }

  return NextResponse.json({ ok: true, id: sendResult?.id })
}
