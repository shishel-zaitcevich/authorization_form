'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AuthForm from '../components/AuthForm';
import TwoFAForm from '../components/TwoFAForm';

export default function Home() {
  const [show2FA, setShow2FA] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoginSuccess = () => {
    setShow2FA(true);
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
        style={{ width: '300px' }}
      >
        {!show2FA ? (
          <AuthForm onSuccess={handleLoginSuccess} setError={setError} />
        ) : (
          <TwoFAForm setError={setError} />
        )}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </motion.div>
    </main>
  );
}
