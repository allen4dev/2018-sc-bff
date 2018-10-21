import React, { Component, createContext } from 'react';
import styled from 'styled-components';
import { element, arrayOf, string } from 'prop-types';

const Wrapper = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: ${({ type }) => type};
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li``;

const Button = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: inset 0 -2px ${({ isActive, theme: { colors } }) => (isActive ? colors.orange : 'transparent')};

  color: ${({ isActive, theme: { colors } }) =>
    isActive ? colors.orange : colors.dark};
  font-size: 1.2rem;
  padding: 0.5rem;
`;

const Content = styled.section`
  padding: 1rem 0;
`;

const TabsContext = createContext({
  activeTab: 0,
  onSelectTab: () => {},
});

class Tabs extends Component {
  static Menu = ({ children }) => (
    <TabsContext.Consumer>
      {({ activeTab, onSelectTab }) => (
        <List>
          {React.Children.map(children, (child, index) => {
            const isActive = activeTab === index;

            return React.cloneElement(child, {
              isActive,
              selectTab: () => onSelectTab(index),
            });
          })}
        </List>
      )}
    </TabsContext.Consumer>
  );

  static Tab = ({ isActive, selectTab, children }) => (
    <Item>
      <Button onClick={selectTab} isActive={isActive}>
        {children}
      </Button>
    </Item>
  );

  static Panels = ({ children }) => (
    <TabsContext.Consumer>
      {({ activeTab }) => <Content>{children[activeTab]}</Content>}
    </TabsContext.Consumer>
  );

  static Panel = ({ children }) => children;

  // eslint-disable-next-line
  onSelectTab = activeTab => {
    this.setState({ activeTab }); // eslint-disable-line
  };

  state = {
    activeTab: 0, // eslint-disable-line
    onSelectTab: this.onSelectTab, // eslint-disable-line
  };

  render() {
    const { type, children } = this.props;

    return (
      <Wrapper type={type}>
        <TabsContext.Provider value={this.state}>
          {children}
        </TabsContext.Provider>
      </Wrapper>
    );
  }
}

Tabs.defaultProps = {
  type: string,
};

Tabs.propTypes = {
  type: string,
  children: arrayOf(element).isRequired,
};

export default Tabs;
