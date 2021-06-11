import React from 'react';
import { Container } from './styles';

type CheckboxProps = {
  onChange(): void;
};

const Checkbox: React.FC<CheckboxProps> = ({ onChange }) => {
  return (
    <Container data-testid="Checkbox" onChange={onChange}>
      <input type="checkbox" />
    </Container>
  );
};

export default Checkbox;
