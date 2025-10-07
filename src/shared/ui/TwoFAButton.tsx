import Button from '@mui/material/Button';

interface TwoFAButtonProps {
  type: 'continue' | 'getNew';
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export default function TwoFAButton({
  type,
  disabled = false,
  loading = false,
  onClick,
}: TwoFAButtonProps) {
  const isGetNew = type === 'getNew';
  const buttonText = isGetNew
    ? 'Get new'
    : loading
      ? 'Verifying...'
      : 'Continue';

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled || loading}
      sx={{
        background: (theme) =>
          disabled ? theme.palette.primary.dark : theme.palette.primary.main,
        color: disabled ? '#rgba(0, 0, 0, 0.25' : '#fff',
        height: '40px',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        '&:hover': {
          backgroundColor: (theme) =>
            disabled ? theme.palette.primary.dark : theme.palette.primary.main,
        },
        '&.Mui-disabled': {
          background: 'rgba(0, 0, 0, 0.04)',
          color: 'rgba(0, 0, 0, 0.25',
        },
      }}
    >
      {buttonText}
    </Button>
  );
}
