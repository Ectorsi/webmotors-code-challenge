import React from 'react';
import Label from '../../atoms/Label';
import * as S from './styles';

type SelectItem = {
  ID: number;
  Name: string;
  makeId?: number;
  modelId?: number;
};

type SelectProps = {
  data: SelectItem[];
  noBorderLeftRadius?: boolean;
  label?: string;
  isTextBold?: boolean;
  name: string;
  value: string;
  selectedDefault?: string;
  handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void;
};

const Select: React.FC<SelectProps> = ({
  data,
  noBorderLeftRadius,
  isTextBold,
  label,
  value,
  name,
  selectedDefault,
  handleSelectChange,
  ...rest
}) => {
  return (
    <S.Container noBorderLeftRadius={noBorderLeftRadius} data-testid="Select">
      {label && <Label fontSize="13" text={label} />}
      <S.Select
        {...rest}
        isTextBold={isTextBold}
        onChange={(e) => handleSelectChange(e)}
        name={name}
        value={value}
      >
        <S.SelectItem key={0} value={0}>
          {selectedDefault}
        </S.SelectItem>

        {data &&
          data.map((item) => (
            <S.SelectItem key={item.ID} value={item.ID}>
              {item.Name}
            </S.SelectItem>
          ))}
      </S.Select>
    </S.Container>
  );
};

export default Select;
