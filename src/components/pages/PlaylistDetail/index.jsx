import React from 'react';
import styled from 'styled-components';

import Recommendations from 'components/shared/Recommendations';

import PlaylistHeader from 'modules/playlists/components/PlaylistHeader';
import PlaylistContent from './components/PlaylistContent';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const Content = styled.section``;

const PlaylistDetail = () => (
  <Wrapper>
    <PlaylistHeader />
    <Content>
      <PlaylistContent />
      <Recommendations />
    </Content>
  </Wrapper>
);

export default PlaylistDetail;
