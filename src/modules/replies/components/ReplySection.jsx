import React from 'react';
import styled from 'styled-components';

import ProfileCard from 'modules/users/components/ProfileCard';
import ReplyBar from './ReplyBar';
import ReplyList from './ReplyList';

const Wrapper = styled.section`
  padding: 1rem;
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-areas:
    'heading heading'
    'card replies';
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
