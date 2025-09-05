import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Japanese Flashcards
        </h1>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        Learn Japanese vocabulary with interactive flashcards
      </p>
    </div>
  );
};

export default Header;
