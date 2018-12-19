import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

import { FlatButton } from 'components/utils/Buttons';

import usersModule from 'modules/users';

import Menu from './Menu';
import Feed from './Feed';

class Artist extends Component {
  componentDidMount = async () => {
    const { current, user, fetchUser } = this.props;

    if (user.username === null) {
      await fetchUser(current);
    }
  };

  render() {
    const { user } = this.props;

    return (
      <Wrapper>
        <Actions>
          <Link to="/upload">
            <FlatButton noHeight color="gray" shadow="transparent">
              Subir
            </FlatButton>
          </Link>
        </Actions>
        <Menu user={user} />
        <Feed />
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Actions = styled.div``;

Artist.defaultProps = {
  user: {
    username: null,
    avatar: '',
  },
};

Artist.propTypes = {
  user: shape({
    username: string,
    avatar: string,
  }),
};

function mapStateToProps(state) {
  const { current } = state.auth;
  const user = state.users.all.entities[current];

  return {
    user,
    current,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchUser: usersModule.actions.fetchUser,
  },
)(Artist);
