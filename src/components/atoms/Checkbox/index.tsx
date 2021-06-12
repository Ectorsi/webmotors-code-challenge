import React from 'react';
import { Container, Label, Input, Mark } from './styles';

type Props = {
  name: string;
  label: string;
  onChange(): void;
};

const CheckBox: React.FC<Props> = ({ name, label, onChange }) => {
  return (
    <Container>
      <Label htmlFor={label}>
        <Input name={name} type="checkbox" id={label} data-testid="Checkbox" />
        <Mark />
        {label}
      </Label>
    </Container>
  );
};
export default CheckBox;
