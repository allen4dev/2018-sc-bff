import React from 'react';
import styled from 'styled-components';

import { FlatButton } from 'components/utils/Buttons';

import Menu from './Menu';
import Feed from './Feed';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Actions = styled.div``;

const Artist = () => (
  <Wrapper>
    <Actions>
      <FlatButton noHeight color="gray" shadow="transparent">
        Subir
      </FlatButton>
    </Actions>
    <Menu />
    <Feed />
  </Wrapper>
);

export default Artist;
