/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

import { Button } from 'components/utils/Buttons';
import ResourceActions from 'components/shared/ResourceActions';

import TrackList from 'modules/tracks/components/TrackList';
import TrackRowDetails from 'modules/tracks/components/TrackRowDetails';
import PlaylistCard from './PlaylistCard';

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

const Playlist = () => (
  <Wrapper>
    <PlaylistCard />
    <Content>
      <TrackRowDetails />
      <TrackList ids={trackIds} />
      <Footer>
        <ResourceActions />
      </Footer>
    </Content>
  </Wrapper>
);

export default Playlist;
