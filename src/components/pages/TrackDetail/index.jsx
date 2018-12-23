import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';

import Track from 'modules/tracks/components/Track';
import ReplySection from 'modules/replies/components/ReplySection';

import Recommendations from 'components/shared/Recommendations';

const Wrapper = styled.section``;

const Content = styled.section`
  padding: 1rem;
  display: grid;
  grid-template-columns: 8fr 4fr;
`;

const TrackDetail = ({ match }) => (
  <Wrapper>
    <Track id={match.params.id} />
    <Content>
      <ReplySection />
      <Recommendations recommend />
    </Content>
  </Wrapper>
);

TrackDetail.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default TrackDetail;
