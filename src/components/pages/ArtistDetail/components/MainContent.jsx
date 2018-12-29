import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Tabs from 'components/shared/Tabs';

import Tracks from './Tracks';
import Playlists from './Playlists';

const Wrapper = styled.section``;

const MainContent = ({ userId }) => (
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
          <Tracks userId={userId} />
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Artist Albums comes here</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <Playlists userId={userId} />
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Artist Shared actions comes here</div>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </Wrapper>
);

MainContent.propTypes = {
  userId: string.isRequired,
};

export default MainContent;
