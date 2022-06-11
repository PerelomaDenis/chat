import { createTheme } from '@mui/material';

export const customTheme = createTheme({
  palette: {
    info: {
      main: '#282B30',
    },
    primary: {
      main: '#7164FF',
    },
    success: {
      main: '#0ECB81',
    },
    error: {
      main: '#D24242',
    },
    warning: {
      main: '#CBB80E',
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          padding: '8px 16px',
        },
        sizeMedium: {
          padding: '12px 24px',
        },
        sizeLarge: {
          padding: '15px 24px',
        },
        root: {
          color: '#FFFFFF',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          // border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          '& .MuiInputAdornment-root': {
            color: '#8C939D',
          },
          '&.Mui-focused .MuiInputAdornment-root': {
            color: '#FFFFFF',
          },
        },
        inputRoot: {
          padding: '5px 20px',
        },
        input: {
          color: '#8C939D',
        },
        clearIndicator: {
          color: '#FFFFFF',
        },
        popupIndicator: {
          display: 'none',
        },
        popper: {
          borderRadius: 3,
        },
        listbox: {
          backgroundColor: '#191F29',
          padding: 0,
          '& .MuiAutocomplete-option': {
            padding: '16px 0',
          },
        },
        option: {
          color: '#FFFFFF',
          opacity: 0.7,
          margin: '0 16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          '&:last-child': {
            borderBottom: 'none',
          },
        },
        inputFocused: {
          color: '#FFFFFF',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          label: {
            color: '#8C939D',
            fontSize: '0.875rem',
            '&.Mui-focused, &.Mui-disabled, &.Mui-error': {
              color: '#8C939D',
            },
            '&.MuiInputLabel-shrink': {
              top: 15,
              left: 2,
            },
          },
          '& .MuiOutlinedInput-root': {
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
          },
          '& .MuiOutlinedInput-root.Mui-error': {
            border: '1px solid #D24242',
          },
          input: {
            color: '#FFFFFF',
            fontSize: '0.875rem',
            padding: '22px 16px 10px',
          },
          '& .Mui-disabled': {
            background: '#1C2027',
          },
          '& .Mui-error .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiFormHelperText-root.Mui-error': {
            margin: 0,
            fontSize: '0.6875rem',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.2)',
          '& .MuiSvgIcon-root': {
            fontSize: '1.1rem',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: '4px 8px',
          height: theme.spacing(3),
          borderRadius: 3,
          color: theme.palette[ownerState.color].main,
          backgroundColor:
            (ownerState.color === 'success' && 'rgba(14, 203, 129, 0.1)') ||
            (ownerState.color === 'warning' && 'rgba(203, 184, 14, 0.1)') ||
            (ownerState.color === 'error' && 'rgba(235, 107, 107, 0.1)'),
        }),
        label: {
          padding: 0,
        },
      },
    },
  },
});
