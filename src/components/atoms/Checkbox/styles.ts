import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const Mark = styled.span`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  left: 0;
  border-radius: 5%;
  margin-right: 10px;
  vertical-align: middle;
  border: 1px solid #ccc;
  &::after {
    content: '';
    width: 0;
    height: 0;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    display: inline-block;
    transform: rotate(45deg);
    width: 4px;
    height: 9px;
    border-bottom: 2px solid #e45244;
    border-right: 2px solid #e45244;
  }
`;

export const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      width: 4px;
      height: 9px;
      opacity: 1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
  align-items: center;
`;
