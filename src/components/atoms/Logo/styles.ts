import styled, { css } from 'styled-components';

type styleProps = {
  logoPath: string;
};

export const Container = styled.div<styleProps>`
  height: 28px;
  width: 145px;

  ${({ logoPath }) =>
    !!logoPath &&
    css`
      background-image: url(${logoPath});
    `};
`;
