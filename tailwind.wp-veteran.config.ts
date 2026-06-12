import type { Config } from 'tailwindcss'
import baseConfig from './tailwind.config'

const config: Config = {
  ...baseConfig,
  important: '.cvc-veteran-application-root',
  content: [
    './components/VeteranApplicationForm.tsx',
    './components/VeteranApplicationWizardControls.tsx',
    './components/SectionTitle.tsx',
  ],
}

export default config
