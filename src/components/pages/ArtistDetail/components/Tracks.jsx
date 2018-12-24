import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string } from 'prop-types';

import TrackRowList from 'modules/tracks/components/TrackRowList';

import authModule from 'modules/auth';
import usersModule from 'modules/users';

class Tracks extends Component {
  componentDidMount = async () => {
    const { tracks } = this.props;

    if (tracks.length === 0) {
      await this.getUserTracks();
    }
  };

  getUserTracks = async () => {
    const { userId, isAuth, fetchUserTracks, fetchProfileTracks } = this.props;

    if (isAuth) return fetchProfileTracks();

    return fetchUserTracks(userId);
  };

  render() {
    const { tracks } = this.props;

    return <TrackRowList ids={tracks} />;
  }
}

Tracks.propTypes = {
  tracks: arrayOf(string).isRequired,
};

function mapStateToProps(state, { userId }) {
  const isAuth = !!state.auth.current;

  const tracks = state.users.tracks
    .filter(record => record.id === userId)
    .map(record => record.trackId);

  return {
    isAuth,
    tracks,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchUserTracks: usersModule.actions.fetchUserTracks,
    fetchProfileTracks: authModule.actions.fetchProfileTracks,
  },
)(Tracks);
