import * as React from 'react';

import { ProfileAvatarProps } from './ProfileAvatar.types';
import * as S from './ProfileAvatar.styles';
import { Add, Delete } from '../../Images';

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ img }) => {
  return (
    <S.AvatarWrapper>
      <S.AvatarItem src={img} />
      <S.AvatarAction component="label">
        {!!img ? <Delete /> : <Add />}
        <input type="file" hidden />
      </S.AvatarAction>
    </S.AvatarWrapper>
  );
};
