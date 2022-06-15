import { Box, Button, styled } from '@mui/material';

export const InputWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
}));

export const PasswordWrapper = styled(InputWrapper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(4),
}));

export const FormButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(6),
  width: '100%',
}));
