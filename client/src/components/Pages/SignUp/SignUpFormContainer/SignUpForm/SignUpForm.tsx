import React from 'react';
import { useFormik } from 'formik';

import { TextField } from '@mui/material';

import { SignUpFormValidation } from './SignUpFormValidation';
import * as S from './SignUpForm.styles';

export const SignUpForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: SignUpFormValidation,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <S.InputWrapper>
        <TextField
          fullWidth
          name="name"
          placeholder="Имя"
          label="Имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <TextField
          fullWidth
          name="email"
          placeholder="Email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
      </S.InputWrapper>
      <S.PasswordWrapper>
        <TextField
          fullWidth
          name="password"
          placeholder="Пароль"
          label="Пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          name="repeatPassword"
          placeholder="Подтвердите пароль"
          label="Подтвердите пароль"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={formik.touched.repeatPassword && !!formik.errors.repeatPassword}
          helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
        />
      </S.PasswordWrapper>
      <S.FormButton disabled={formik.isValid} type="submit" variant="contained" color="info">
        Зарегистрироваться
      </S.FormButton>
    </form>
  );
};
