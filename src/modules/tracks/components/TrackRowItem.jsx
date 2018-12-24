import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { shape, string } from 'prop-types';

import tracksModule from 'modules/tracks';

import Avatar from 'components/shared/Avatar';
import ResourceActions from 'components/shared/ResourceActions';

import TrackRowDetails from './TrackRowDetails';

const Wrapper = styled.article`
  display: flex;
  align-items: center;
`;
const Content = styled.section`
  flex: 1;
  padding: 0 1rem;
`;

const StyledAvatar = styled(Avatar)`
  max-width: 200px;
`;

const Footer = styled.footer``;

class TrackRowItem extends Component {
  componentDidMount = async () => {
    const { track, user } = this.props;

    if (!track || !user) {
      await this.getTrack();
    }
  };

  getTrack = async () => {
    const { id, fetchTrack } = this.props;

    return fetchTrack(id);
  };

  render() {
    const { track, user } = this.props;
    return (
      <Wrapper>
        <StyledAvatar src={track.avatar} size="25%" square />
        <Content>
          <TrackRowDetails username={user.username} title={track.title} />
          <Footer>
            <ResourceActions />
          </Footer>
        </Content>
      </Wrapper>
    );
  }
}

TrackRowItem.defaultProps = {
  track: {
    avatar: 'https://sc-api/avatars/default.png',
    title: 'track title',
  },
  user: {
    username: 'Username',
  },
};

TrackRowItem.propTypes = {
  track: shape({
    avatar: string,
    title: string,
  }),
  user: shape({
    username: string,
  }),
};

function mapStateToProps(state, { id }) {
  const uid = state.users.tracks.find(record => record.trackId === id);

  return {
    track: state.tracks.all.entities[id],
    user: state.users.all.entities[uid],
  };
}

export default connect(
  mapStateToProps,
  {
    fetchTrack: tracksModule.fetchTrack,
  },
)(TrackRowItem);
