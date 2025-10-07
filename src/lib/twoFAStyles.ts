import { SxProps, Theme } from '@mui/material';

export const getTwoFAInputStyles = (
  state: 'initial' | 'expired' | 'invalid' | 'filled'
): SxProps<Theme> => ({
  width: '52.67px',
  '& .MuiOutlinedInput-root': {
    height: '60px',
    '& fieldset': {
      borderColor: (theme) => {
        if (state === 'invalid' || state === 'expired') return '#ff4d4f';
        return theme.palette.primary.light;
      },
      borderWidth:
        state === 'invalid' ? '1px' : state === 'expired' ? '2px' : '1px',
    },
    '&:hover fieldset': {
      borderColor: (theme) => {
        if (state === 'invalid' || state === 'expired') return '#ff4d4f';
        return theme.palette.primary.main;
      },
      borderWidth:
        state === 'invalid' ? '1px' : state === 'expired' ? '2px' : '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: (theme) => {
        if (state === 'invalid' || state === 'expired') return '#ff4d4f';
        return theme.palette.primary.main;
      },
      borderWidth:
        state === 'invalid' ? '1px' : state === 'expired' ? '2px' : '1px',
    },
  },
});

export const titleStyles: SxProps<Theme> = {
  lineHeight: '32px',
  fontSize: '24px',
  fontWeight: 600,
  mb: '8px',
  color: 'rgba(0, 0, 0, 0.88)',
};

export const subtitleStyles: SxProps<Theme> = {
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 0.88)',
  mb: 3,
  lineHeight: '24px',
};

export const errorMessageStyles: SxProps<Theme> = {
  color: '#ff4d4f',
  fontSize: '16px',
  mb: 2,
};

export const inputBoxStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
  mb: 1,
};

export const buttonBoxStyles: SxProps<Theme> = {
  mt: 3,
};
