import { Dialog, DialogContent, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableScrollLock={true}
      PaperProps={{
        sx: {
          borderRadius: '8px',
          padding: '24px',
          minWidth: '400px',
        },
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      }}
    >
      <DialogContent sx={{ textAlign: 'center', padding: 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: 64,
              color: '#52c41a',
            }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontSize: '24px',
            fontWeight: 600,
            mb: 1,
            color: 'rgba(0, 0, 0, 0.88)',
          }}
        >
          Congratulations!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            color: 'rgba(0, 0, 0, 0.65)',
            lineHeight: '24px',
          }}
        >
          You have been successfully authorized
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
