import React from 'react';
import styled from 'styled-components';

import ProfileCard from 'modules/artists/components/ProfileCard';
import ReplyBar from './ReplyBar';
import ReplyList from './ReplyList';

const Wrapper = styled.section`
  border: 4px solid blue;
  display: grid;
  grid-template-columns: 3fr 9fr;
  grid-template-areas:
    'heading heading'
    'card replies';

  & > * {
    border: 4px solid red;
  }
`;

const Heading = styled.header`
  grid-area: heading;
`;

const Card = styled(ProfileCard)`
  grid-area: card;
`;

const Replies = styled(ReplyList)`
  grid-area: replies;
`;

const ReplySection = () => (
  <Wrapper>
    <Heading>
      <ReplyBar />
    </Heading>

    <Card />
    <Replies />
  </Wrapper>
);

export default ReplySection;
