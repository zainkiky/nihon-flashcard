const KeyboardShortcuts = () => {
  return (
    <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
        Keyboard Shortcuts
      </h3>
      <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300">
        <div>← Previous card</div>
        <div>→ Next card</div>
        <div>↑↓ Flip card</div>
        <div>Space Flip/Next</div>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;
