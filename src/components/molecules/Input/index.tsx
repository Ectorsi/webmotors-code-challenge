import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import Icon from '../../atoms/Icon';
import { useField } from '@unform/core';

import { Container } from './styles';
import Label from '../../atoms/Label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: string;
  rightIcon?: string;
  noRightBorderRadius?: boolean;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon,
  label,
  rightIcon,
  noRightBorderRadius,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      data-testid="input-container"
      noRightBorderRadius={noRightBorderRadius}
    >
      {icon && <Icon pathIcon={icon} isSmall />}
      {label && <Label fontSize="16" hasPadding text={label} />}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {rightIcon && <Icon pathIcon={rightIcon} isSmall />}
    </Container>
  );
};

export default Input;
