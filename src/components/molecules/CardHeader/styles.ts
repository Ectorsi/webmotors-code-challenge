import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    position: relative;
  }
`;

export const WrappTabs = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  width: 230px;
`;
