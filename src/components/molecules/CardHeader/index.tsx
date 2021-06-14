/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useCallback } from 'react';

import { useState } from 'react';
import Button from '../../atoms/Button';
import Tab from '../Tab';
import * as S from './styles';

import { Row } from '../../../styles/GridSystem';
import Logo from '../../atoms/Logo';

enum TabType {
  TAB_1 = 'TAB_1',
  TAB_2 = 'TAB_2',
}

type CardHeaderProps = {
  selectTab(tabName: TabType): void;
};

const CardHeader: React.FC<CardHeaderProps> = ({ selectTab }) => {
  const [isTabActive, setIsTabActive] = useState<TabType>(TabType.TAB_1);

  const isDesktop = window.matchMedia('(min-width:1199px)').matches;

  const switchTab = useCallback(
    (tabName) => {
      setIsTabActive(tabName);
      selectTab(tabName);
    },
    [selectTab],
  );

  return (
    <S.CardHeaderWrapper>
      <Row>
        <S.LogoWrapper>
          <Logo />

          {!isDesktop && (
            <S.ButtonWrapper>
              <Button style={{ height: '35px' }} underlined>
                Vender meu carro
              </Button>
            </S.ButtonWrapper>
          )}
        </S.LogoWrapper>
      </Row>
      <Row>
        <S.WrappTabs>
          <Tab
            label="Comprar"
            pathIcon="https://svgsilh.com/svg/1918554.svg"
            onClick={() => switchTab(TabType.TAB_1)}
            tabTitle="Carros"
            isSelected={isTabActive === TabType.TAB_1}
          />

          <Tab
            label="Comprar"
            pathIcon="https://svgsilh.com/svg/2707960.svg"
            onClick={() => switchTab(TabType.TAB_2)}
            tabTitle="Motos"
            isSelected={isTabActive === TabType.TAB_2}
          />
        </S.WrappTabs>
        {isDesktop && (
          <S.ButtonWrapper>
            <Button style={{ height: '35px' }} underlined>
              Vender meu carro
            </Button>
          </S.ButtonWrapper>
        )}
      </Row>
    </S.CardHeaderWrapper>
  );
};

export default CardHeader;
