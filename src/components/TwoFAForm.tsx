import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { motion, AnimatePresence } from 'framer-motion';

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

  const inputContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Typography variant="h5" align="center" gutterBottom sx={titleStyles}>
          Two-Factor Authentication
        </Typography>
        <Typography variant="body1" align="center" sx={subtitleStyles}>
          Enter the 6-digit code from the Google Authenticator app
        </Typography>
      </motion.div>

      <motion.div
        variants={inputContainerVariants}
        initial="hidden"
        animate="visible"
      >
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
                style: {
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: 500,
                },
              }}
              variant="outlined"
              sx={getTwoFAInputStyles(state)}
            />
          ))}
        </Box>
      </motion.div>

      <AnimatePresence mode="wait">
        {state === 'invalid' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Typography sx={errorMessageStyles}>Invalid code</Typography>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={buttonBoxStyles}>
              <TwoFAButton
                type={buttonType}
                disabled={buttonDisabled}
                loading={mutation.isPending}
                onClick={buttonType === 'getNew' ? handleGetNew : handleSubmit}
              />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <SuccessModal open={showSuccessModal} onClose={handleCloseModal} />
    </>
  );
}
