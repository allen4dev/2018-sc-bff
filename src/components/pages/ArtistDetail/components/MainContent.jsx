import React from 'react';
import styled from 'styled-components';

import Tabs from 'components/shared/Tabs';

const Wrapper = styled.section``;

const MainContent = () => (
  <Wrapper>
    <Tabs>
      <Tabs.Menu>
        <Tabs.Tab>Pistas</Tabs.Tab>
        <Tabs.Tab>Albumes</Tabs.Tab>
        <Tabs.Tab>Listas</Tabs.Tab>
        <Tabs.Tab>Reposts</Tabs.Tab>
      </Tabs.Menu>
      <Tabs.Panels>
        <Tabs.Panel>
          <div>Artist Tracks comes here</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Artist Albums comes here</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Artist Playlists comes here</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Artist Shared actions comes here</div>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </Wrapper>
);
export default MainContent;