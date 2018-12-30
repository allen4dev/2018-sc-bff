import React, { Component } from 'react';
import { connect } from 'react-redux';

import usersModule from 'modules/users';
import authModule from 'modules/auth';

import Sets from 'modules/playlists/components/Sets';

const playlistIds = new Array(10).fill('');

class Playlists extends Component {
  componentDidMount = async () => {
    const { ids } = this.props;

    if (ids.length === 0) {
      await this.fetchPlaylists();
    }
  };

  fetchPlaylists = async () => {
    const {
      isAuth,
      fetchUserPlaylists,
      fetchProfilePlaylists,
      userId,
    } = this.props;

    if (isAuth) return fetchProfilePlaylists();

    return fetchUserPlaylists(userId);
  };

  render() {
    return <Sets ids={playlistIds} />;
  }
}

function mapStateToProps(state, { userId }) {
  const isAuth = !!state.auth.current;

  const ids = state.users.playlists
    .filter(record => record.id === userId)
    .map(record => record.trackId);

  return {
    isAuth,
    ids,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchUserPlaylists: usersModule.actions.fetchUserPlaylists,
    fetchProfilePlaylists: authModule.actions.fetchProfilePlaylists,
  },
)(Playlists);
