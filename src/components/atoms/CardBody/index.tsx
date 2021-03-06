import React from 'react';

import * as S from './styles';

const CardBody: React.FC = ({ children }) => {
  return <S.Container data-testid="CardBody">{children}</S.Container>;
};

export default CardBody;
