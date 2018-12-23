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
  flex-direction: ${({ type }) => (type === 'row' ? 'column' : 'row')};
  flex-basis: ${({ type }) => (type === 'row' ? '20%' : '100%')};
`;

const Item = styled.li`
  width: ${({ type }) => (type === 'row' ? '100%' : 'auto')};
  background-color: ${({ bgColor, isActive, theme: { colors } }) =>
    isActive ? colors[bgColor] : 'transparent'};
`;

const Button = styled.button`
  box-shadow: inset 0 -2px ${({ isActive, theme: { colors } }) => (isActive ? colors.orange : 'transparent')};
  color: ${({ activeColor, color, isActive, theme: { colors } }) =>
    isActive ? colors[activeColor] || activeColor : colors[color] || color};
  text-align: ${({ type }) => (type === 'row' ? 'left' : 'center')};

  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem;
  width: 100%;

  display: flex;
  align-items: center;

  & > svg {
    margin-right: 0.5rem;
  }
`;

const Content = styled.section`
  padding: 1rem;
  flex: 1;
`;

const TabsContext = createContext({
  activeTab: 0,
  type: 'row',
  onSelectTab: () => {},
});

class Tabs extends Component {
  static Menu = ({ bgColor, color, activeColor, children }) => (
    <TabsContext.Consumer>
      {({ type, activeTab, onSelectTab }) => (
        <List type={type}>
          {React.Children.map(children, (child, index) => {
            const isActive = activeTab === index;

            return React.cloneElement(child, {
              bgColor,
              color,
              activeColor,
              isActive,
              type,
              selectTab: () => onSelectTab(index),
            });
          })}
        </List>
      )}
    </TabsContext.Consumer>
  );

  static Tab = ({
    isActive,
    selectTab,
    type,
    bgColor = 'transparent',
    color = 'dark',
    activeColor = 'orange',
    children,
  }) => (
    <Item bgColor={bgColor} isActive={isActive}>
      <Button
        type={type}
        isActive={isActive}
        color={color}
        activeColor={activeColor}
        onClick={selectTab}>
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
    type: this.props.type, // eslint-disable-line
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
  type: 'column',
};

Tabs.propTypes = {
  type: string,
  children: arrayOf(element).isRequired,
};

export default Tabs;
