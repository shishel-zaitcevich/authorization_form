import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

import { motion, easeOut } from 'framer-motion';

import { loginMock } from '../lib/apiMocks';

import { useEmailValidation } from '../hooks/useEmailValidation';
import {
  getInputStyles,
  errorTextStyles,
  getButtonStyles,
} from '../lib/textFieldStyles';

interface Props {
  onSuccess: () => void;
  setError: (error: string | null) => void;
}

export default function AuthForm({ onSuccess, setError }: Props) {
  const [password, setPassword] = useState('');

  const {
    email,
    emailError,
    touched,
    handleEmailChange,
    handleEmailBlur,
    validateBeforeSubmit,
  } = useEmailValidation();

  const isDisabled = !email || !password || !!emailError;

  const mutation = useMutation({
    mutationFn: loginMock,
    onSuccess: (data) => {
      if (data.requires2FA) {
        onSuccess();
      } else {
        alert('Logged in!');
      }
    },
    onError: (error: any) => {
      setError(error.message);
    },
  });

  const handleSubmit = () => {
    if (!validateBeforeSubmit()) {
      return;
    }

    mutation.mutate({ email, password });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              lineHeight: '32px',
              fontSize: '24px',
              fontWeight: 600,
              mb: '24px',
            }}
          >
            Sign in to your account to continue
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box mb={2}>
            <TextField
              fullWidth
              placeholder="Email"
              variant="outlined"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              onBlur={handleEmailBlur}
              error={touched && !!emailError}
              sx={getInputStyles(touched && !!emailError)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="/images/login.svg"
                      alt="Login icon"
                      style={{ width: 16, height: 16 }}
                    />
                  </InputAdornment>
                ),
              }}
              autoFocus
            />
            {touched && emailError && (
              <Typography sx={errorTextStyles}>{emailError}</Typography>
            )}
          </Box>
        </motion.div>

        <motion.div variants={itemVariants}>
          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ ...getInputStyles(), mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src="/images/lock.svg"
                    alt="Lock icon"
                    style={{ width: 16, height: 16 }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={isDisabled || mutation.isPending}
            sx={getButtonStyles(isDisabled || mutation.isPending)}
          >
            {mutation.isPending ? 'Logging in...' : 'Log in'}
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
}
