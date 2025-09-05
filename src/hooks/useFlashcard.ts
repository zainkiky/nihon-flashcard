import { useState, useEffect } from 'react';
import { Flashcard } from '@/types/flashcard';

export const useFlashcard = (cards: Flashcard[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cards[currentIndex];

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const resetProgress = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          nextCard();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevCard();
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          event.preventDefault();
          flipCard();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped]);

  return {
    currentIndex,
    isFlipped,
    currentCard,
    nextCard,
    prevCard,
    flipCard,
    resetProgress,
  };
};
