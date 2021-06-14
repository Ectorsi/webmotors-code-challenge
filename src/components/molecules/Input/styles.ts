import styled, { css } from 'styled-components';
import { Container as IconContainer } from '../../atoms/Icon/styles';
type StyleProps = {
  noRightBorderRadius?: boolean;
  icon?: string;
};

export const Container = styled.div<StyleProps>`
  border-radius: 5px;
  padding: 7px;
  width: 100%;
  border: 1px solid #c0c0c0;
  color: #666360;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (min-width: 1199px) {
    margin-bottom: inherit;
  }

  & + div {
    margin-top: 8px;
  }

  ${({ noRightBorderRadius }) =>
    noRightBorderRadius &&
    css`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `};

  ${({ icon }) =>
    !!!icon &&
    css`
      ${IconContainer} {
        filter: invert(37%) sepia(93%) saturate(0%) hue-rotate(50deg)
          brightness(91%) contrast(135%);
      }
    `};

  input {
    flex: 1;
    background: transparent;
    border: 0;

    width: 100%;

    font-weight: bold;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const LeftIconWrapper = styled.div`
  position: relative;
  width: 15px;
  background-color: gray;

  ${() =>
    css`
      ${IconContainer} {
        position: absolute;
        top: -7px;
        left: 4px;
        filter: invert(37%) sepia(93%) saturate(7471%) hue-rotate(50deg)
          brightness(91%) contrast(135%);
      }
    `};
`;

export const RightIconWrapper = styled.div`
  position: relative;
  /* background-color: gray; */
  width: 15px;
  height: 15px;
  ${() =>
    css`
      button {
        position: absolute;
        top: 3px;
        right: 2px;
        border: none;
        cursor: pointer;
      }
    `};
`;
