import React from 'react';
import { Terminal } from 'lucide-react';

export function TerminalHeader() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <Terminal className="w-8 h-8" />
      <h1 className="text-2xl font-bold">Yes Terminal</h1>
    </div>
  );
}