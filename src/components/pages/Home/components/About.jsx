import React from 'react';
import styled from 'styled-components';

import { FlatButton } from 'components/utils/Buttons';
import { Title, Text } from 'components/utils/Texts';

const Wrapper = styled.section`
  background-image: url('images/artist_home.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Content = styled.section`
  padding: 1rem 2rem;
  grid-column: 2/-1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Footer = styled.footer``;

const StyledText = styled(Text)`
  margin: 1.5rem 0;
`;

const About = () => (
  <Wrapper>
    <Content>
      <Title color="white" size="2rem">
        Llamada a todos los creadores
      </Title>

      <StyledText color="white" size="1.3rem">
        Hazte con SoundCloud para estar en contacto con tus seguidores,
        compartir tus canciones y aumentar tu público. ¿A qué esperas
      </StyledText>

      <Footer>
        <FlatButton color="white">Mas informacion</FlatButton>
      </Footer>
    </Content>
  </Wrapper>
);

export default About;
