import styled from 'styled-components';

// aqui representa o sistema de grid da aplicação.

interface GridProps {
  hasPadding?: boolean;
  fullFilling?: boolean;
}

export const Row = styled.div`
  width: 100%;

  @media (min-width: 1199px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Container = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
  max-width: 1199px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1199px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Col1 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
`;
export const Col2 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
`;
export const Col3 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
  @media (min-width: 1199px) {
    width: 29%;
    flex: ${({ fullFilling }) => fullFilling && '1'};
  }
`;
export const Col4 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
  @media (min-width: 1199px) {
    width: 39%;
    flex: ${({ fullFilling }) => fullFilling && '1'};
  }
`;
export const Col5 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
  @media (min-width: 1199px) {
    width: 49%;
    flex: ${({ fullFilling }) => fullFilling && '1'};
  }
`;
export const Col6 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
  @media (min-width: 1199px) {
    width: 59%;
    flex: ${({ fullFilling }) => fullFilling && '1'};
  }
`;
export const Col7 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
  @media (min-width: 1199px) {
    width: 69%;
    flex: ${({ fullFilling }) => fullFilling && '1'};
  }
`;
export const Col8 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
  @media (min-width: 1199px) {
    width: 79%;
    flex: ${({ fullFilling }) => fullFilling && '1'};
  }
`;
export const Col9 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
  @media (min-width: 1199px) {
    width: 89%;
    flex: ${({ fullFilling }) => fullFilling && '1'};
  }
`;
export const Col10 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 20px'};
  @media (min-width: 1199px) {
    width: 99%;
    flex: ${({ fullFilling }) => fullFilling && '1'};
  }
`;
