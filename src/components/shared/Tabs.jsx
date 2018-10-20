import React, { Component, createContext } from 'react';
import styled from 'styled-components';
import { element, arrayOf } from 'prop-types';

const Wrapper = styled.section``;

const TabsContext = createContext({
  activeTab: 0,
  onSelectTab: () => {},
});

class Tabs extends Component {
  static Menu = ({ children }) => (
    <TabsContext.Consumer>
      {({ activeTab, onSelectTab }) =>
        React.Children.map(children, (child, index) => {
          const isActive = activeTab === index;

          return React.cloneElement(child, {
            isActive,
            selectTab: () => onSelectTab(index),
          });
        })
      }
    </TabsContext.Consumer>
  );

  static Tab = ({ isActive, selectTab, children }) => (
    <div>
      <button
        type="button"
        onClick={selectTab}
        style={{ color: isActive ? 'blue' : null }}>
        {children}
      </button>
    </div>
  );

  static Panels = ({ children }) => (
    <TabsContext.Consumer>
      {({ activeTab }) => <div>{children[activeTab]}</div>}
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
    const { children } = this.props;

    return (
      <Wrapper>
        <TabsContext.Provider value={this.state}>
          {children}
        </TabsContext.Provider>
      </Wrapper>
    );
  }
}

Tabs.propTypes = {
  children: arrayOf(element).isRequired,
};

export default Tabs;
