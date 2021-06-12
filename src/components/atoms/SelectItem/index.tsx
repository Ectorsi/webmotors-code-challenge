import React from 'react';
import * as S from './styles';

type SelectProps = {};

const SelectItem: React.FC = ({ children }) => {
  return <S.Option>{children}</S.Option>;
};

export default SelectItem;
