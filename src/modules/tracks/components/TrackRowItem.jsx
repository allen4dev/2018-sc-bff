import React from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

import Avatar from 'components/shared/Avatar';
import ResourceActions from 'components/shared/ResourceActions';
import { Button } from 'components/utils/Buttons';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
`;
const Content = styled.section`
  flex: 1;
  padding: 0 1rem;
`;
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
const Footer = styled.footer``;

const TrackRowItem = () => (
  <Wrapper>
    <Avatar src="/images/avatar.jpg" size="25%" square />
    <Content>
      <Heading>
        <Button bgColor="orange" color="white" radius="50%">
          <FaPlay />
        </Button>
        <Details>
          <Artist>Fate UBW</Artist>
          <Name>Emiya (Archer theme)</Name>
        </Details>
      </Heading>
      <Progress />
      <Footer>
        <ResourceActions />
      </Footer>
    </Content>
  </Wrapper>
);

export default TrackRowItem;
