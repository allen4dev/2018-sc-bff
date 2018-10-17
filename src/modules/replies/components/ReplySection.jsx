import React from 'react';
import styled from 'styled-components';

import ProfileCard from 'modules/artists/components/ProfileCard';
import ReplyBar from './ReplyBar';
import ReplyList from './ReplyList';

const Wrapper = styled.section`
  border: 4px solid blue;
`;

const Heading = styled.header``;

const ReplySection = () => (
  <Wrapper>
    <Heading>
      <ReplyBar />
    </Heading>

    <ProfileCard />
    <ReplyList />
  </Wrapper>
);

export default ReplySection;
