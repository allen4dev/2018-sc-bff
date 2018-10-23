import React from 'react';
import styled from 'styled-components';

import { Title, Text } from 'components/utils/Texts';
import { Button } from 'components/utils/Buttons';

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.form`
  box-shadow: 0 0 2px ${({ theme: { colors } }) => colors.gray};
  padding: 4rem 2rem;
`;

const Heading = styled.header``;

const Body = styled.div`
  margin: 1rem 0;
  text-align: center;
`;

const FormGroup = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;

  & > input[type='radio'],
  & > input[type='checkbox'] {
    margin-right: 0.5rem;
  }
`;
const Input = styled.input``;

const Label = styled.label``;

const Sharing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer``;

const Upload = () => (
  <Wrapper>
    <Content>
      <Heading>
        <Title color="dark" size="2rem">
          Arrastra y suelta pistas y albumes aqui
        </Title>
      </Heading>

      <Body>
        <Button flexible bgColor="orange" color="white">
          o selecciona los archivos que quieras subir
        </Button>

        <FormGroup>
          <Input type="checkbox" />

          <Label>
            Crear una lista cuando hay varios archivos seleccionados
          </Label>
        </FormGroup>
      </Body>

      <Footer>
        <Sharing>
          <Text>Disponibilidad</Text>

          <FormGroup>
            <Input type="radio" checked />
            <Label>Publico</Label>
          </FormGroup>

          <FormGroup>
            <Input type="radio" />
            <Label>Privada</Label>
          </FormGroup>
        </Sharing>
      </Footer>
    </Content>
  </Wrapper>
);

export default Upload;
