import { createRoot } from 'react-dom/client'
import VeteranApplicationForm from '../../../components/VeteranApplicationForm'

type CvcVeteranApplicationConfig = {
  submitUrl: string
  ajaxAction: string
  missionUrl: string
  successStoriesUrl: string
  nonce: string
}

declare global {
  interface Window {
    cvcVeteranApplication?: CvcVeteranApplicationConfig
  }
}

const rootEl = document.getElementById('cvc-veteran-application-root')
const cfg = window.cvcVeteranApplication

if (rootEl && cfg?.submitUrl) {
  createRoot(rootEl).render(
    <VeteranApplicationForm
      layout="embed"
      submitUrl={cfg.submitUrl}
      missionUrl={cfg.missionUrl}
      successStoriesUrl={cfg.successStoriesUrl}
    />
  )
}
