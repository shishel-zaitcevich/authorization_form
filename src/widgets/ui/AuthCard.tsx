import { ReactNode } from 'react';
import { Card, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from './Header';

interface AuthCardProps {
  children: ReactNode;
  onBack?: () => void;
  showBackButton?: boolean;
}

export default function AuthCard({
  children,
  onBack,
  showBackButton = false,
}: AuthCardProps) {
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: '6px',
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
    </Card>
  );
}
