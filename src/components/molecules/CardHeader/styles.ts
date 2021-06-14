import styled from 'styled-components';

export const CardHeaderWrapper = styled.div`
  padding: 10px;
  @media (min-width: 1199px) {
    padding: inherit;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
`;

export const WrappTabs = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  width: 180px;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1199px) {
    display: inherit;
    justify-content: inherit;
  }
`;
