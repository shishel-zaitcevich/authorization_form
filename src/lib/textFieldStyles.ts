import { SxProps, Theme } from '@mui/material';

export const getInputStyles = (hasError: boolean = false): SxProps<Theme> => ({
  '& .MuiOutlinedInput-root': {
    height: '40px',
    padding: '8px 11px',
    '& fieldset': {
      borderColor: (theme) =>
        hasError ? theme.palette.error.main : theme.palette.primary.light,
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: (theme) =>
          hasError ? theme.palette.error.main : theme.palette.primary.main,
        boxShadow: hasError
          ? '0px 0px 0px 2px rgba(255, 77, 79, 0.1)'
          : '0px 0px 0px 2px rgba(5, 145, 255, 0.1)',
      },
    },
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: (theme) =>
          hasError ? theme.palette.error.main : theme.palette.primary.main,
      },
    },
  },
});

export const getButtonStyles = (isDisabled: boolean): SxProps<Theme> => ({
  backgroundColor: (theme) =>
    isDisabled ? theme.palette.primary.dark : theme.palette.primary.main,
  color: isDisabled ? 'rgba(0, 0, 0, 0.25)' : '#fff',
  height: '40px',
  border: (theme) =>
    `1px solid ${
      isDisabled ? theme.palette.primary.light : theme.palette.primary.main
    }`,
  '&:hover': {
    backgroundColor: (theme) =>
      isDisabled ? theme.palette.primary.dark : theme.palette.primary.main,
  },
  '&.Mui-disabled': {
    backgroundColor: (theme) => theme.palette.primary.dark,
    opacity: 0.6,
  },
});

export const errorTextStyles: SxProps<Theme> = {
  color: (theme) => theme.palette.error.main,
  fontSize: '14px',
  mt: '4px',
  lineHeight: '20px',
};
