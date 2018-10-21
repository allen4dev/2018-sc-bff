import React from 'react';
import styled from 'styled-components';

import Tabs from 'components/shared/Tabs';
import { Title } from 'components/utils/Texts';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const Heading = styled.header``;

const Results = () => (
  <Wrapper>
    <Heading>
      <Title>Resultados de busqueda para:</Title>
    </Heading>

    <Tabs type="row">
      <Tabs.Menu>
        <Tabs.Tab>Todo</Tabs.Tab>
        <Tabs.Tab>Pistas</Tabs.Tab>
        <Tabs.Tab>Artists</Tabs.Tab>
        <Tabs.Tab>Albumes</Tabs.Tab>
        <Tabs.Tab>Listas</Tabs.Tab>
      </Tabs.Menu>

      <Tabs.Panels>
        <Tabs.Panel>
          <div>All results here</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Track results here</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Artists results here</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Albums results here</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Playlists results here</div>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </Wrapper>
);

export default Results;
