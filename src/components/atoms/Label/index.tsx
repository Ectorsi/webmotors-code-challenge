import React from 'react';
import { Container } from './styles';

type LabelProps = {
  text: string;
  fontSize?: string;
  hasPadding?: boolean;
};

const Label: React.FC<LabelProps> = ({ text, fontSize, hasPadding }) => {
  return (
    <Container data-testid="Label" hasPadding={hasPadding} fontSize={fontSize}>
      {text}
    </Container>
  );
};

export default Label;
