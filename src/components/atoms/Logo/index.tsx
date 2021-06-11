import React from 'react';
import { Container } from './styles';

type LogoProps = {
  logoPath: string;
};

const Logo: React.FC<LogoProps> = ({ logoPath }) => {
  return <Container data-testid="Logo" logoPath={logoPath} />;
};

export default Logo;
