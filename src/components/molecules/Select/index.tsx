import React from 'react';
import Label from '../../atoms/Label';
import * as S from './styles';

type SelectProps = {
  data: string[];
  noBorderLeftRadius?: boolean;
  label?: string;
  isTextBold?: boolean;
};

const Select: React.FC<SelectProps> = ({
  data,
  noBorderLeftRadius,
  isTextBold,
  label,
  ...rest
}) => {
  return (
    <S.Container noBorderLeftRadius={noBorderLeftRadius}>
      {label && <Label hasPadding fontSize="13" text={label} />}
      <S.Select {...rest} isTextBold={isTextBold}>
        {data &&
          data.map((item) => <S.SelectItem key={item}> {item} </S.SelectItem>)}
      </S.Select>
    </S.Container>
  );
};

export default Select;
