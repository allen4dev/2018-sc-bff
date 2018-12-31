import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shape, string, number, arrayOf } from 'prop-types';
import styled from 'styled-components';

import ResourceActions from 'components/shared/ResourceActions';

import TrackList from 'modules/tracks/components/TrackList';
import TrackRowDetails from 'modules/tracks/components/TrackRowDetails';
import SetCard from './SetCard';

const Wrapper = styled.article`
  display: flex;
  align-items: flex-start;
`;

const Content = styled.section`
  flex: 1;
  margin-left: 1rem;
`;

const Footer = styled.footer``;

class Set extends Component {
  componentDidMount = () => {};

  render() {
    const {
      playlist: { photo, trackCount, title },
      tracks,
      username,
    } = this.props;

    return (
      <Wrapper>
        <SetCard photo={photo} trackCount={trackCount} title={title} />
        <Content>
          <TrackRowDetails id={tracks[0]} username={username} />
          <TrackList ids={tracks} />
          <Footer>
            <ResourceActions />
          </Footer>
        </Content>
      </Wrapper>
    );
  }
}

Set.defaultProps = {
  playlist: {
    photo: 'https://sc-api/photos/default.png',
    trackCount: 0,
    title: 'track title',
  },

  tracks: [],

  username: 'Username',
};

Set.propTypes = {
  playlist: shape({
    photo: string,
    trackCount: number,
    title: string,
  }),

  tracks: arrayOf(string),

  username: string,
};

function mapStateToProps(state, id) {
  const tracks = state.playlists.tracks
    .filter(record => record.id === id)
    .map(record => record.trackId);

  return {
    playlist: state.playlists.all.entities[id],
    tracks,
  };
}

export default connect(mapStateToProps)(Set);
