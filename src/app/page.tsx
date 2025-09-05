'use client';

import {
  Header,
  ProgressBar,
  Flashcard,
  NavigationControls,
  ResetButton,
  KeyboardShortcuts,
  JsonDataDisplay,
  KanjiList,
} from '@/components';

import { useFlashcard } from '@/hooks/useFlashcard';
import flashcardData from '@/data/flashcards.json';
import { FlashcardData } from '@/types/flashcard';

export default function Home() {
  const {
    currentIndex,
    isFlipped,
    currentCard,
    nextCard,
    prevCard,
    flipCard,
    resetProgress,
  } = useFlashcard(flashcardData.flashcards);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <Header />

        <ProgressBar
          currentIndex={currentIndex}
          totalCards={flashcardData.flashcards.length}
        />

        <Flashcard card={currentCard} isFlipped={isFlipped} onFlip={flipCard} />

        <NavigationControls
          currentIndex={currentIndex}
          totalCards={flashcardData.flashcards.length}
          isFlipped={isFlipped}
          onPrevious={prevCard}
          onNext={nextCard}
          onFlip={flipCard}
        />

        <ResetButton onReset={resetProgress} />

        <KeyboardShortcuts />

        <KanjiList flashcards={flashcardData.flashcards} />

        <JsonDataDisplay data={flashcardData as FlashcardData} />
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
