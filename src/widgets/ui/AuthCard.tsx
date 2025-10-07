import { ReactNode } from 'react';

import { Card, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';

import Header from './Header';

interface AuthCardProps {
  children: ReactNode;
  onBack?: () => void;
  showBackButton?: boolean;
}

const MotionCard = motion(Card);

export default function AuthCard({
  children,
  onBack,
  showBackButton = false,
}: AuthCardProps) {
  return (
    <MotionCard
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: '6px',
        minHeight: '372px',
        width: '440px',
        padding: '32px',
        position: 'relative',
      }}
    >
      {showBackButton && onBack && (
        <Box position={'absolute'}>
          <IconButton onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
      )}
      <Header />
      {children}
    </MotionCard>
  );
}
