import styled, { css } from 'styled-components';

type StyleProps = {
  fontSize?: string;
  isTextUppercase?: boolean;
  hasPadding?: boolean;
};

export const Container = styled.div<StyleProps>`
  font-size: 10px;
  color: #898986;

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${`${fontSize}px`};
    `};

  ${({ isTextUppercase }) =>
    isTextUppercase &&
    css`
      text-transform: uppercase;
    `};

  ${({ hasPadding }) =>
    hasPadding &&
    css`
      padding: 0 10px;
    `};
`;
