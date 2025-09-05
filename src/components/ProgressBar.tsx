interface ProgressBarProps {
  currentIndex: number;
  totalCards: number;
}

const ProgressBar = ({ currentIndex, totalCards }: ProgressBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
        <span>Progress</span>
        <span>
          {currentIndex + 1} / {totalCards}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
