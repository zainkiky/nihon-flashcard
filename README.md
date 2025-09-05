# Japanese Flashcard App

A modern, interactive Japanese vocabulary learning application built with Next.js 14 (App Router) and TypeScript.

## Features

- **Interactive Flashcards**: Learn Japanese kanji, hiragana, and Indonesian translations
- **Smooth Animations**: Beautiful card flip animations with CSS transforms
- **Keyboard Navigation**: Use arrow keys and spacebar for quick navigation
- **Progress Tracking**: Visual progress bar showing your learning journey
- **Automatic Dark Mode**: Automatically follows your system theme preference
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Component-Based Architecture**: Clean, maintainable code structure

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page component
├── components/
│   ├── Header.tsx          # App title and description
│   ├── ProgressBar.tsx     # Progress indicator
│   ├── Flashcard.tsx       # Individual flashcard component
│   ├── NavigationControls.tsx # Previous/Next/Flip buttons
│   ├── ResetButton.tsx     # Reset progress button
│   ├── KeyboardShortcuts.tsx # Keyboard shortcuts display
│   ├── JsonDataDisplay.tsx # JSON data viewer
│   └── index.ts            # Component exports
├── hooks/
│   └── useFlashcard.ts     # Custom hook for flashcard logic
├── types/
│   └── flashcard.ts        # TypeScript interfaces
└── data/
    └── flashcards.json     # Flashcard data
```

## Components

### Header
Displays the app title with a book icon and description.

### ProgressBar
Shows current progress through the flashcard deck with a visual progress bar.

### Flashcard
The main flashcard component with front (kanji) and back (hiragana + Indonesian) sides.

### NavigationControls
Navigation buttons for previous, flip, and next actions.

### ResetButton
Allows users to reset their progress and start over.

### KeyboardShortcuts
Displays available keyboard shortcuts for power users.

### JsonDataDisplay
Shows the raw JSON data structure for reference.

### KanjiList
Displays all kanji characters in a comprehensive list format with:
- **Mobile View**: Card-based layout for small screens
- **Desktop View**: Table format for better overview
- **Customizable Display**: Toggle visibility of Hiragana and Bahasa Indonesia columns
- **Interactive Toggles**: Eye/Eye-off icons to show/hide information
- **Complete Information**: Kanji, hiragana, and Indonesian translations
- **Total Count**: Shows the total number of kanji characters

## Custom Hook

### useFlashcard
Manages all flashcard state and logic:
- Current card index
- Card flip state
- Navigation functions
- Keyboard event handling

## Keyboard Shortcuts

- **←** Previous card
- **→** Next card
- **↑↓** Flip card
- **Space** Flip card or move to next (when flipped)

## Dark Mode

The app automatically follows your system theme preference:
- **Automatic Detection**: Automatically detects your system's dark/light mode setting
- **Real-time Updates**: Changes theme instantly when you switch system theme
- **No Manual Toggle**: Seamlessly follows your OS preference
- **Comprehensive Styling**: All components support both themes including:
  - Background gradients
  - Flashcard surfaces
  - Navigation buttons
  - Progress indicators
  - Text and icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework with dark mode support
- **Lucide React** - Beautiful icons
- **CSS-in-JS** - Styled components with CSS transforms
- **Context API** - Theme management and state

## Data Structure

The flashcard data is stored in `src/data/flashcards.json` with the following structure:

```json
{
  "flashcards": [
    {
      "kanji": "本",
      "hiragana": "ほん",
      "bahasa": "buku"
    }
  ]
}
```

## Customization

To add new flashcards, simply edit the `flashcards.json` file. The app will automatically update to include new cards.

To modify the styling, update the Tailwind classes in each component or modify the global CSS in `src/app/globals.css`.
