import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Unauthorized from 'components/shared/header/Unauthorized';
import Authorized from 'components/shared/header/Authorized';
import Footer from 'components/shared/Footer';

import Home from './Home';
import ArtistDetail from './ArtistDetail';
import Collection from './Collection';
import PlaylistDetail from './PlaylistDetail';
import Register from './Register';
import Results from './Results';
import TrackDetail from './TrackDetail';

const Error404 = () => <h1>404 page not found</h1>;

const isAuth = true;

function renderHeader() {
  if (!isAuth) return <Unauthorized />;

  return <Authorized />;
}

const Content = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const Pages = () => (
  <div>
    {renderHeader()}
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Register} />
        <Route path="/search" component={Results} />
        <Route path="/me/collection" component={Collection} />
        <Route path="/artists/:id" component={ArtistDetail} />
        <Route path="/playlists/:id" component={PlaylistDetail} />
        <Route path="/tracks/:id" component={TrackDetail} />
        <Route component={Error404} />
      </Switch>
    </Content>
    <Footer />
  </div>
);

export default Pages;
