import { RotateCcw } from 'lucide-react';

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton = ({ onReset }: ResetButtonProps) => {
  return (
    <div className="text-center">
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-4 py-2 mx-auto text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
      >
        <RotateCcw className="w-4 h-4" />
        Reset to Start
      </button>
    </div>
  );
};

export default ResetButton;
