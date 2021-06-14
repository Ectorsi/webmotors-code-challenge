import styled from 'styled-components';
import { Container as LabelContainer } from '../../atoms/Label/styles';

export const Container = styled.div`
  max-width: 933px;
  margin: 0 auto;
  width: 100%;
`;

export const Conditions = styled.div`
  padding-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 5px;
  @media (min-width: 1199px) {
    height: 100%;
    display: flex;
    align-items: center;
    margin: inherit;
    padding-bottom: inherit;
  }
`;

export const ButtonWrapperForAdvancedSearch = styled(ButtonWrapper)`
  width: 140px;
`;

export const VersionWrapper = styled.div`
  ${LabelContainer} {
    width: 12%;
  }
  select {
    width: 88%;
  }
`;
