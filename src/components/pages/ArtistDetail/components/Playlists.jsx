import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string } from 'prop-types';

import usersModule from 'modules/users';

import Sets from 'modules/playlists/components/Sets';

class Playlists extends Component {
  componentDidMount = async () => {
    const { ids } = this.props;

    if (ids.length === 0) {
      await this.fetchPlaylists();
    }
  };

  fetchPlaylists = async () => {
    const { fetchUserPlaylists, userId } = this.props;

    return fetchUserPlaylists(userId);
  };

  render() {
    const { ids } = this.props;

    return <Sets ids={ids} />;
  }
}

Playlists.propTypes = {
  ids: arrayOf(string).isRequired,
};

function mapStateToProps(state, { userId }) {
  const ids = state.users.playlists
    .filter(record => record.id === userId)
    .map(record => record.trackId);

  return {
    ids,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchUserPlaylists: usersModule.actions.fetchUserPlaylists,
  },
)(Playlists);
