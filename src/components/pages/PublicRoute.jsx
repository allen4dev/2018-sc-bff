import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth === false ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

function mapStateToProps(state) {
  return {
    isAuth: !!state.auth.current,
  };
}

export default connect(mapStateToProps)(PublicRoute);
