import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { string, func } from 'prop-types';

const Wrapper = styled.form``;
const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.lightgray};
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
`;

class Searchbar extends Component {
  static propTypes = {
    className: string.isRequired,
    history: func.isRequired,
  };

  state = {
    search: '',
  };

  handleChange = e => {
    const search = e.target.value;

    this.setState({ search });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { history } = this.props;
    const { search } = this.state;

    history.push(`/search?all=${search}`);
  };

  render() {
    const { className } = this.props;
    const { search } = this.state;

    return (
      <Wrapper className={className} onSubmit={this.handleSubmit}>
        <Input
          placeholder="Buscar artistas, grupos, pistas y podcasts"
          value={search}
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

export default withRouter(Searchbar);
