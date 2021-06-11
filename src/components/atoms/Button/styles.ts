import styled, { css } from 'styled-components';
import { shade } from 'polished';
type StylesProps = {
  fullButton?: boolean;
  underlined?: boolean;
  simpleButton?: boolean;
  rawButton?: boolean;
};

export const Container = styled.button<StylesProps>`
  cursor: pointer;
  background: none;
  ${({ fullButton }) =>
    fullButton &&
    css`
      height: 47px;
      width: 100%;
      background-color: #c80a2e;
      transition: background-color 0.2s;
      border: transparent;
      border-radius: 5px;

      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      color: white;

      &:hover {
        background: ${shade(0.2, '#c80a2e')};
      }
    `};

  ${({ underlined }) =>
    underlined &&
    css`
      height: 40px;
      width: 100%;
      border: 2.5px solid #f9b340;
      border-radius: 5px;

      font-size: 16px;
      font-weight: bold;
      color: #f9b340;
    `};

  ${({ simpleButton }) =>
    simpleButton &&
    css`
      height: 16.5px;
      width: 100%;
      border: transparent;

      font-size: 16px;
      font-weight: bold;
      color: #9d120a;
    `};

  ${({ rawButton }) =>
    rawButton &&
    css`
      height: 15px;
      width: 100%;
      border: transparent;

      font-size: 14.5px;
      color: #94949e;
    `};
`;
