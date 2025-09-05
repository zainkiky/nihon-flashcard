import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationControlsProps {
  currentIndex: number;
  totalCards: number;
  isFlipped: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onFlip: () => void;
}

const NavigationControls = ({
  currentIndex,
  totalCards,
  isFlipped,
  onPrevious,
  onNext,
  onFlip,
}: NavigationControlsProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <button
        onClick={onPrevious}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-5 h-5" />
        Previous
      </button>

      <button
        onClick={onFlip}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-indigo-700"
      >
        {isFlipped ? 'Show Kanji' : 'Show Answer'}
      </button>

      <button
        onClick={onNext}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
        disabled={currentIndex === totalCards - 1}
      >
        Next
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default NavigationControls;
