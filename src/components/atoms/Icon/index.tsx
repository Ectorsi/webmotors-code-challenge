import React from 'react';
import { Container } from './styles';

type IconProps = {
  pathIcon: string;
  isBig?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
};

const Icon: React.FC<IconProps> = ({ pathIcon, isBig, isMedium, isSmall }) => {
  return (
    <Container
      data-testid="icon"
      pathIcon={pathIcon}
      isBig={isBig}
      isMedium={isMedium}
      isSmall={isSmall}
    />
  );
};

export default Icon;
