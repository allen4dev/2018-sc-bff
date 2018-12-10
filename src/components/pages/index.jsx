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
import Upload from './Upload';

const Error404 = () => <h1>404 page not found</h1>;

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.section`
  flex: 1;
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const isAuth = false;

function renderHeader() {
  if (!isAuth) return <Unauthorized />;

  return <Authorized />;
}

const Pages = () => (
  <Wrapper>
    {renderHeader()}
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Register} />
        <Route path="/search" component={Results} />
        <Route path="/upload" component={Upload} />
        <Route path="/me/collection" component={Collection} />
        <Route path="/users/:id" component={ArtistDetail} />
        <Route path="/playlists/:id" component={PlaylistDetail} />
        <Route path="/tracks/:id" component={TrackDetail} />
        <Route component={Error404} />
      </Switch>
    </Content>
    <Footer />
  </Wrapper>
);

export default Pages;
