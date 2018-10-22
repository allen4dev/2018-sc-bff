import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/Avatar';
import ResourceActions from 'components/shared/ResourceActions';

import TrackRowDetails from './TrackRowDetails';

const Wrapper = styled.li`
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

const TrackRowItem = () => (
  <Wrapper>
    <StyledAvatar src="/images/avatar.jpg" size="25%" square />
    <Content>
      <TrackRowDetails />
      <Footer>
        <ResourceActions />
      </Footer>
    </Content>
  </Wrapper>
);

export default TrackRowItem;
