export const APPLICATION_STEPS = [
  { id: 'military-background', title: 'Military Background' },
  { id: 'military-va', title: 'Military/VA Information' },
  { id: 'personal', title: 'Personal Information' },
  { id: 'contact', title: 'Contact Information' },
  { id: 'employment', title: 'Employment' },
  { id: 'education', title: 'Education' },
  { id: 'emergency', title: 'Emergency Contact' },
  { id: 'acknowledgements', title: 'Acknowledgements' },
  { id: 'documents', title: 'Documents' },
  { id: 'signature', title: 'Signature & Submit' },
] as const

export type ApplicationStepId = (typeof APPLICATION_STEPS)[number]['id']

export type VeteranApplicationFormData = {
  branchOfService: string[]
  conflictServed: string[]
  separationStatus: string[]
  dd214: File | null
  pictureID: File | null
  acknowledgementComplete: boolean
  acknowledgementPost911: boolean
  eSignatureAgreement: boolean
  eSignature: string
  date: string
  securityAnswer: string
}

export function validateApplicationStep(
  stepId: ApplicationStepId,
  panel: HTMLElement,
  data: VeteranApplicationFormData
): boolean {
  const fields = panel.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
    'input, select, textarea'
  )

  for (const field of fields) {
    if (field.type === 'hidden' || field.disabled) continue
    if (!field.checkValidity()) {
      field.reportValidity()
      field.focus()
      return false
    }
  }

  if (stepId === 'military-background') {
    if (data.branchOfService.length === 0) {
      window.alert('Please select at least one branch of service.')
      return false
    }
    if (data.conflictServed.length === 0) {
      window.alert('Please select at least one conflict served in.')
      return false
    }
    if (data.separationStatus.length === 0) {
      window.alert('Please select at least one separation status.')
      return false
    }
  }

  if (stepId === 'documents') {
    if (!data.dd214) {
      window.alert('Please upload your DD214.')
      return false
    }
    if (!data.pictureID) {
      window.alert('Please upload your Picture ID.')
      return false
    }
  }

  if (stepId === 'acknowledgements') {
    if (!data.acknowledgementComplete || !data.acknowledgementPost911 || !data.eSignatureAgreement) {
      window.alert('Please check all acknowledgement boxes before continuing.')
      return false
    }
  }

  if (stepId === 'signature') {
    if (!data.eSignature.trim() || !data.date.trim() || !data.securityAnswer.trim()) {
      window.alert('Please complete your e-signature, date, and security verification.')
      return false
    }
  }

  return true
}
