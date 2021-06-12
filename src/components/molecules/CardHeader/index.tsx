import React from 'react';
import { useCallback } from 'react';

import { useState } from 'react';
import CarIcon from '../../../assets/icons/car.svg';
import MotoIcon from '../../../assets/icons/moto.svg';
import Button from '../../atoms/Button';
import Tab from '../Tab';
import * as S from './styles';

enum TabType {
  TAB_1 = 'TAB_1',
  TAB_2 = 'TAB_2',
}

const CardHeader: React.FC = () => {
  const [isTabActive, setIsTabActive] = useState<TabType>(TabType.TAB_1);

  const switchTab = useCallback((tabName) => {
    setIsTabActive(tabName);
  }, []);

  return (
    <S.Container>
      <S.WrappTabs>
        <Tab
          label="Comprar"
          pathIcon={CarIcon}
          onClick={() => switchTab(TabType.TAB_1)}
          tabTitle="Carro"
          isSelected={isTabActive === TabType.TAB_1}
        />

        <Tab
          label="Comprar"
          pathIcon={MotoIcon}
          onClick={() => switchTab(TabType.TAB_2)}
          tabTitle="Moto"
          isSelected={isTabActive === TabType.TAB_2}
        />
      </S.WrappTabs>
      <S.ButtonWrapper>
        <Button underlined>Vender meu carro</Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default CardHeader;
