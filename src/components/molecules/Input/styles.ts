import styled, { css } from 'styled-components';
import { Container as IconContainer } from '../../atoms/Icon/styles';
type StyleProps = {
  noRightBorderRadius?: boolean;
  icon?: string;
};

export const Container = styled.div<StyleProps>`
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  border: 1px solid #c0c0c0;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }

  ${({ noRightBorderRadius }) =>
    noRightBorderRadius &&
    css`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `};

  ${({ icon }) =>
    !!!icon &&
    css`
      ${IconContainer} {
        filter: invert(37%) sepia(93%) saturate(7471%) hue-rotate(50deg)
          brightness(91%) contrast(135%);
      }
    `};

  input {
    flex: 1;
    background: transparent;
    border: 0;

    font-weight: bold;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
