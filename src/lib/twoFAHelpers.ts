export const CODE_EXPIRATION_TIME = 20000;

export const getBorderColor = (
  state: 'initial' | 'expired' | 'invalid' | 'filled'
) => {
  if (state === 'invalid' || state === 'expired') return '#ff4d4f';
  return undefined;
};

export const getBorderWidth = (
  state: 'initial' | 'expired' | 'invalid' | 'filled'
) => {
  if (state === 'expired') return '2px';
  if (state === 'invalid') return '1px';
  return '1px';
};

export const isCodeFilled = (code: string[]): boolean => {
  return code.every((digit) => digit !== '');
};

export const shouldShowButton = (
  state: 'initial' | 'expired' | 'invalid' | 'filled'
): boolean => {
  return state === 'filled' || state === 'invalid' || state === 'expired';
};

export const getButtonType = (
  state: 'initial' | 'expired' | 'invalid' | 'filled'
): 'continue' | 'getNew' => {
  return state === 'expired' ? 'getNew' : 'continue';
};

export const isButtonDisabled = (
  state: 'initial' | 'expired' | 'invalid' | 'filled'
): boolean => {
  return state === 'invalid';
};
