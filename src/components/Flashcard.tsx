import { Flashcard as FlashcardType } from '@/types/flashcard';

interface FlashcardProps {
  card: FlashcardType;
  isFlipped: boolean;
  onFlip: () => void;
}

const Flashcard = ({ card, isFlipped, onFlip }: FlashcardProps) => {
  return (
    <div className="relative mb-8">
      <div
        className={`relative w-full h-80 cursor-pointer transition-transform duration-500 transform-gpu preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={onFlip}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side - Kanji */}
        <div
          className={`absolute inset-0 w-full h-full rounded-2xl shadow-lg backface-hidden ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl border-2 border-indigo-100 dark:border-indigo-700 flex items-center justify-center p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="text-8xl font-bold text-gray-800 dark:text-white mb-4">
                {card.kanji}
              </div>
              <div className="text-indigo-600 dark:text-indigo-400 font-medium">
                Click to reveal
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - Hiragana & Bahasa */}
        <div
          className={`absolute inset-0 w-full h-full rounded-2xl shadow-lg backface-hidden rotate-y-180 ${
            isFlipped ? '' : 'rotate-y-180'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center p-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-4">{card.hiragana}</div>
              <div className="text-2xl font-medium opacity-90">
                {card.bahasa}
              </div>
              <div className="text-sm opacity-75 mt-4">Click to flip back</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
