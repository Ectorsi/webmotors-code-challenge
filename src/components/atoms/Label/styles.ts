import styled, { css } from 'styled-components';

type StyleProps = {
  fontSize?: string;
  isLabelTextUppercase?: boolean;
  hasLabelPadding?: boolean;
};

export const Container = styled.div<StyleProps>`
  font-size: 10px;
  color: #898986;

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${`${fontSize}px`};
    `};

  ${({ isLabelTextUppercase }) =>
    isLabelTextUppercase &&
    css`
      text-transform: uppercase;
    `};

  ${({ hasLabelPadding }) =>
    hasLabelPadding &&
    css`
      padding: 0 10px;
    `};
`;
