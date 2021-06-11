import React from 'react';
import Icon from '../../atoms/Icon';
import Label from '../../atoms/Label';
import TabTitle from '../../atoms/TabTitle';
import * as S from './styles';

type TabProps = {
  isSelected?: boolean;
  label: string;
  pathIcon: string;
  tabTitle: string;
};

const Tab: React.FC<TabProps> = ({ pathIcon, isSelected, label, tabTitle }) => {
  return (
    <S.Container data-testid="Tab" isSelected={isSelected}>
      <Icon pathIcon={pathIcon} isBig />
      <S.WrappTabTexts>
        <Label text={label} />
        <TabTitle text={tabTitle} />
      </S.WrappTabTexts>
    </S.Container>
  );
};

export default Tab;
