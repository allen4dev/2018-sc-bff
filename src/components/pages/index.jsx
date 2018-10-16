import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

import Home from './Home';
import Register from './Register';

const Error404 = () => <h1>404 page not found</h1>;

const Pages = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Register} />
      <Route component={Error404} />
    </Switch>
    <Footer />
  </div>
);

export default Pages;
