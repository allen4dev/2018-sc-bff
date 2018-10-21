import React, { Component } from 'react';
import styled from 'styled-components';
import { arrayOf, element } from 'prop-types';

const Wrapper = styled.ul``;

class Menu extends Component {
  static Item = ({ children }) => <li>{children}</li>;

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { key: index }),
        )}
      </Wrapper>
    );
  }
}

Menu.propTypes = {
  children: arrayOf(element).isRequired,
};

export default Menu;
