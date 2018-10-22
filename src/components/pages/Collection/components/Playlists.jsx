import React from 'react';
import styled from 'styled-components';

import SetCard from 'modules/playlists/components/SetCard';

import ColumnList from 'components/shared/ColumnList';

const Wrapper = styled.section``;

const playlistIds = new Array(10).fill('');

const Sets = () => (
  <Wrapper>
    <ColumnList title="Listas" gap="1rem" ids={playlistIds}>
      {({ id }) => <SetCard id={id} />}
    </ColumnList>
  </Wrapper>
);

export default Sets;
