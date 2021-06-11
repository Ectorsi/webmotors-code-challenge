import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullButton?: boolean;
  underlined?: boolean;
  simpleButton?: boolean;
  rawButton?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  fullButton,
  underlined,
  simpleButton,
  rawButton,
  children,
  ...rest
}) => {
  return (
    <Container
      type={'button'}
      fullButton={fullButton}
      underlined={underlined}
      simpleButton={simpleButton}
      rawButton={rawButton}
      {...rest}
      data-testid="Button"
    >
      {children}
    </Container>
  );
};

export default Button;
