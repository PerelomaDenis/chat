import { styled, Typography } from '@mui/material';

export const ModalText = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  marginTop: theme.spacing(4),
  color: '#FFFFFF',
  lineHeight: '22px',
}));

export const ModalSubtext = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  marginTop: theme.spacing(2),
  lineHeight: '20px',
}));
