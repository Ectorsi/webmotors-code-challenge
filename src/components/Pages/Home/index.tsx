import React, { useCallback } from 'react';
import HomeTemplate from '../../Template/HomeTemplate';

import api from '../../../Services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../../atoms/Loader';
// import * as S from './styles';

type Item = {
  ID: number;
  Name: string;
  makeId?: number;
  modelId?: number;
};

const Home: React.FC = () => {
  const [makes, setMakes] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  const [models, setModels] = useState<Item[]>([]);
  const [versions, setVersions] = useState<Item[]>([]);
  const [raioData, setRaioData] = useState<Item[]>([
    {
      ID: 1,
      Name: '100',
    },
    {
      ID: 2,
      Name: '200',
    },
    {
      ID: 3,
      Name: '300',
    },
    {
      ID: 4,
      Name: '400',
    },
    {
      ID: 5,
      Name: '500',
    },
  ]);
  const [wishYearDate, setWishYearDate] = useState<Item[]>([
    {
      ID: 1,
      Name: '2017',
    },
    {
      ID: 2,
      Name: '2018',
    },
    {
      ID: 3,
      Name: '2019',
    },
    {
      ID: 4,
      Name: '2020',
    },
    {
      ID: 5,
      Name: '2021',
    },
  ]);
  const [priceRangeData, setPriceRangeData] = useState<Item[]>([
    {
      ID: 1,
      Name: 'Até 30 mil',
    },
    {
      ID: 2,
      Name: 'Até 40 mil',
    },
    {
      ID: 3,
      Name: 'Até 50 mil',
    },
    {
      ID: 4,
      Name: 'Até 60 mil',
    },
    {
      ID: 5,
      Name: 'Até 70 mil',
    },
  ]);

  const [whereField, setWhereField] = useState<string>('');
  const [selectedRaio, setSelectedRaio] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<string>('');

  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedVersion, setSelectedVersion] = useState<string>('');

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

  useEffect(() => {
    // https://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=2

    if (selectedMake) {
      const fetchModels = async () => {
        const response = await api.get(`/Model?MakeID=${selectedMake}`);

        if (response.data) {
          setModels(response.data);
        }
      };
      fetchModels();
    }

    if (selectedModel) {
      const fetchVersions = async () => {
        const response = await api.get(`/Version?ModelID=${selectedModel}`);

        if (response.data) {
          setVersions(response.data);
        }
      };
      fetchVersions();
    }
  }, [
    selectedRaio,
    selectedYear,
    selectedMake,
    selectedPrice,
    selectedModel,
    selectedVersion,
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWhereField(event.target.value);
  };

  const handleSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      switch (e.target.name) {
        case 'raio':
          setSelectedRaio(e.target.value);
          break;
        case 'make':
          setSelectedMake(e.target.value);
          break;
        case 'wishYear':
          setSelectedYear(e.target.value);
          break;
        case 'priceRange':
          setSelectedPrice(e.target.value);
          break;
        case 'model':
          setSelectedModel(e.target.value);
          break;
        case 'version':
          setSelectedVersion(e.target.value);
          break;
        default:
          setSelectedMake('1');
          break;
      }
    },
    [],
  );

  const clearInputWhere = useCallback(() => {
    setWhereField('');
  }, []);

  const handleClearFields = useCallback(() => {
    // e.preventDefault();
    setWhereField('');
    setSelectedRaio('');
    setSelectedYear('');
    setSelectedPrice('');
    setSelectedMake('');
    setSelectedModel('');
    setSelectedVersion('');
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <HomeTemplate
      makes={makes}
      models={models}
      versions={versions}
      handleSelect={handleSelect}
      handleInputChange={handleInputChange}
      whereField={whereField}
      clearInputWhere={clearInputWhere}
      raioData={raioData}
      wishYearDate={wishYearDate}
      priceRangeData={priceRangeData}
      handleClearFields={handleClearFields}
      selectedRaio={selectedRaio}
      selectedYear={selectedYear}
      selectedPrice={selectedPrice}
      selectedMake={selectedMake}
      selectedModel={selectedModel}
      selectedVersion={selectedVersion}
    />
  );
};

export default Home;
