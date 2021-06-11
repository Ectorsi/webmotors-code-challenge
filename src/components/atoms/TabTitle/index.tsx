import React from 'react';
import { Container } from './styles';

type TabTitleProps = {
  text: string;
};

const TabTitle: React.FC<TabTitleProps> = ({ text }) => {
  return <Container data-testid="TabTitle">{text}</Container>;
};

export default TabTitle;
