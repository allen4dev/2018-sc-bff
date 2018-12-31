import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { string, bool, func } from 'prop-types';
import { FaPlay, FaPlus, FaMinus } from 'react-icons/fa';

import { Button } from 'components/utils/Buttons';

import playlistsModule from 'modules/playlists';

const Heading = styled.header`
  display: flex;
  align-items: flex-start;
`;

const Details = styled.div`
  margin-left: 1rem;
`;

const Artist = styled.h4``;
const Name = styled.h3``;
const Progress = styled.div`
  background-color: ${({ theme: { colors } }) => colors.darkgray};
  height: 50px;
  margin: 1rem 0;
  width: 100%;
`;

class TrackRowDetails extends Component {
  addToPlaylist = async () => {
    const { addTrack } = this.props;

    await addTrack();
  };

  removeFromPlaylist = async () => {
    console.log('remove');
  };

  renderPublishButton() {
    const { published, publish } = this.props;

    if (published) return null;

    return (
      <Button noHeight bgColor="green" color="white" onClick={publish}>
        Publish
      </Button>
    );
  }

  renderAddRemovePlaylistButton() {
    const { isAuth, onPlaylist } = this.props;

    if (!isAuth) return null;

    if (!onPlaylist)
      return (
        <Button
          bgColor="green"
          color="white"
          radius="50%"
          onClick={this.addToPlaylist}>
          <FaPlus />
        </Button>
      );

    return (
      <Button
        bgColor="darkred"
        color="white"
        radius="50%"
        onClick={this.removeFromPlaylist}>
        <FaMinus />
      </Button>
    );
  }

  render() {
    const { username } = this.props;

    return (
      <Fragment>
        <Heading>
          <Button bgColor="orange" color="white" radius="50%">
            <FaPlay />
          </Button>
          <Details>
            {this.renderPublishButton()}
            {this.renderAddRemovePlaylistButton()}

            <Artist>{username}</Artist>
            <Name>Title</Name>
          </Details>
        </Heading>
        <Progress />
      </Fragment>
    );
  }
}

TrackRowDetails.defaultProps = {
  publish: () => {},
  published: false,
  onPlaylist: false,
};

TrackRowDetails.propTypes = {
  username: string.isRequired,
  isAuth: bool.isRequired,
  published: bool,
  publish: func,
  onPlaylist: bool,
};

function mapStateToProps(state) {
  const isAuth = !!state.auth.current;

  return { isAuth };
}

export default connect(
  mapStateToProps,
  {
    addTrack: playlistsModule.actions.addTrack,
    removeTrack: playlistsModule.actions.removeTrack,
  },
)(TrackRowDetails);
