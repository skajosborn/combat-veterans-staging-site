# Veteran application email (Resend)

The form posts to **`POST /api/veteran-application`**, which emails a plain-text dump of every field plus **file attachments** (no EmailJS 50KB limit).

## Environment variables

| Variable | Where | Purpose |
|----------|--------|---------|
| `RESEND_API_KEY` | Server only (Vercel, `.env` locally) | Resend API key |
| `RESEND_FROM_EMAIL` | Server only | Verified sender, e.g. `CVC Applications <applications@yourdomain.com>` |
| `VETERAN_APPLICATION_NOTIFY_TO` | Server only | Optional. Defaults to `sara@combatveteranstocareers.org` |

Do **not** prefix these with `NEXT_PUBLIC_` — they must stay on the server.

Local: add them to `.env`, restart `npm run dev`. Production: set the same keys in your host and redeploy.

## Where the API key comes from

1. Sign up at [resend.com](https://resend.com) (free tier available).
2. Open **[API Keys](https://resend.com/api-keys)** in the dashboard.
3. Click **Create API Key**, copy the value (it starts with `re_`).
4. Put it in `.env` as **`RESEND_API_KEY=re_...`** — not `NEXT_PUBLIC_RESEND_API_KEY`.

## Resend checklist

1. Create an API key (see above) and set `RESEND_API_KEY`.
2. **Sender domain (required for your real address)**  
   In [Resend → Domains](https://resend.com/domains), add **`combatveteranstocareers.org`** (or whichever domain your `RESEND_FROM_EMAIL` uses). Resend will show **DNS records** (often SPF + DKIM). Add them at your DNS host, then wait until the domain shows **Verified** in Resend.  
   Until the domain is verified, Resend returns **403** with a message like *“domain is not verified”* — that is expected.
3. Set **`RESEND_FROM_EMAIL`** to an address on that **verified** domain, e.g. `Combat Veterans <applications@combatveteranstocareers.org>`.
4. Optionally set **`VETERAN_APPLICATION_NOTIFY_TO`** to the inbox that should receive applications.

## How to verify `combatveteranstocareers.org` in Resend (step by step)

Resend will only send “from” addresses on a domain after **DNS proves you control that domain**. Official overview: [Managing domains](https://resend.com/docs/dashboard/domains/introduction).

1. **Log in** at [resend.com](https://resend.com) and open **[Domains](https://resend.com/domains)**.
2. Click **Add domain** (or equivalent) and enter **`combatveteranstocareers.org`** (no `https://`, no path—just the domain).
3. Resend will show the **DNS records** you must create—typically:
   - **SPF** (a TXT record that authorizes Resend to send for your domain), and  
   - **DKIM** (one or more TXT/CNAME records so receivers can verify signatures).
4. **Open your DNS host**—wherever the domain’s nameservers point (GoDaddy, Cloudflare, Google Domains, Network Solutions, the church/site registrar, etc.).
5. **Create each record exactly** as Resend shows (same **host/name**, **type**, and **value**). Typos or wrong hostnames are the usual reason verification hangs.
6. **Save** in the DNS panel. Propagation can take **a few minutes to several hours** (rarely up to 48h).
7. Back in Resend, open the domain and click **Verify DNS records** (or wait for automatic rechecks). Status should become **Verified**.
8. Set **`RESEND_FROM_EMAIL`** to an address **on that domain** (e.g. `applications@combatveteranstocareers.org`) and restart your app.

If it stays stuck on “pending,” use Resend’s guide: [What if my domain is not verifying?](https://resend.com/docs/knowledge-base/what-if-my-domain-is-not-verifying) and their [DNS provider guides](https://resend.com/knowledge-base) for your registrar.

**Note:** Only someone who **controls DNS for `combatveteranstocareers.org`** can complete this. If a vendor or IT manages DNS, send them the exact records from the Resend domain page.

### Quick test (before your domain is verified)

Resend allows **`onboarding@resend.dev`** as `from` for API tests (see [Send Email](https://resend.com/docs/api-reference/emails/send-email)). For example:

```bash
RESEND_FROM_EMAIL=CVC Test <onboarding@resend.dev>
```

Restrictions apply (often who you can send **to**); use this only to confirm the API key and route work. For production, verify your domain and use a real `@combatveteranstocareers.org` from address.

## Attachments

Total upload size is capped at **24MB** (same as the form note). Files arrive as separate attachments named like `dd214-filename.pdf`.
