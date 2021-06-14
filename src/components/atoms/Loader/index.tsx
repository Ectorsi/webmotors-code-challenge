import React from 'react';

import * as S from './styles';

const Loader: React.FC = () => {
  return (
    <S.LoaderWrapper>
      <S.Container data-testid="Loader">
        <div></div> <div></div> <div></div> <div></div> <div></div>
      </S.Container>
    </S.LoaderWrapper>
  );
};
export default Loader;
