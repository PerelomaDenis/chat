import React from 'react';

import { Box, Typography } from '@mui/material';
import { SignUpForm } from './SignUpForm';

export const SignUpFormContainer = () => {
  return (
    <Box style={{ maxWidth: 420, width: '100%' }}>
      <Typography variant="h3">Регистрация</Typography>
      <SignUpForm />
    </Box>
  );
};
