import React from 'react';
import styled from 'styled-components';

import { Title, Text } from 'components/utils/Texts';
import { Button } from 'components/utils/Buttons';

const Wrapper = styled.section`
  height: ${({ theme: { sizes } }) => `calc(100vh - ${sizes.total})`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.form`
  box-shadow: 0 0 2px ${({ theme: { colors } }) => colors.gray};
  padding: 4rem 2rem;
`;

const Heading = styled.header``;

const Subtitle = styled.h4`
  color: ${({ theme: { colors } }) => colors.dark};
  margin: 1rem 0;
`;

const Body = styled.div`
  margin: 1rem 0;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioForm = styled.div`
  margin: 0.5rem;
`;

const FormSection = styled.section`
  margin: 1rem 0;
`;

const CheckboxGroup = styled.div``;

const Input = styled.input`
  &[type='radio'],
  &[type='checkbox'] {
    margin-right: 0.5rem;
  }

  &[type='text'] {
    width: 100%;
  }
`;

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
          Crea una nueva pista
        </Title>
      </Heading>

      <Body>
        <FormSection>
          <Subtitle>Titulo de la pista</Subtitle>
          <FormGroup>
            <Input type="text" />
          </FormGroup>
        </FormSection>

        <FormSection>
          <Subtitle color="dark">Tags</Subtitle>
          <CheckboxGroup>
            <FormGroup>
              <Input type="checkbox" name="tags[]" />
              <Label>J-Pop</Label>
            </FormGroup>

            <FormGroup>
              <Input type="checkbox" name="tags[]" />
              <Label>K-Pop</Label>
            </FormGroup>
          </CheckboxGroup>
        </FormSection>

        <FormSection>
          <Button flexible bgColor="orange" color="white">
            selecciona los archivos que quieras subir
          </Button>
        </FormSection>

        <FormSection>
          <FormGroup>
            <Input type="checkbox" />
            <Label>
              Crear una lista cuando hay varios archivos seleccionados
            </Label>
          </FormGroup>
        </FormSection>
      </Body>

      <Footer>
        <Sharing>
          <Text>Disponibilidad</Text>

          <RadioForm>
            <Input type="radio" />
            <Label>Publico</Label>
          </RadioForm>

          <RadioForm>
            <Input type="radio" />
            <Label>Privada</Label>
          </RadioForm>
        </Sharing>
      </Footer>
    </Content>
  </Wrapper>
);

export default Upload;
