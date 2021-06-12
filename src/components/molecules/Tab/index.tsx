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
  onClick(): void;
};

const Tab: React.FC<TabProps> = ({
  pathIcon,
  isSelected,
  label,
  tabTitle,
  onClick,
}) => {
  return (
    <S.Container data-testid="Tab" isSelected={isSelected} onClick={onClick}>
      <Icon pathIcon={pathIcon} isBig />
      <S.WrappTabTexts>
        <Label isLabelTextUppercase text={label} />
        <TabTitle text={tabTitle} />
      </S.WrappTabTexts>
    </S.Container>
  );
};

export default Tab;
