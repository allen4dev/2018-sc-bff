import React from 'react';
import styled from 'styled-components';

import Track from 'modules/tracks/components/Track';
import ReplySection from 'modules/replies/components/ReplySection';

import Recommendations from 'components/shared/Recommendations';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const Content = styled.section`
  border: 4px solid #bada55;
  display: grid;
  grid-template-columns: 9fr 3fr;
`;

const TrackDetail = () => (
  <Wrapper>
    <Track />
    <Content>
      <ReplySection />
      <Recommendations />
    </Content>
  </Wrapper>
);

export default TrackDetail;
