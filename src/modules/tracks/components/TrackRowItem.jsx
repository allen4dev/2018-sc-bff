import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { shape, string, bool } from 'prop-types';

import tracksModule from 'modules/tracks';

import Avatar from 'components/shared/Avatar';
import ResourceActions from 'components/shared/ResourceActions';

import TrackRowDetails from './TrackRowDetails';

const Wrapper = styled.article`
  background-color: ${({ published, theme: { colors } }) =>
    published ? 'transparent' : colors.lightgray};
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

  publish = async () => {
    const { id, publishTrack } = this.props;

    return publishTrack(id);
  };

  render() {
    const { track, user } = this.props;

    return (
      <Wrapper published={track.published}>
        <StyledAvatar src={track.photo} size="25%" square />
        <Content>
          <TrackRowDetails
            username={user.username}
            title={track.title}
            published={track.published}
            publish={this.publish}
          />
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
    title: 'Track title',
    published: false,
  },
  user: {
    username: 'Username',
  },
};

TrackRowItem.propTypes = {
  track: shape({
    photo: string,
    title: string,
    published: bool,
  }),
  user: shape({
    username: string,
  }),
};

function mapStateToProps(state, { id }) {
  const uid = state.users.tracks.find(record => record.trackId === id);

  return {
    track: state.tracks.all.entities[id],
    user: state.users.all.entities[uid.id],
  };
}

export default connect(
  mapStateToProps,
  {
    fetchTrack: tracksModule.actions.fetchTrack,
    publishTrack: tracksModule.actions.publishTrack,
  },
)(TrackRowItem);
