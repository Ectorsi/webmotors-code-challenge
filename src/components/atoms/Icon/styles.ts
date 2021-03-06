import styled, { css } from 'styled-components';

type StyleProps = {
  pathIcon: string;
  isBig?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
};

export const Container = styled.div<StyleProps>`
  height: 22px;
  width: 25px;
  background-size: contain;
  background-repeat: no-repeat;

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
      height: 25px;
      width: 30px;
    `};

  ${({ isMedium }) =>
    isMedium &&
    css`
      height: 15px;
      width: 15px;
    `};

  ${({ isSmall }) =>
    isSmall &&
    css`
      height: 10px;
      width: 10px;
    `};
`;
