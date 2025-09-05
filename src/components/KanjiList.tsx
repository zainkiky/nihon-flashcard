import { Flashcard } from '@/types/flashcard';
import { useMemo, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface KanjiListProps {
  flashcards: Flashcard[];
}

const KanjiList = ({ flashcards }: KanjiListProps) => {
  const [hiraganaVisibility, setHiraganaVisibility] = useState<boolean[]>(() =>
    flashcards.map(() => true)
  );
  const [bahasaVisibility, setBahasaVisibility] = useState<boolean[]>(() =>
    flashcards.map(() => true)
  );

  const areAllHiraganaVisible = useMemo(
    () => hiraganaVisibility.every(Boolean),
    [hiraganaVisibility]
  );
  const areAllBahasaVisible = useMemo(
    () => bahasaVisibility.every(Boolean),
    [bahasaVisibility]
  );

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
          Complete Kanji List
        </h3>

        {/* Master Visibility Toggles (apply to all items) */}
        <div className="flex gap-2">
          <button
            onClick={() =>
              setHiraganaVisibility((prev) =>
                prev.map(() => !areAllHiraganaVisible)
              )
            }
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              areAllHiraganaVisible
                ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}
            aria-label={`${
              areAllHiraganaVisible ? 'Hide' : 'Show'
            } Hiragana (all)`}
          >
            {areAllHiraganaVisible ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
            Hiragana
          </button>

          <button
            onClick={() =>
              setBahasaVisibility((prev) =>
                prev.map(() => !areAllBahasaVisible)
              )
            }
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              areAllBahasaVisible
                ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}
            aria-label={`${
              areAllBahasaVisible ? 'Hide' : 'Show'
            } Bahasa Indonesia (all)`}
          >
            {areAllBahasaVisible ? (
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
            {hiraganaVisibility[index] && (
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-1 text-center">
                {card.hiragana}
              </div>
            )}
            {bahasaVisibility[index] && (
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {card.bahasa}
              </div>
            )}

            {/* Per-item visibility toggles */}
            <div className="mt-3 flex justify-center gap-2">
              <button
                onClick={() =>
                  setHiraganaVisibility((prev) =>
                    prev.map((v, i) => (i === index ? !v : v))
                  )
                }
                className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
                  hiraganaVisibility[index]
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
                aria-label={`${
                  hiraganaVisibility[index] ? 'Hide' : 'Show'
                } Hiragana for ${card.kanji}`}
              >
                {hiraganaVisibility[index] ? (
                  <Eye className="w-3 h-3" />
                ) : (
                  <EyeOff className="w-3 h-3" />
                )}
                Hiragana
              </button>

              <button
                onClick={() =>
                  setBahasaVisibility((prev) =>
                    prev.map((v, i) => (i === index ? !v : v))
                  )
                }
                className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
                  bahasaVisibility[index]
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
                aria-label={`${
                  bahasaVisibility[index] ? 'Hide' : 'Show'
                } Bahasa for ${card.kanji}`}
              >
                {bahasaVisibility[index] ? (
                  <Eye className="w-3 h-3" />
                ) : (
                  <EyeOff className="w-3 h-3" />
                )}
                Bahasa
              </button>
            </div>
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
              <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">
                Hiragana
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">
                Bahasa Indonesia
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">
                Visibility
              </th>
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
                <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                  {hiraganaVisibility[index] ? card.hiragana : ''}
                </td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                  {bahasaVisibility[index] ? card.bahasa : ''}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setHiraganaVisibility((prev) =>
                          prev.map((v, i) => (i === index ? !v : v))
                        )
                      }
                      className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
                        hiraganaVisibility[index]
                          ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}
                      aria-label={`${
                        hiraganaVisibility[index] ? 'Hide' : 'Show'
                      } Hiragana for ${card.kanji}`}
                    >
                      {hiraganaVisibility[index] ? (
                        <Eye className="w-3 h-3" />
                      ) : (
                        <EyeOff className="w-3 h-3" />
                      )}
                      Hiragana
                    </button>
                    <button
                      onClick={() =>
                        setBahasaVisibility((prev) =>
                          prev.map((v, i) => (i === index ? !v : v))
                        )
                      }
                      className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
                        bahasaVisibility[index]
                          ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}
                      aria-label={`${
                        bahasaVisibility[index] ? 'Hide' : 'Show'
                      } Bahasa for ${card.kanji}`}
                    >
                      {bahasaVisibility[index] ? (
                        <Eye className="w-3 h-3" />
                      ) : (
                        <EyeOff className="w-3 h-3" />
                      )}
                      Bahasa
                    </button>
                  </div>
                </td>
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
