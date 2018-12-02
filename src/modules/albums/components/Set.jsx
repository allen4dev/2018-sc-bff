import React from 'react';
import styled from 'styled-components';

import ResourceActions from 'components/shared/ResourceActions';

import TrackList from 'modules/tracks/components/TrackList';
import TrackRowDetails from 'modules/tracks/components/TrackRowDetails';
import SetCard from './SetCard';

const Wrapper = styled.article`
  display: flex;
  align-items: flex-start;
`;

const Content = styled.section`
  flex: 1;
  margin-left: 1rem;
`;

const Footer = styled.footer``;

const trackIds = new Array(5).fill('');

const Set = () => (
  <Wrapper>
    <SetCard />
    <Content>
      <TrackRowDetails />
      <TrackList ids={trackIds} />
      <Footer>
        <ResourceActions />
      </Footer>
    </Content>
  </Wrapper>
);

export default Set;
