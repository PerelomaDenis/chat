import { Box, styled } from '@mui/material';

export const AuthWrapper = styled(Box)(() => ({
  display: 'flex',
  height: '100%',
}));

export const LeftSide = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  height: '100%',
}));

export const RightSide = styled(LeftSide)(() => ({
  backgroundColor: '#191f28',
}));
