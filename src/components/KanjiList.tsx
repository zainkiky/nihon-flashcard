import { Flashcard } from '@/types/flashcard';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface KanjiListProps {
  flashcards: Flashcard[];
}

const KanjiList = ({ flashcards }: KanjiListProps) => {
  const [showHiragana, setShowHiragana] = useState(true);
  const [showBahasa, setShowBahasa] = useState(true);

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
          Complete Kanji List
        </h3>

        {/* Visibility Toggles */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowHiragana(!showHiragana)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              showHiragana
                ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}
            aria-label={`${showHiragana ? 'Hide' : 'Show'} Hiragana`}
          >
            {showHiragana ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
            Hiragana
          </button>

          <button
            onClick={() => setShowBahasa(!showBahasa)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              showBahasa
                ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}
            aria-label={`${showBahasa ? 'Hide' : 'Show'} Bahasa Indonesia`}
          >
            {showBahasa ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
            Bahasa
          </button>
        </div>
      </div>

      {/* Mobile/Tablet View - Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 md:hidden">
        {flashcards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
          >
            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
              {card.kanji}
            </div>
            {showHiragana && (
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-1 text-center">
                {card.hiragana}
              </div>
            )}
            {showBahasa && (
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {card.bahasa}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View - Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-600">
              <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">
                #
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">
                Kanji
              </th>
              {showHiragana && (
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">
                  Hiragana
                </th>
              )}
              {showBahasa && (
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">
                  Bahasa Indonesia
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {flashcards.map((card, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                  {index + 1}
                </td>
                <td className="py-3 px-4">
                  <span className="text-2xl font-bold text-gray-800 dark:text-white">
                    {card.kanji}
                  </span>
                </td>
                {showHiragana && (
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                    {card.hiragana}
                  </td>
                )}
                {showBahasa && (
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                    {card.bahasa}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
          Total:{' '}
          <span className="font-semibold text-gray-800 dark:text-white">
            {flashcards.length}
          </span>{' '}
          kanji characters
        </p>
      </div>
    </div>
  );
};

export default KanjiList;
