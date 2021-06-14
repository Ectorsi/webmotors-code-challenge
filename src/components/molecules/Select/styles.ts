import styled, { css } from 'styled-components';

type StyleProps = {
  noBorderLeftRadius?: boolean;
  isTextBold?: boolean;
  label?: string;
};

export const Container = styled.div<StyleProps>`
  border-radius: 0;
  border: 1px solid #ccc;
  width: 100%;
  background-color: transparent;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  @media (min-width: 1199px) {
    margin-bottom: inherit;
  }

  ${({ noBorderLeftRadius }) =>
    noBorderLeftRadius &&
    css`
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    `};

  ${({ label }) =>
    !!!label &&
    css`
      padding-left: 8px;
    `};
`;

export const Select = styled.select<StyleProps>`
  height: 100%;
  display: flex;
  flex: 1;

  padding: 8px 0;
  border: none;

  ${({ isTextBold }) =>
    isTextBold &&
    css`
      font-weight: bold;
    `};
`;

export const SelectItem = styled.option``;
