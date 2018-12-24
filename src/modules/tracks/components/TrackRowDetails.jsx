import React, { Fragment } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { FaPlay } from 'react-icons/fa';

import { Button } from 'components/utils/Buttons';

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

const TrackRowDetails = ({ username, title }) => (
  <Fragment>
    <Heading>
      <Button bgColor="orange" color="white" radius="50%">
        <FaPlay />
      </Button>
      <Details>
        <Artist>{username}</Artist>
        <Name>{title}</Name>
      </Details>
    </Heading>
    <Progress />
  </Fragment>
);

TrackRowDetails.propTypes = {
  username: string.isRequired,
  title: string.isRequired,
};

export default TrackRowDetails;
