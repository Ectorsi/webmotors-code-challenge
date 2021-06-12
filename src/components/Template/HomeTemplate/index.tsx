import React from 'react';
import CardFilterVehicle from '../../Organisms/CardFilterVehicle';
import * as S from './styles';

type Make = {
  ID: number;
  Name: string;
};

type HomeTemplateProps = {
  makes: Make[];
};

const HomeTemplate: React.FC<HomeTemplateProps> = ({ makes }) => {
  return (
    <S.Container>
      <CardFilterVehicle makes={makes} />
    </S.Container>
  );
};

export default HomeTemplate;
