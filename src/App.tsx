import React, { useState, useEffect, useCallback } from 'react';
import { TerminalHeader } from './components/TerminalHeader';
import { Terminal } from './components/Terminal';
import { translations } from './data/translations';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const generateText = useCallback(() => {
    const translation = translations[currentIndex];
    return `The word for yes in ${translation.language} is ${translation.word} and pronounced "${translation.pronunciation}"`;
  }, [currentIndex]);

  useEffect(() => {
    if (!isTyping) return;

    const text = generateText();
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText(text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setDisplayText('');
          setCurrentIndex((prev) => (prev + 1) % translations.length);
        }, 2000);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentIndex, isTyping, generateText]);

  useEffect(() => {
    const handleKeyPress = () => {
      if (!isTyping) return;
      setIsTyping(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTyping]);

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <TerminalHeader />
        <Terminal displayText={displayText} />
        <div className="mt-4 text-center text-green-400/60 text-sm">
          Press any key to skip to next translation
        </div>
      </div>
    </div>
  );
}

export default App;