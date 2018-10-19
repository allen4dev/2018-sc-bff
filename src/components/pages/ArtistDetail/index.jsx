import React from 'react';
import styled from 'styled-components';

import ArtistInformation from 'modules/artists/components/ArtistInformation';

import MainContent from './components/MainContent';
import Heading from './components/Heading';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: 8fr 4fr;

  & > * {
    border: 4px solid hotpink;
  }
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
