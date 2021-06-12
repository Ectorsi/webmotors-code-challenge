import React from 'react';

import Button from '../../atoms/Button';
import Tab from '../Tab';
import * as S from './styles';

type CardHeaderProps = {
  label: string;
  pathIcon: string;
  tabTitle: string;
};

const CardHeader: React.FC<CardHeaderProps> = ({
  label,
  pathIcon,
  tabTitle,
}) => {
  return (
    <S.Container>
      <S.WrappTabs>
        <Tab label={label} pathIcon={pathIcon} tabTitle={tabTitle} isSelected />

        <Tab label={label} pathIcon={pathIcon} tabTitle={tabTitle} />
      </S.WrappTabs>
      <Button underlined>Vender meu carro</Button>
    </S.Container>
  );
};

export default CardHeader;
