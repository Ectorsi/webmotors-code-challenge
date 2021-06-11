import styled, { css } from 'styled-components';
import { Container as IconContainer } from '../../atoms/Icon/styles';
import { Container as TabTitleContainer } from '../../atoms/TabTitle/styles';

type StyleProps = {
  isSelected?: boolean;
};

export const Container = styled.div<StyleProps>`
  display: flex;
  width: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 7px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-bottom: 2px solid #83474a;
      box-sizing: border-box;

      ${IconContainer} {
        filter: invert(37%) sepia(93%) saturate(7471%) hue-rotate(50deg)
          brightness(91%) contrast(135%);
      }
      ${TabTitleContainer} {
        color: #83474a;
      }
    `};
`;

export const WrappTabTexts = styled.div`
  display: block;
  margin-left: 15px;
`;
