import React from 'react';
import CardFilterVehicle from '../../Organisms/CardFilterVehicle';
import { Container } from '../../../styles/GridSystem';
type Item = {
  ID: number;
  Name: string;
  makeId?: number;
  modelId?: number;
};

type HomeTemplateProps = {
  makes: Item[];
  models: Item[];
  versions: Item[];
  whereField: string;
  raioData: Item[];
  wishYearDate: Item[];
  priceRangeData: Item[];
  selectedRaio: string;
  selectedYear: string;
  selectedPrice: string;
  selectedMake: string;
  selectedModel: string;
  selectedVersion: string;
  handleClearFields(): void;
  clearInputWhere(): void;
  handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSelect(e: React.ChangeEvent<HTMLSelectElement>): void;
};

const HomeTemplate: React.FC<HomeTemplateProps> = ({
  makes,
  handleSelect,
  handleInputChange,
  clearInputWhere,
  handleClearFields,
  models,
  selectedRaio,
  selectedYear,
  selectedPrice,
  selectedMake,
  selectedModel,
  selectedVersion,
  raioData,
  wishYearDate,
  priceRangeData,
  whereField,
  versions,
}) => {
  return (
    <Container>
      <CardFilterVehicle
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
    </Container>
  );
};

export default HomeTemplate;
