import React from 'react';
import HomeTemplate from '../../Template/HomeTemplate';

import api from '../../../Services/api';
import { useEffect } from 'react';
import { useState } from 'react';
// import * as S from './styles';

type Item = {
  ID: number;
  Name: string;
};

const Home: React.FC = () => {
  const [makes, setMakes] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMake = async () => {
      setLoading(true);
      const response = await api.get('/Make');

      if (response.data) {
        setLoading(false);
        setMakes(response.data);
      }
    };
    fetchMake();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  //   if (makes && makes?.length > 0) {
  return <HomeTemplate makes={makes} />;
  //   }
};

export default Home;
