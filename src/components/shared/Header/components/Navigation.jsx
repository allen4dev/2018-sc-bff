import React from 'react';
import styled from 'styled-components';
import { string, bool } from 'prop-types';

import { Link } from 'react-router-dom';

import { Button, FlatButton } from 'components/utils/Buttons';

const Wrapper = styled.nav``;

const List = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Item = styled.li`
  flex: 1;
  margin: 0.5rem;
`;

function renderItems(isAuth) {
  if (!isAuth) {
    return (
      <React.Fragment>
        <Item>
          <Link to="/signup">
            <FlatButton flexible color="white">
              Iniciar sesion
            </FlatButton>
          </Link>
        </Item>

        <Item>
          <Link to="/signup">
            <Button flexible color="white" bgColor="orange">
              Crea tu cuenta
            </Button>
          </Link>
        </Item>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Item>
        <Link to="/">
          <FlatButton flexible color="white">
            Inicio
          </FlatButton>
        </Link>
      </Item>

      <Item>
        <Link to="/me/collection">
          <Button flexible color="white" bgColor="orange">
            Coleccion
          </Button>
        </Link>
      </Item>
    </React.Fragment>
  );
}

const Navigation = ({ isAuth, className }) => (
  <Wrapper className={className}>
    <List>{renderItems(isAuth)}</List>
  </Wrapper>
);

Navigation.defaultProps = {
  className: '',
  isAuth: false,
};

Navigation.propTypes = {
  className: string,
  isAuth: bool,
};

export default Navigation;
