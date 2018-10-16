import React from 'react';
import styled from 'styled-components';

import { Title, Text } from 'components/utils/Texts';
import { Button, FlatButton } from 'components/utils/Buttons';

const Wrapper = styled.section`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled(Text)`
  margin: 1rem 0;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

const LoginText = styled(Text)`
  margin-right: 2rem;
`;

const Join = () => (
  <Wrapper>
    <Title color="dark" size="2rem">
      Gracias por escuchar, ahora unete
    </Title>
    <StyledText>
      Guarda pistas, sigue a artistas y crea tus listas. Y todo, gratis
    </StyledText>
    <Footer>
      <Button bgColor="orange" color="white">
        Crea tu cuenta
      </Button>
      <Login>
        <LoginText size=".8rem">Ya tienes una cuenta?</LoginText>
        <FlatButton color="gray">Inicia sesion</FlatButton>
      </Login>
    </Footer>
  </Wrapper>
);

export default Join;
