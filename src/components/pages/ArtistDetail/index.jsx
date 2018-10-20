import React from 'react';
import styled from 'styled-components';

import ArtistInformation from 'modules/artists/components/ArtistInformation';

import MainContent from './components/MainContent';
import Heading from './components/Heading';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const Content = styled.section`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 8fr 4fr;
`;

const Main = styled(MainContent)``;

const Information = styled(ArtistInformation)``;

const ArtistDetail = () => (
  <Wrapper>
    <Heading />
    <Content>
      <Main />
      <Information />
    </Content>
  </Wrapper>
);

export default ArtistDetail;
