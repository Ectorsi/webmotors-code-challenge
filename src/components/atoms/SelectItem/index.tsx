import React from 'react';
import * as S from './styles';

const SelectItem: React.FC = ({ children }) => {
  return <S.Option data-testid="SelectItem">{children}</S.Option>;
};

export default SelectItem;
