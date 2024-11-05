import React from 'react';

interface TerminalLineProps {
  text: string;
  showCursor: boolean;
}

export function TerminalLine({ text, showCursor }: TerminalLineProps) {
  return (
    <div className="flex items-start">
      <span className="text-green-400 mr-2">$</span>
      <span className="typing-text">{text}</span>
      {showCursor && <span className="animate-pulse ml-1">▊</span>}
    </div>
  );
}