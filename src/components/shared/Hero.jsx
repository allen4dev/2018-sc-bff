import React from 'react';
import styled from 'styled-components';

import { Button } from 'components/utils/Buttons';
import { Title, Text } from 'components/utils/Texts';

const Wrapper = styled.section`
  height: 50vh;
  background-image: url('images/banner.jpg');
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.section`
  text-align: center;
  width: 50%;
`;
const Heading = styled.header``;
const StyledText = styled(Text)`
  padding: 2rem 0;
`;
const Footer = styled.footer``;

const Hero = () => (
  <Wrapper>
    <Content>
      <Heading>
        <Title size="rem">Conectar en SoundCloud</Title>
      </Heading>
      <StyledText color="white" size="1.2rem">
        Descubre, escucha y comparte un catalogo de musica que no deja de crecer
        con artistas emergentes y consolidados de todo el mundo.
      </StyledText>
      <Footer>
        <Button color="white" bgColor="orange">
          Registrate gratis
        </Button>
      </Footer>
    </Content>
  </Wrapper>
);

export default Hero;
