import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signup',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

function mapStateToProps(state) {
  return {
    isAuth: !!state.auth.current,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
