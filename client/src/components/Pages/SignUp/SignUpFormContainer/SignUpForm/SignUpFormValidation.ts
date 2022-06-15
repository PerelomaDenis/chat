import * as yup from 'yup';
import { ValidationKeys } from '../../../../../contants';

export const SignUpFormValidation = yup.object().shape({
  password: yup
    .string()
    .required(ValidationKeys.REQUIRED)
    .min(3, ValidationKeys.PASSWORD_MIN)
    .max(32, ValidationKeys.PASSWORD_MAX),
  email: yup.string().email(ValidationKeys.EMAIL).required(ValidationKeys.REQUIRED),
  name: yup.string().required(ValidationKeys.REQUIRED),
  repeatPassword: yup
    .string()
    .test(
      'password',
      ValidationKeys.CONFIRM_PASSWORDS,
      (value, testContext) => value === testContext.parent.password
    ),
});
