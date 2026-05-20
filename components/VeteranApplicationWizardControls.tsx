'use client'

import { APPLICATION_STEPS } from '@/lib/veteranApplicationSteps'

type Props = {
  currentStep: number
  onBack: () => void
  onNext: () => void
  isSubmitting?: boolean
}

export default function VeteranApplicationWizardControls({
  currentStep,
  onBack,
  onNext,
  isSubmitting = false,
}: Props) {
  const step = APPLICATION_STEPS[currentStep]
  const isFirst = currentStep === 0
  const isLast = currentStep === APPLICATION_STEPS.length - 1
  const progress = ((currentStep + 1) / APPLICATION_STEPS.length) * 100

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-cvc-fg-muted">
        <span>
          Step {currentStep + 1} of {APPLICATION_STEPS.length}
        </span>
        <span className="font-semibold text-cvc-fg">{step.title}</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-cvc-card-inner"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-cvc-cta-fill transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-cvc-border pt-6">
        <button
          type="button"
          onClick={onBack}
          disabled={isFirst || isSubmitting}
          className="inline-flex min-h-10 items-center justify-center rounded-lg border border-cvc-border-strong px-6 text-sm font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>
        {isLast ? (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-patriotic-blue px-8 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-patriotic-navy disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending…' : 'Submit Application'}
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={isSubmitting}
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-cvc-cta-fill px-8 text-sm font-semibold text-white shadow-md transition-[filter] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
