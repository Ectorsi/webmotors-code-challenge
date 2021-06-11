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

  ${({ pathIcon }) =>
    !!pathIcon &&
    css`
      background-image: url(${pathIcon});
      filter: invert(37%) sepia(93%) saturate(0%) hue-rotate(3deg)
        brightness(99%) contrast(1%);
    `};

  ${({ isBig }) =>
    isBig &&
    css`
      background-size: cover;
      height: 30px;
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
