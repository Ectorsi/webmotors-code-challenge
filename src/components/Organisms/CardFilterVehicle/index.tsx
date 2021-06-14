/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef } from 'react';
import CardBody from '../../atoms/CardBody';
import CardHeader from '../../molecules/CardHeader';

import * as S from './styles';
import CheckBox from '../../atoms/Checkbox';
import {
  Col10,
  Col3,
  Col4,
  Col5,
  Col6,
  Col7,
  Row,
} from '../../../styles/GridSystem';
import Input from '../../molecules/Input';
import { Form } from '@unform/web';
import Select from '../../molecules/Select';
import Button from '../../atoms/Button';
import { useState } from 'react';

enum TabType {
  TAB_1 = 'TAB_1',
  TAB_2 = 'TAB_2',
}

type Item = {
  ID: number;
  Name: string;
  makeId?: number;
  modelId?: number;
};

type CardFilterVehicleProps = {
  makes: Item[];
  models: Item[];
  versions: Item[];
  raioData: Item[];
  wishYearDate: Item[];
  priceRangeData: Item[];
  whereField: string;
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

const CardFilterVehicle: React.FC<CardFilterVehicleProps> = ({ 
  makes,
  raioData,
  wishYearDate,
  priceRangeData,
  whereField, 
  selectedRaio,
  selectedYear,
  selectedPrice,
  selectedMake,
  selectedModel,
  selectedVersion,
  handleClearFields,
  clearInputWhere, 
  handleSelect,
  handleInputChange, 
  versions, 
  models 
}) => {
  const [selectedTab, setSelectedTab] = useState<TabType>(TabType.TAB_1);

  const formRef = useRef(null);

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  const FormPurchase = (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
    <Col10>
      <S.Conditions>
        <CheckBox label="Novo" name="Novo" />
        <CheckBox label="Usado" name="Usado" />
      </S.Conditions>
    </Col10>
    <Col10>
      <Row hasPaddingBottom >
        <Col5>
          <Row>
            <Col7>
              <Input
                name="Onde"
                noRightBorderRadius
                label="Onde:"
                icon="https://svgsilh.com/svg/1132647.svg"
                rightIcon="https://pic.onlinewebfonts.com/svg/img_20085.png"
                placeholder=""
                handleInputChange={handleInputChange}
                value={whereField}
                clearInputWhere={clearInputWhere}
              />
            </Col7>
            <Col3 fullFilling>
              <Select
                handleSelectChange={handleSelect}
                data={raioData}
                noBorderLeftRadius
                label="Raio:"
                isTextBold
                name="raio"
                value={selectedRaio}
              />
            </Col3>
          </Row>
        </Col5>
        <Col5>
          <Row>
            <Col5>
              <Select 
                data={makes} 
                label="Marca:" 
                isTextBold 
                handleSelectChange={handleSelect}
                name="make"
                selectedDefault="Todas"
                value={selectedMake}
              />

            </Col5>
            <Col5>
              <Select 
              label="Modelo:" 
              name="model"
              isTextBold 
              data={models} 
              handleSelectChange={handleSelect}
              selectedDefault="Todos"
              value={selectedModel}
              />
              
            </Col5>
          </Row>
        </Col5>
      </Row>
      <Row hasPaddingBottom >
        <Col5>
          <Row>
            <Col5>
              <Select 
               name="wishYear"
               handleSelectChange={handleSelect}
               selectedDefault="Ano desejado"
              data={wishYearDate} 
              value={selectedYear}
                
              />
            </Col5>
            <Col5>
              <Select 
               name="priceRange"
               handleSelectChange={handleSelect}
               selectedDefault="Faixa de preço"
              data={priceRangeData} 
              value={selectedPrice}
              />
            </Col5>
          </Row>
        </Col5>
        <Col5>
        <S.VersionWrapper>
            <Select 
            label="Versão:" 
            isTextBold 
            name="version"
            data={versions}
            handleSelectChange={handleSelect}
            selectedDefault="Todas"
            value={selectedVersion}
            />
          </S.VersionWrapper>
        </Col5>
      </Row>

      <Row>
        <Col5>
        <S.ButtonWrapperForAdvancedSearch>
          <Button simpleButton>{`>`} Busca avançada</Button>
          </S.ButtonWrapperForAdvancedSearch>
        </Col5>
        <Col5>
          <Row>
            <Col4>
            <S.ButtonWrapper>
              <Button rawButton onClick={handleClearFields} >Limpar filtros</Button>
              </S.ButtonWrapper>
            </Col4>
            <Col6>
              <Button fullButton> Ver Ofertas</Button>
            </Col6>
          </Row>
        </Col5>
      </Row>
    </Col10>
  </Form>

  )

  switch (selectedTab) {
    case 'TAB_1' :
      return (
        <S.Container>
      
        <CardHeader selectTab={setSelectedTab} />
      
      <CardBody>
        {FormPurchase}
       </CardBody>
    </S.Container>
      )
    case 'TAB_2':
      return(
        <S.Container>
     
          <CardHeader selectTab={setSelectedTab} />
       
        <CardBody>
          <h2>Em breve você terá acesso à esse recurso</h2>
         </CardBody>
      </S.Container>
      )
  
    default:  
      return (
        <S.Container>
      
          <CardHeader selectTab={setSelectedTab} />
      
        <CardBody>
          {FormPurchase}
         </CardBody>
      </S.Container>
      )
      
  }
};

export default CardFilterVehicle;
