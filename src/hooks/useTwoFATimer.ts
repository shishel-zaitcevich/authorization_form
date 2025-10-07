import { useEffect, useRef } from 'react';
import { CODE_EXPIRATION_TIME } from '../lib/twoFAHelpers';

type TwoFAState = 'initial' | 'expired' | 'invalid' | 'filled';

export const useTwoFATimer = (
  setState: (state: TwoFAState) => void,
  setError: (error: string | null) => void,
  state: TwoFAState
) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setState('expired');
      setError('Code has expired. Please request a new one.');
    }, CODE_EXPIRATION_TIME);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearTimer();
    };
  }, []);

  useEffect(() => {
    if (state === 'filled') {
      clearTimer();
    }
  }, [state]);

  return { startTimer, clearTimer };
};
