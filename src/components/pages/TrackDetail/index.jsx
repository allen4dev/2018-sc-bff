import React from 'react';
import styled from 'styled-components';

import Track from 'modules/tracks/components/Track';
import ReplySection from 'modules/replies/components/ReplySection';

import Recommendations from 'components/shared/Recommendations';

const Wrapper = styled.section``;

const Content = styled.section`
  padding: 1rem;
  display: grid;
  grid-template-columns: 8fr 4fr;
`;

const TrackDetail = () => (
  <Wrapper>
    <Track />
    <Content>
      <ReplySection />
      <Recommendations recommend />
    </Content>
  </Wrapper>
);

export default TrackDetail;
