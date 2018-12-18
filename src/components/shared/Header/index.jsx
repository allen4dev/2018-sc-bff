import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

import Authorized from './Authorized';
import Unauthorized from './Unauthorized';

class Header extends Component {
  renderHeader = () => {
    const { current } = this.props;

    const isAuth = !!current;

    if (!isAuth) return <Unauthorized />;

    return <Authorized />;
  };

  render() {
    return this.renderHeader();
  }
}

Header.defaultProps = {
  current: null,
};

Header.propTypes = {
  current: string,
};

function mapStateToProps(state) {
  const { current } = state.auth;

  return {
    current,
  };
}

export default connect(mapStateToProps)(Header);
