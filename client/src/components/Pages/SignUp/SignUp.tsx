import React from 'react';

import { SignUpFormContainer } from './SignUpFormContainer';

import * as S from './SignUp.styles';
import image from '../../../assets/images/sign-up.png';

export const SignUp = () => {
  return (
    <S.AuthWrapper>
      <S.LeftSide>
        <SignUpFormContainer />
      </S.LeftSide>
      <S.RightSide>
        <img src={image} alt="image" />
      </S.RightSide>
    </S.AuthWrapper>
  );
};
