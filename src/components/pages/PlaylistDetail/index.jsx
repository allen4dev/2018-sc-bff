import React from 'react';
import styled from 'styled-components';

import PlaylistHeader from 'modules/playlists/components/PlaylistHeader';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const PlaylistDetail = () => (
  <Wrapper>
    <PlaylistHeader />
  </Wrapper>
);

export default PlaylistDetail;
