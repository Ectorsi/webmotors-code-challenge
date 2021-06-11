import styled, { css } from 'styled-components';

type StylesProps = {
  fullButton?: boolean;
  underlined?: boolean;
  simpleButton?: boolean;
  rawButton?: boolean;
};

export const Container = styled.button<StylesProps>`
  ${({ fullButton }) =>
    fullButton &&
    css`
      height: 47px;
      width: 100%;
      background-color: #c80a2e;

      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
    `};

  ${({ underlined }) =>
    underlined &&
    css`
      height: 30px;
      width: 100%;
      border: 3px solid #f9b340;

      font-size: 16px;
      font-weight: bold;
      text-transform: capitalize;
    `};

  ${({ simpleButton }) =>
    simpleButton &&
    css`
      height: 16.5px;
      width: 100%;
      border: transparent;

      font-size: 16px;
      font-weight: bold;
      color: #c80a2e;
      text-transform: capitalize;
    `};

  ${({ rawButton }) =>
    rawButton &&
    css`
      height: 15px;
      width: 100%;
      border: transparent;

      font-size: 14.5px;
      color: #94949e;
      text-transform: capitalize;
    `};
`;
