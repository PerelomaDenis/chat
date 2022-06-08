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
          border: '1px solid rgba(255, 255, 255, 0.1)',
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
          '& .MuiAutocomplete-option': {
            padding: '16px 0',
          },
        },
        option: {
          color: '#FFFFFF',
          opacity: 0.7,
          margin: '0 16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
        inputFocused: {
          color: '#FFFFFF',
        },
      },
    },
  },
});
