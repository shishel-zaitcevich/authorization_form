import { useState, useRef, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';

import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
import { verify2FAMock } from '../lib/apiMocks';
import Header from '../widgets/ui/Header';

interface Props {
  setError: (error: string | null) => void;
}

export default function TwoFAForm({ setError }: Props) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [invalid, setInvalid] = useState(false);
  const inputs = useRef<HTMLInputElement[]>([]);

  const mutation = useMutation({
    mutationFn: verify2FAMock,
    onSuccess: () => {
      alert('2FA verified!');
    },
    onError: (error: any) => {
      setInvalid(true);
      setError(error.message);
    },
  });

  const handleChange = (index: number, value: string) => {
    if (value.length > 1 || isNaN(Number(value))) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setInvalid(false);
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const fullCode = code.join('');
  const isDisabled = fullCode.length < 6;

  const handleSubmit = () => {
    mutation.mutate({ code: fullCode });
  };

  const handleGetNew = () => {
    alert('New code sent!');
  };

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  return (
    <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
      <IconButton onClick={() => window.location.reload()} sx={{ mb: 1 }}>
        <ArrowBack />
      </IconButton>
      <Header />
      <Typography variant="h6" align="center" gutterBottom>
        Two-Factor Authentication
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Enter the 6-digit code from the Google Authenticator app
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {code.map((digit, index) => (
          <TextField
            key={index}
            inputRef={(el) => (inputs.current[index] = el)}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
            variant="outlined"
            error={invalid}
            sx={{ width: '40px' }}
          />
        ))}
      </div>
      {invalid && (
        <Typography color="error" align="center" sx={{ mb: 2 }}>
          Invalid code
        </Typography>
      )}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={isDisabled || mutation.isPending}
        sx={{
          mb: 1,
          background: isDisabled ? '#e0e0e0' : '#1976d2',
          color: '#fff',
        }}
      >
        {mutation.isPending ? 'Verifying...' : 'Continue'}
      </Button>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleGetNew}
      >
        Get new
      </Button>
    </Card>
  );
}
