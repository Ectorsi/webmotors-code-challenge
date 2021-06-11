import styled, { css } from 'styled-components';

type StyleProps = {
  pathIcon: string;
  isBig?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
};

export const Container = styled.div<StyleProps>`
  height: 25px;
  width: 25px;
  /* background: #900; */

  ${({ pathIcon }) =>
    !!pathIcon &&
    css`
      background-image: url(${pathIcon});
    `};

  ${({ isBig }) =>
    isBig &&
    css`
      height: 40px;
      width: 40px;
    `};

  ${({ isMedium }) =>
    isMedium &&
    css`
      height: 35px;
      width: 35px;
    `};

  ${({ isSmall }) =>
    isSmall &&
    css`
      height: 25px;
      width: 25px;
    `};
`;
