import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

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
        <Button flexible color="white" bgColor="orange">
          Crea tu cuenta
        </Button>
      </Item>
    </List>
  </Wrapper>
);

Navigation.propTypes = {
  className: string.isRequired,
};

export default Navigation;
