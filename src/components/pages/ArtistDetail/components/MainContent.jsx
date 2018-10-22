import React from 'react';
import styled from 'styled-components';

import TrackRowList from 'modules/tracks/components/TrackRowList';
import Sets from 'modules/playlists/components/Sets';

import Tabs from 'components/shared/Tabs';

const Wrapper = styled.section``;

const trackIds = new Array(10).fill('');
const playlistIds = new Array(10).fill('');

const MainContent = () => (
  <Wrapper>
    <Tabs type="column">
      <Tabs.Menu>
        <Tabs.Tab>Pistas</Tabs.Tab>
        <Tabs.Tab>Albumes</Tabs.Tab>
        <Tabs.Tab>Listas</Tabs.Tab>
        <Tabs.Tab>Reposts</Tabs.Tab>
      </Tabs.Menu>
      <Tabs.Panels>
        <Tabs.Panel>
          <TrackRowList ids={trackIds} />
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Artist Albums comes here</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <Sets ids={playlistIds} />
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Artist Shared actions comes here</div>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </Wrapper>
);
export default MainContent;
