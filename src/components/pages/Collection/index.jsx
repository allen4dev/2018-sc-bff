import React from 'react';
import styled from 'styled-components';

import Tabs from 'components/shared/Tabs';

import Overview from './components/Overview';

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
          <div>Likes content</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Playlists content</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Albums content</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Following content</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Followers content</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>History content</div>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </Wrapper>
);

export default Collection;
