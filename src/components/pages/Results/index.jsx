import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaMusic, FaUser, FaListUl, FaImages } from 'react-icons/fa';

import TrackRowList from 'modules/tracks/components/TrackRowList';
import ArtistList from 'modules/artists/components/ArtistList';
import Playlists from 'modules/playlists/components/Playlists';

import Tabs from 'components/shared/Tabs';
import { Title } from 'components/utils/Texts';

import Overview from './components/Overview';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const Heading = styled.header`
  padding: 1rem;
`;

const trackIds = new Array(10).fill('');
const artistIds = new Array(10).fill('');
const playlistIds = new Array(10).fill('');

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
          <Overview />
        </Tabs.Panel>
        <Tabs.Panel>
          <TrackRowList ids={trackIds} />
        </Tabs.Panel>
        <Tabs.Panel>
          <ArtistList ids={artistIds} />
        </Tabs.Panel>
        <Tabs.Panel>
          <div>Albums results here</div>
        </Tabs.Panel>
        <Tabs.Panel>
          <Playlists ids={playlistIds} />
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </Wrapper>
);

export default Results;
