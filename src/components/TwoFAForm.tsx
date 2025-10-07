import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { verify2FAMock } from '../lib/apiMocks';
import TwoFAButton from '../shared/ui/TwoFAButton';
import SuccessModal from './SuccessModal';
import { useTwoFATimer } from '../hooks/useTwoFATimer';
import { useTwoFACode } from '../hooks/useTwoFACode';
import {
  shouldShowButton,
  getButtonType,
  isButtonDisabled,
} from '../lib/twoFAHelpers';
import {
  titleStyles,
  subtitleStyles,
  inputBoxStyles,
  getTwoFAInputStyles,
  errorMessageStyles,
  buttonBoxStyles,
} from '../lib/twoFAStyles';

interface Props {
  setError: (error: string | null) => void;
}

type TwoFAState = 'initial' | 'expired' | 'invalid' | 'filled';

export default function TwoFAForm({ setError }: Props) {
  const [state, setState] = useState<TwoFAState>('initial');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { startTimer, clearTimer } = useTwoFATimer(setState, setError, state);
  const { code, inputs, handleChange, handleKeyDown, resetCode } = useTwoFACode(
    setState,
    setError,
    state
  );

  const mutation = useMutation({
    mutationFn: verify2FAMock,
    onSuccess: () => {
      clearTimer();
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
    },
    onError: (error: any) => {
      if (
        error.message.includes('expired') ||
        error.message.includes('Expired')
      ) {
        setState('expired');
        setError(null);
      } else {
        setState('invalid');
        setError(null);
      }
    },
  });

  const handleSubmit = () => {
    const fullCode = code.join('');
    mutation.mutate({ code: fullCode });
  };

  const handleGetNew = () => {
    resetCode();
    setState('initial');
    setError(null);
    startTimer();
    alert('New code sent!');
    inputs.current[0]?.focus();
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const showButton = shouldShowButton(state);
  const buttonType = getButtonType(state);
  const buttonDisabled = isButtonDisabled(state);

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom sx={titleStyles}>
        Two-Factor Authentication
      </Typography>
      <Typography variant="body1" align="center" sx={subtitleStyles}>
        Enter the 6-digit code from the Google Authenticator app
      </Typography>
      <Box sx={inputBoxStyles}>
        {code.map((digit, index) => (
          <TextField
            key={index}
            inputRef={(el) => (inputs.current[index] = el)}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            disabled={state === 'expired'}
            inputProps={{
              maxLength: 1,
              style: { textAlign: 'center', fontSize: '20px', fontWeight: 500 },
            }}
            variant="outlined"
            sx={getTwoFAInputStyles(state)}
          />
        ))}
      </Box>
      {state === 'invalid' && (
        <Typography sx={errorMessageStyles}>Invalid code</Typography>
      )}
      {showButton && (
        <Box sx={buttonBoxStyles}>
          <TwoFAButton
            type={buttonType}
            disabled={buttonDisabled}
            loading={mutation.isPending}
            onClick={buttonType === 'getNew' ? handleGetNew : handleSubmit}
          />
        </Box>
      )}

      <SuccessModal open={showSuccessModal} onClose={handleCloseModal} />
    </>
  );
}
