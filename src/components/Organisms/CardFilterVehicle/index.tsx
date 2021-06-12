import React, { useRef } from 'react';
import CardBody from '../../atoms/CardBody';
import CardHeader from '../../molecules/CardHeader';
import PinIcon from '../../../assets/icons/pin.svg';
import closeIcon from '../../../assets/icons/close.svg';
import * as S from './styles';
import CheckBox from '../../atoms/Checkbox';
import { useCallback } from 'react';
import { Col10, Col5, Container } from '../../../styles/GridSystem';
import Input from '../../molecules/Input';
import { Form } from '@unform/web';
import Select from '../../molecules/Select';
import Button from '../../atoms/Button';

const CardFilterVehicle: React.FC = () => {
  const formRef = useRef(null);
  const handleChange = useCallback(() => {
    console.log('Mudou');
  }, []);

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  const raioData = ['100', '200', '300', '400', '500'];
  const MarkingData = ['Todas'];
  const ModelData = ['Todos'];
  const WishYearDate = ['Ano Desejado'];
  const PriceRangeData = ['Faixa de Preço'];
  const VersionData = ['Todas'];

  return (
    <S.Container>
      <CardHeader />
      <CardBody>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <S.Conditions>
            <CheckBox label="Novo" name="Novo" onChange={handleChange} />
            <CheckBox label="Usado" name="Usado" onChange={handleChange} />
          </S.Conditions>
          <Col10>
            <Container>
              <Input
                name="Onde"
                noRightBorderRadius
                label="Onde:"
                icon={PinIcon}
                rightIcon={closeIcon}
                placeholder=""
              />
              <Select
                data={raioData}
                noBorderLeftRadius
                label="Raio:"
                isTextBold
              />
              <Select data={MarkingData} label="Marca:" isTextBold />
              <Select label="Modelo:" data={ModelData} />
            </Container>

            <Container>
              <Col5>
                <Container>
                  <Select data={WishYearDate} />
                  <Select data={PriceRangeData} />
                </Container>
              </Col5>
              <Col5>
                <Select label="Versão:" data={VersionData} />
              </Col5>
            </Container>

            <Container>
              <Col5>
                <Container>
                  <Button simpleButton>{`>`} Busca avançada</Button>
                </Container>
              </Col5>
              <Col5>
                <Button rawButton>Limpar filtros</Button>
                <Button fullButton> Ver Ofertas</Button>
              </Col5>
            </Container>
          </Col10>
        </Form>
      </CardBody>
    </S.Container>
  );
};

export default CardFilterVehicle;
