import React from 'react';
import styled from 'styled-components';

import Recommendations from 'components/shared/Recommendations';

import SetHeader from 'modules/playlists/components/SetHeader';
import PlaylistContent from './components/PlaylistContent';

const Wrapper = styled.section``;

const Content = styled.section`
  display: grid;
  grid-template-columns: 8fr 4fr;
`;

const SetDetail = () => (
  <Wrapper>
    <SetHeader />
    <Content>
      <PlaylistContent />
      <Recommendations />
    </Content>
  </Wrapper>
);

export default SetDetail;
