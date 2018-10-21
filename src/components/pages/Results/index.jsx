import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaMusic, FaUser, FaListUl, FaImages } from 'react-icons/fa';

import Tabs from 'components/shared/Tabs';
import { Title } from 'components/utils/Texts';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const Heading = styled.header``;

const Results = () => (
  <Wrapper>
    <Heading>
      <Title color="dark">Resultados de busqueda para:</Title>
    </Heading>

    <Tabs type="row">
      <Tabs.Menu bgColor="orange" activeColor="white">
        <Tabs.Tab>
          <FaSearch /> Todo
        </Tabs.Tab>
        <Tabs.Tab>
          <FaMusic /> Pistas
        </Tabs.Tab>
        <Tabs.Tab>
          <FaUser /> Artists
        </Tabs.Tab>
        <Tabs.Tab>
          <FaListUl /> Albumes
        </Tabs.Tab>
        <Tabs.Tab>
          <FaImages /> Listas
        </Tabs.Tab>
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
