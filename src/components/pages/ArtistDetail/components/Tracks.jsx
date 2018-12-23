import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string } from 'prop-types';

import TrackRowList from 'modules/tracks/components/TrackRowList';

// eslint-disable-next-line
class Tracks extends Component {
  render() {
    const { tracks } = this.props;

    return <TrackRowList ids={tracks} />;
  }
}

Tracks.propTypes = {
  tracks: arrayOf(string).isRequired,
};

function mapStateToProps(state, { userId }) {
  const tracks = state.users.tracks.filter(record => record.id === userId);

  return {
    tracks,
  };
}

export default connect(mapStateToProps)(Tracks);
