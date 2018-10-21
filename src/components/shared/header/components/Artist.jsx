import React from 'react';
import styled from 'styled-components';

import Menu from 'components/shared/Menu';
import { FlatButton } from 'components/utils/Buttons';

import Feed from './Feed';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

const Actions = styled.div``;

const Artist = () => (
  <Wrapper>
    <Actions>
      <FlatButton noHeight color="white">
        Subir
      </FlatButton>
    </Actions>
    <Menu>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
    </Menu>
    <Feed />
  </Wrapper>
);

export default Artist;
