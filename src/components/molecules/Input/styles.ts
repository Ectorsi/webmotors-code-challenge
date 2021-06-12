import styled, { css } from 'styled-components';

type StyleProps = {
  noRightBorderRadius?: boolean;
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
