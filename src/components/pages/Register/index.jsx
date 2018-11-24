import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { func, shape } from 'prop-types';

import { Button } from 'components/utils/Buttons';
import { Text } from 'components/utils/Texts';

import authModule from 'modules/auth';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    const { register, history } = this.props;
    const { username, email, password } = this.state;

    register({ username, email, password });

    history.push('/');
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <Wrapper>
        <Content>
          <SocialLogin>
            <Button bgColor="facebook" color="white" radius="3px">
              Continuar con Facebook
            </Button>

            <Button bgColor="google" color="white" radius="3px">
              Continuar con Google
            </Button>
          </SocialLogin>

          <Separator />

          <Signin onSubmit={this.handleSubmit}>
            <Input
              type="text"
              placeholder="Tu nombre de usuario"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <Input
              type="email"
              placeholder="Tu direccion de email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <Input
              type="password"
              placeholder="Tu contraseña"
              name="password"
              value={password}
              onChange={this.handleChange}
            />

            <Button bgColor="orange" color="white" radius="3px">
              Continuar
            </Button>
          </Signin>

          <Footer>
            <Text color="darkgray">
              Podemos usar tu correo electronico para actualizaciones y consejos
              relativos a los productos y servicios de SoundCloud. Puedes anular
              la suscripcion gratuitamente en cualquier momento en las
              preferencias de las notifications.
            </Text>

            <Conditions>
              Al iniciar sesion, aceptas nuestras
              <Link to="/">Condiciones de uso.</Link>
            </Conditions>
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
const Content = styled.section`
  height: 80%;
  box-shadow: 0 0 3px ${({ theme: { colors } }) => colors.gray};
  padding: 2rem;
  width: 40%;
  display: grid;
  grid-gap: 1rem;
  align-items: center;
`;

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;

  & > button:first-child {
    margin-bottom: 1rem;
  }
`;

const Separator = styled.div`
  box-shadow: 0 0 0 1px ${({ theme: { colors } }) => colors.darkgray};
`;

const Signin = styled.form`
  display: flex;
  flex-direction: column;

  & > input {
    margin-bottom: 1rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Footer = styled.footer`
  margin-top: 1rem;
`;

const Conditions = styled.section`
  color: ${({ theme: { colors } }) => colors.darkgray};
  margin: 1rem 0;
  text-align: center;

  & > :last-child {
    color: ${({ theme: { colors } }) => colors.blue};
    font-weight: bold;
    margin-left: 0.5rem;
    text-decoration: none;
  }
`;

Register.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
  register: func.isRequired,
};

export default connect(
  null,
  {
    register: authModule.actions.register,
  },
)(Register);
