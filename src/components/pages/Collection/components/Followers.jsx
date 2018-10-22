import React from 'react';
import styled from 'styled-components';

import ColumnList from 'components/shared/ColumnList';

import ArtistCard from 'modules/artists/components/ArtistCard';

const Wrapper = styled.section``;

const followerIds = new Array(10).fill('');

const Followers = () => (
  <Wrapper>
    <ColumnList title="Seguidores" ids={followerIds}>
      {id => <ArtistCard id={id} />}
    </ColumnList>
  </Wrapper>
);

export default Followers;
