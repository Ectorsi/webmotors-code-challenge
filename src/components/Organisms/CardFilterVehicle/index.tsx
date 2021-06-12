/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef } from 'react';
import CardBody from '../../atoms/CardBody';
import CardHeader from '../../molecules/CardHeader';
// @ts-ignore
import PinIcon from '../../../assets/icons/pin.svg';
// @ts-ignore
import closeIcon from '../../../assets/icons/close.svg';
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

/**
 * [
  {
    "ID": 1,
    "Name": "Chevrolet"
  },
  {
    "ID": 2,
    "Name": "Honda"
  },
  {
    "ID": 3,
    "Name": "Ford"
  }
]
 */

type Make = {
  ID: number;
  Name: string;
};

type CardFilterVehicleProps = {
  makes: Make[];
};

const CardFilterVehicle: React.FC<CardFilterVehicleProps> = ({ makes }) => {
  const formRef = useRef(null);
  // const handleChange = useCallback(() => {
  //   console.log('Mudou');
  // }, []);

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  // const raioData = ['100', '200', '300', '400', '500'];
  // const ModelData = ['Todos'];
  // const WishYearDate = ['Ano Desejado'];
  // const PriceRangeData = ['Faixa de Preço'];
  // const VersionData = ['Todas'];

  return (
    <S.Container>
      <Col10>
        <CardHeader />
      </Col10>
      <CardBody>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <Col10>
            <S.Conditions>
              <CheckBox label="Novo" name="Novo" />
              <CheckBox label="Usado" name="Usado" />
            </S.Conditions>
          </Col10>
          <Col10>
            <Row>
              <Col5>
                <Row>
                  <Col7>
                    <Input
                      name="Onde"
                      noRightBorderRadius
                      label="Onde:"
                      icon={PinIcon}
                      rightIcon={closeIcon}
                      placeholder=""
                    />
                  </Col7>
                  <Col3 fullFilling>
                    {/* <Select
                    // @ts-ignore 
                      data={raioData}
                      noBorderLeftRadius
                      label="Raio:"
                      isTextBold
                    /> */}
                  </Col3>
                </Row>
              </Col5>
              <Col5>
                <Row>
                  <Col5>
                    <Select data={makes} label="Marca:" isTextBold />
                  </Col5>
                  <Col5>
                    {/* <Select label="Modelo:" 
                   
                    data={ModelData} /> */}
                  </Col5>
                </Row>
              </Col5>
            </Row>
            <Row>
              <Col5>
                <Row>
                  <Col5>
                    {/* <Select 
                     // @ts-ignore 
                    data={WishYearDate} /> */}
                  </Col5>
                  <Col5>
                    {/* <Select 
                     // @ts-ignore 
                    data={PriceRangeData} /> */}
                  </Col5>
                </Row>
              </Col5>
              <Col5>
                {/* <Select label="Versão:" 
                 // @ts-ignore 
                data={VersionData} /> */}
              </Col5>
            </Row>

            <Row>
              <Col5>
                <Button simpleButton>{`>`} Busca avançada</Button>
              </Col5>
              <Col5>
                <Row>
                  <Col4>
                    <Button rawButton>Limpar filtros</Button>
                  </Col4>
                  <Col6>
                    <Button fullButton> Ver Ofertas</Button>
                  </Col6>
                </Row>
              </Col5>
            </Row>
          </Col10>
        </Form>
      </CardBody>
    </S.Container>
  );
};

export default CardFilterVehicle;
