import React, { InputHTMLAttributes, useRef } from 'react';
import Icon from '../../atoms/Icon';

import * as S from './styles';
import Label from '../../atoms/Label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  rightIcon?: string;
  noRightBorderRadius?: boolean;
  label?: string;
  value: string;
  clearInputWhere?(): void;
  handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<InputProps> = ({
  icon,
  label,
  rightIcon,
  handleInputChange,
  clearInputWhere,
  noRightBorderRadius,
  value,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <S.Container
      data-testid="input-container"
      noRightBorderRadius={noRightBorderRadius}
    >
      {icon && (
        <S.LeftIconWrapper>
          <Icon pathIcon={icon} isMedium />
        </S.LeftIconWrapper>
      )}
      {label && <Label fontSize="13" hasLabelPadding text={label} />}
      <input
        value={value}
        ref={inputRef}
        {...rest}
        onChange={handleInputChange}
      />
      {rightIcon && (
        <S.RightIconWrapper>
          <button onClick={clearInputWhere}>
            <Icon pathIcon={rightIcon} isSmall />
          </button>
        </S.RightIconWrapper>
      )}
    </S.Container>
  );
};

export default Input;
