import React from 'react';
import styled from 'styled-components';

import Tabs from 'components/shared/Tabs';

import Overview from './components/Overview';
import LikedTab from './components/LikedTab';
import Playlists from './components/Playlists';
import Following from './components/Following';
import Followers from './components/Followers';
import History from './components/History';

const Wrapper = styled.section``;

const Collection = () => (
  <Wrapper>
    <Tabs>
      <Tabs.Menu>
        <Tabs.Tab>Resumen</Tabs.Tab>
        <Tabs.Tab>Me gusta</Tabs.Tab>
        <Tabs.Tab>Listas</Tabs.Tab>
        <Tabs.Tab>Albumes</Tabs.Tab>
        <Tabs.Tab>Siguiendo</Tabs.Tab>
        <Tabs.Tab>Seguidores</Tabs.Tab>
        <Tabs.Tab>Historial</Tabs.Tab>
      </Tabs.Menu>

      <Tabs.Panels>
        <Tabs.Panel>
          <Overview />
        </Tabs.Panel>
        <Tabs.Panel>
          <LikedTab />
        </Tabs.Panel>
        <Tabs.Panel>
          <Playlists />
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Albums content</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <Following />
        </Tabs.Panel>
        <Tabs.Panel>
          <Followers />
        </Tabs.Panel>
        <Tabs.Panel>
          <History />
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </Wrapper>
);

export default Collection;
