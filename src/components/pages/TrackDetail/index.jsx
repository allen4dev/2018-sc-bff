import React from 'react';
import styled from 'styled-components';

import Track from 'modules/tracks/components/Track';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
  height: ${({ theme: { sizes } }) => `calc(100vh - ${sizes.header})`};
`;

const TrackDetail = () => (
  <Wrapper>
    <Track />
  </Wrapper>
);

export default TrackDetail;
