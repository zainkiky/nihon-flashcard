import { FlashcardData } from '@/types/flashcard';

interface JsonDataDisplayProps {
  data: FlashcardData;
}

const JsonDataDisplay = ({ data }: JsonDataDisplayProps) => {
  return (
    <div className="mt-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
      <details>
        <summary className="cursor-pointer font-semibold text-gray-700 dark:text-gray-200 mb-2">
          View JSON Data Structure
        </summary>
        <pre className="text-xs bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded p-3 overflow-x-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </details>
    </div>
  );
};

export default JsonDataDisplay;
