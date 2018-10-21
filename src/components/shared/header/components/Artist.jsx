import React from 'react';
import styled from 'styled-components';

import Menu from 'components/shared/Menu';
import { FlatButton } from 'components/utils/Buttons';

import Feed from './Feed';

const Wrapper = styled.section``;
const Actions = styled.div``;

const Artist = () => (
  <Wrapper>
    <Actions>
      <FlatButton>Subir</FlatButton>
    </Actions>
    <Menu />
    <Feed />
  </Wrapper>
);

export default Artist;
