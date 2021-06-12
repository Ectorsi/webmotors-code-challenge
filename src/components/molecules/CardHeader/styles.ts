import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`;

export const WrappTabs = styled.div`
  display: flex;
`;
