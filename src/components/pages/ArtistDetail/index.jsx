import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { shape, string, number } from 'prop-types';

import usersModule from 'modules/users';

import ArtistInformation from 'modules/users/components/ArtistInformation';

import MainContent from './components/MainContent';
import Heading from './components/Heading';

const Wrapper = styled.section``;

const Content = styled.section`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 8fr 4fr;
`;

const Main = styled(MainContent)``;

const Information = styled(ArtistInformation)``;

class ArtistDetail extends Component {
  state = {
    loading: true,
  };

  componentDidMount = async () => {
    const { user } = this.props;

    if (user === undefined) {
      await this.getUser();
    }

    this.setState({ loading: false });
  };

  getUser = async () => {
    const { fetchUser, match } = this.props;

    return fetchUser(match.params.id);
  };

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    const { user } = this.props;

    return (
      <Wrapper>
        <Heading
          username={user.username}
          fullname={user.fullname}
          avatar={user.avatar}
        />
        <Content>
          <Main userId={user.id} />
          <Information
            followersCount={user.followers_count}
            followingsCount={user.followings_count}
            tracksCount={user.tracks_count}
          />
        </Content>
      </Wrapper>
    );
  }
}

ArtistDetail.defaultProps = {
  user: undefined,
};

ArtistDetail.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,

  user: shape({
    username: string,
    fullname: string,
    avatar: string,
    followers_count: number,
    followings_count: number,
    tracks_count: number,
  }),
};

function mapStateToProps(state, { match }) {
  return {
    user: state.users.all.entities[match.params.id],
  };
}

export default connect(
  mapStateToProps,
  {
    fetchUser: usersModule.actions.fetchUser,
  },
)(ArtistDetail);
