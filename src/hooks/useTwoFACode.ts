import { useState, useRef } from 'react';
import { isCodeFilled } from '../lib/twoFAHelpers';

type TwoFAState = 'initial' | 'expired' | 'invalid' | 'filled';

export const useTwoFACode = (
  setState: (state: TwoFAState) => void,
  setError: (error: string | null) => void,
  state: TwoFAState
) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1 || isNaN(Number(value))) return;

    if (state === 'expired') return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (state === 'invalid') {
      setState('initial');
      setError(null);
    }

    if (isCodeFilled(newCode)) {
      setState('filled');
    } else {
      setState('initial');
    }

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const resetCode = () => {
    setCode(['', '', '', '', '', '']);
  };

  return {
    code,
    inputs,
    handleChange,
    handleKeyDown,
    resetCode,
  };
};
