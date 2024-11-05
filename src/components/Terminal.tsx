import React from 'react';
import { WindowControls } from './WindowControls';
import { TerminalLine } from './TerminalLine';

interface TerminalProps {
  displayText: string;
}

export function Terminal({ displayText }: TerminalProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-green-500/20">
      <WindowControls />
      <div className="h-[60vh] overflow-y-auto">
        <div className="space-y-2">
          <TerminalLine text={displayText} showCursor={true} />
        </div>
      </div>
    </div>
  );
}