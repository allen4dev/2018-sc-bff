import React from 'react';
import styled from 'styled-components';

import Heading from './components/Heading';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const ArtistDetail = () => (
  <Wrapper>
    <Heading />
  </Wrapper>
);

export default ArtistDetail;
