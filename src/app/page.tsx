'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import AuthForm from '../components/AuthForm';
import TwoFAForm from '../components/TwoFAForm';
import { Typography } from '@mui/material';
import AuthCard from '../widgets/ui/AuthCard';

export default function Home() {
  const [show2FA, setShow2FA] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoginSuccess = () => {
    setShow2FA(true);
    setError(null);
  };

  const handleBack = () => {
    setShow2FA(false);
    setError(null);
  };

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f0f0',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AuthCard showBackButton={show2FA} onBack={handleBack}>
          {!show2FA ? (
            <AuthForm onSuccess={handleLoginSuccess} setError={setError} />
          ) : (
            <TwoFAForm setError={setError} />
          )}
        </AuthCard>
        {error && !show2FA && (
          <Typography
            sx={{
              color: 'red',
              textAlign: 'center',
              mt: 2,
            }}
          >
            {error}
          </Typography>
        )}
      </motion.div>
    </main>
  );
}
