import React from 'react';
import { Container } from './styles';

type LabelProps = {
  text: string;
};

const Label: React.FC<LabelProps> = ({ text }) => {
  return <Container data-testid="Label">{text}</Container>;
};

export default Label;
