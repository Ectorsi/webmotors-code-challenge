import React from 'react';
import Label from '../../atoms/Label';
import * as S from './styles';

type SelectItem = {
  ID: number;
  Name: string;
};

type SelectProps = {
  data: SelectItem[];
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
    <S.Container noBorderLeftRadius={noBorderLeftRadius} data-testid="Select">
      {label && <Label hasLabelPadding fontSize="13" text={label} />}
      <S.Select {...rest} isTextBold={isTextBold}>
        {data &&
          data.map((item) => (
            <S.SelectItem key={item.ID}> {item.Name} </S.SelectItem>
          ))}
      </S.Select>
    </S.Container>
  );
};

export default Select;
