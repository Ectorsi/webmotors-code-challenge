import React from 'react';
import CheckBox from '../../atoms/Checkbox';
import * as S from './styles';

type CardConditionProps = {
  onChange(): void;
};

const CarCondition: React.FC<CardConditionProps> = ({ onChange }) => {
  return (
    <S.Container data-testid="CarCondition">
      <CheckBox label="Novo" name="Novo" onChange={onChange} />
      <CheckBox label="Usado" name="Usado" onChange={onChange} />
    </S.Container>
  );
};

export default CarCondition;
