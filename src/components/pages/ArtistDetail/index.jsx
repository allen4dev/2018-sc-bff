import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';

import ArtistInformation from 'modules/users/components/ArtistInformation';

import MainContent from './components/MainContent';
import Heading from './components/Heading';

const Wrapper = styled.section``;

const Content = styled.section`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 8fr 4fr;
`;

const Main = styled(MainContent)``;

const Information = styled(ArtistInformation)``;

const ArtistDetail = ({ match }) => (
  <Wrapper>
    <Heading />
    <Content>
      <Main userId={match.params.id} />
      <Information />
    </Content>
  </Wrapper>
);

ArtistDetail.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default ArtistDetail;
