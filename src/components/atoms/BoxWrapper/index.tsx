import React from 'react';

import * as S from './styles';

const BoxWrapper: React.FC = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default BoxWrapper;
