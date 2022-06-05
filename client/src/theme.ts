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
  },
});
