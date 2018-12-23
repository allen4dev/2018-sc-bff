import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import { FaPlay } from 'react-icons/fa';

import tracksModule from 'modules/tracks';

import Photo from 'components/shared/Photo';

import { Tag } from 'components/utils/Texts';
import { Button } from 'components/utils/Buttons';

import TrackPlayer from './TrackPlayer';

const Wrapper = styled.section`
  background-image: linear-gradient(to left, #a7927d, #bfb7ad);
  padding: 1rem;
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'heading photo'
    'player photo';
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.header`
  grid-area: heading;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TagSection = styled.div`
  margin-left: 0.5rem;
`;

const TrackName = styled(Tag)`
  display: block;
  margin-top: 0.5rem;
`;

const Player = styled(TrackPlayer)`
  grid-area: player;
`;

const TrackPhoto = styled(Photo)`
  grid-area: photo;
  margin-left: 1rem;
`;

class Track extends Component {
  state = {
    loading: true,
  };

  componentDidMount = async () => {
    const { user, track } = this.props;

    if (user === undefined || track === undefined) {
      await this.getTrack();
    }

    this.setState({ loading: false });
  };

  getTrack = async () => {
    const { id, fetchTrack } = this.props;

    return fetchTrack(id);
  };

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    return (
      <Wrapper>
        <Heading>
          <Details>
            <Button bgColor="orange" color="white" radius="50%">
              <FaPlay />
            </Button>
            <TagSection>
              <Tag bgColor="dark" size=".7rem">
                Fate UBW
              </Tag>
              <TrackName bgColor="dark">Emiya</TrackName>
            </TagSection>
          </Details>

          <Tag>4 anios</Tag>
        </Heading>
        <Player />
        <TrackPhoto src="/images/track_card.png" />
      </Wrapper>
    );
  }
}

Track.propTypes = {
  id: string.isRequired,
  fetchTrack: func.isRequired,
};

function mapStateToProps({ tracks, users }, { id }) {
  const uid = users.tracks.find(record => record.trackId === id);

  const track = tracks.all.entities[id] || undefined;
  const user = uid ? users.all.entities[uid.id] : undefined;

  return {
    user,
    track,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchTrack: tracksModule.actions.fetchTrack,
  },
)(Track);
