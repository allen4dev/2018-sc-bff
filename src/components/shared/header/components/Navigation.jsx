import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
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

const Navigation = ({ className }) => (
  <Wrapper className={className}>
    <List>
      <Item>
        <FlatButton flexible color="white">
          Inicia sesion
        </FlatButton>
      </Item>

      <Item>
        <Link to="/signup">
          <Button flexible color="white" bgColor="orange">
            Crea tu cuenta
          </Button>
        </Link>
      </Item>
    </List>
  </Wrapper>
);

Navigation.defaultProps = {
  className: '',
};

Navigation.propTypes = {
  className: string,
};

export default Navigation;
