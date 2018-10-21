import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Unauthorized from 'components/shared/header/Unauthorized';
import Authorized from 'components/shared/header/Authorized';
import Footer from 'components/shared/Footer';

import Home from './Home';
import ArtistDetail from './ArtistDetail';
import PlaylistDetail from './PlaylistDetail';
import TrackDetail from './TrackDetail';
import Register from './Register';
import Results from './Results';

const Error404 = () => <h1>404 page not found</h1>;

const isAuth = true;

function renderHeader() {
  if (!isAuth) return <Unauthorized />;

  return <Authorized />;
}

const Pages = () => (
  <div>
    {renderHeader()}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Register} />
      <Route path="/search" component={Results} />
      <Route path="/artists/:id" component={ArtistDetail} />
      <Route path="/playlists/:id" component={PlaylistDetail} />
      <Route path="/tracks/:id" component={TrackDetail} />
      <Route component={Error404} />
    </Switch>
    <Footer />
  </div>
);

export default Pages;
