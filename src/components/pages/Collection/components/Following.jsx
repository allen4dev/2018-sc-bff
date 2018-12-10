import React from 'react';
import styled from 'styled-components';

import ColumnList from 'components/shared/ColumnList';

import ArtistCard from 'modules/users/components/ArtistCard';

const Wrapper = styled.section``;

const followingIds = new Array(10).fill('');

const Following = () => (
  <Wrapper>
    <ColumnList title="Siguiendo" ids={followingIds}>
      {id => <ArtistCard id={id} />}
    </ColumnList>
  </Wrapper>
);

export default Following;
