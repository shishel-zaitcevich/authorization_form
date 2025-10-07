import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginMock } from '../lib/apiMocks';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import Header from '../widgets/ui/Header';

interface Props {
  onSuccess: () => void;
  setError: (error: string | null) => void;
}

export default function AuthForm({ onSuccess, setError }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = !email || !password;

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
    mutation.mutate({ email, password });
  };

  return (
    <Box
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: '6px',
        minHeight: '372px',
        width: '440px',
        padding: '32px',
      }}
    >
      <Header />
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
      <TextField
        fullWidth
        placeholder="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            height: '40px',
            padding: '8px 11px',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: (theme) => theme.palette.primary.main,
                boxShadow: '0px 0px 0px 2px rgba(5, 145, 255, 0.1)',
              },
            },
          },
        }}
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
      <TextField
        fullWidth
        placeholder="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            height: '40px',
            padding: '8px 11px',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: (theme) => theme.palette.primary.main,
                boxShadow: '0px 0px 0px 2px rgba(5, 145, 255, 0.1)',
              },
            },
          },
        }}
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
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={isDisabled || mutation.isPending}
        sx={{
          background: isDisabled ? '#e0e0e0' : '#1976d2',
          color: '#fff',
          height: '40px',
        }}
      >
        {mutation.isPending ? 'Logging in...' : 'Log in'}
      </Button>
    </Box>
  );
}
