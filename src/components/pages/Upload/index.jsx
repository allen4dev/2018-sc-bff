import React, { Component } from 'react';
import styled from 'styled-components';

import { Title, Text } from 'components/utils/Texts';
import { Button } from 'components/utils/Buttons';

const apiTags = [{ id: '1', name: 'JPop' }, { id: '2', name: 'Kpop' }];

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      tags: [],
    };

    this.photo = React.createRef();
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(() => ({ [name]: value }));
  };

  handleTagChange = name => {
    const { tags } = this.state;

    let newTags = [...tags];

    const tagName = name.toLowerCase();

    if (tags.find(tag => tag === tagName)) {
      newTags = tags.filter(tag => tag !== tagName);
    } else {
      newTags = tags.concat(tagName);
    }

    this.setState({ tags: newTags });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.photo);

    const { title, tags } = this.state;
    console.log(this.photo.current.files[0].name);
    console.log(title);
    console.log(tags);
  };

  render() {
    const { title } = this.state;

    return (
      <Wrapper>
        <Content onSubmit={this.handleSubmit}>
          <Heading>
            <Title color="dark" size="2rem">
              Crea una nueva pista
            </Title>
          </Heading>

          <Body>
            <FormSection>
              <Subtitle>Titulo de la pista</Subtitle>

              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </FormSection>

            <FormSection>
              <Subtitle color="dark">Tags</Subtitle>

              <CheckboxGroup>
                {apiTags.map(tag => (
                  <FormGroup key={tag.id}>
                    <Input
                      type="checkbox"
                      name="tags[]"
                      onChange={() => this.handleTagChange(tag.name)}
                    />
                    <Label>{tag.name.toLowerCase()}</Label>
                  </FormGroup>
                ))}
              </CheckboxGroup>
            </FormSection>

            <FormSection>
              <Subtitle>Imagen de la pista</Subtitle>

              <FormGroup>
                <input type="file" ref={this.photo} />
              </FormGroup>
            </FormSection>

            <FormSection>
              {/* <Button flexible bgColor="orange" color="white">
            selecciona los archivos que quieras subir
          </Button> */}
              <Subtitle>Archivo de sonido de la pista</Subtitle>

              <FormGroup>
                <Input type="file" />
              </FormGroup>
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

            <FormSection>
              <Button type="submit" color="white" bgColor="orange">
                Subir pista
              </Button>
            </FormSection>
          </Footer>
        </Content>
      </Wrapper>
    );
  }
}

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

export default Upload;
