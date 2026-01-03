import type { TourStep } from "../hooks/use-tour";

interface FloatingTourButtonProps {
  isTourActive: boolean;
  currentStep: TourStep | null;
  currentStepIndex: number;
  totalSteps: number;
  isFirstStep: boolean;
  onStart: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSkip: () => void;
}

const FloatingTourButton = ({
  isTourActive,
  currentStep,
  currentStepIndex,
  totalSteps,
  isFirstStep,
  onStart,
  onNext,
  onPrevious,
  onSkip,
}: FloatingTourButtonProps) => {
  return (
    <div
      className="
      fixed bottom-4 right-4 z-50
      flex flex-col items-end gap-2
      sm:bottom-6 sm:right-6
    "
    >
      {/* Tour Step Info Tooltip - shown when tour is active */}
      {isTourActive && currentStep && (
        <div
          className="
          bg-[#1e1e1e] border-2 border-[#4ecdc4]
          rounded-lg shadow-2xl
          p-2 max-w-[200px]
          sm:p-3 sm:max-w-[280px]
          md:max-w-[320px]
        "
        >
          <div
            className="
            text-[#8b8b8b] text-[0.65rem] mb-1
            sm:text-xs
          "
          >
            Step {currentStepIndex + 1} of {totalSteps}
          </div>
          <div
            className="
            text-[#00ff00] font-bold text-xs mb-0.5
            sm:text-sm
          "
          >
            {currentStep.title}
          </div>
          <div
            className="
            text-[#e0e0e0] text-[0.65rem]
            sm:text-xs
          "
          >
            {currentStep.description}
          </div>
        </div>
      )}

      {/* Button Group */}
      <div className="flex items-center gap-2">
        {/* Previous Button - only shown when tour is active and not on first step */}
        {isTourActive && !isFirstStep && (
          <button
            onClick={onPrevious}
            className="
              bg-[rgba(78,205,196,0.15)] hover:bg-[rgba(78,205,196,0.25)]
              border-2 border-[#4ecdc4] hover:border-[#5eddd4]
              text-[#4ecdc4] hover:text-[#5eddd4]
              font-bold rounded-full
              transition-all duration-200
              shadow-lg hover:shadow-xl
              active:scale-95
              w-11 h-11 min-w-[44px] min-h-[44px]
              flex items-center justify-center
              sm:w-12 sm:h-12
              cursor-pointer
            "
            aria-label="Previous step"
            title="Previous step"
          >
            <span className="text-base sm:text-lg">←</span>
          </button>
        )}

        {/* Skip/Close Button - only shown when tour is active */}
        {isTourActive && (
          <button
            onClick={onSkip}
            className="
              bg-[rgba(255,107,107,0.15)] hover:bg-[rgba(255,107,107,0.25)]
              border-2 border-[#ff6b6b] hover:border-[#ff8b8b]
              text-[#ff6b6b] hover:text-[#ff8b8b]
              font-bold rounded-full
              transition-all duration-200
              shadow-lg hover:shadow-xl
              active:scale-95
              w-11 h-11 min-w-[44px] min-h-[44px]
              flex items-center justify-center
              sm:w-12 sm:h-12
              cursor-pointer
            "
            aria-label="Skip tour"
            title="Skip tour"
          >
            <span className="text-base sm:text-lg font-bold">×</span>
          </button>
        )}

        {/* Main Action Button - Start Tour or Next Step */}
        <button
          onClick={isTourActive ? onNext : onStart}
          className="
            group relative
            bg-[rgba(78,205,196,0.15)] hover:bg-[rgba(78,205,196,0.25)]
            border-2 border-[#4ecdc4] hover:border-[#5eddd4]
            text-[#4ecdc4] hover:text-[#5eddd4]
            font-bold rounded-full
            transition-all duration-200
            shadow-lg hover:shadow-xl
            active:scale-95
            px-4 py-2 min-h-[44px]
            text-xs
            sm:px-5 sm:py-2.5 sm:text-sm
            flex items-center justify-center gap-2
            whitespace-nowrap
            cursor-pointer
          "
          aria-label={isTourActive ? "Next step" : "Start interactive tour"}
        >
          <span className="text-base sm:text-lg">
            {isTourActive ? "→" : "🎯"}
          </span>
          <span>
            {isTourActive
              ? currentStepIndex === totalSteps - 1
                ? "Finish"
                : "Next"
              : "Start Tour"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingTourButton;
