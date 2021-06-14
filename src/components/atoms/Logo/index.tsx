import React from 'react';
import { Img } from './styles';

const Logo: React.FC = () => {
  return (
    <Img
      data-testid="Logo"
      src="https://www.webmotors.com.br/assets/img/webmotors.svg?t=1895"
      alt="logo"
    />
  );
};

export default Logo;
