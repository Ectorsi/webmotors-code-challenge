import React from 'react';
import { Container } from './styles';

type LabelProps = {
  text: string;
  fontSize?: string;
  isLabelTextUppercase?: boolean;
  hasLabelPadding?: boolean;
};

const Label: React.FC<LabelProps> = ({
  text,
  fontSize,
  hasLabelPadding,
  isLabelTextUppercase,
}) => {
  return (
    <Container
      data-testid="Label"
      hasLabelPadding={hasLabelPadding}
      fontSize={fontSize}
      isLabelTextUppercase={isLabelTextUppercase}
    >
      {text}
    </Container>
  );
};

export default Label;
