import React from 'react';
import { Container, Label, Input, Mark } from './styles';

type Props = {
  name: string;
  label: string;
  onChange(): void;
};

const CheckBox: React.FC<Props> = ({ name, label, onChange }) => {
  return (
    <Container data-testid="Checkbox">
      <Label htmlFor={label}>
        <Input name={name} type="checkbox" id={label} />
        <Mark />
        {label}
      </Label>
    </Container>
  );
};
export default CheckBox;
