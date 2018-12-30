import React, { Fragment } from 'react';
import styled from 'styled-components';
import { string, bool, func } from 'prop-types';
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

function renderPublishButton(published, publish) {
  if (published) return null;

  return (
    <Button noHeight bgColor="green" color="white" onClick={publish}>
      Publish
    </Button>
  );
}

const TrackRowDetails = ({ username, title, published, publish }) => (
  <Fragment>
    <Heading>
      <Button bgColor="orange" color="white" radius="50%">
        <FaPlay />
      </Button>
      <Details>
        {renderPublishButton(published, publish)}

        <Artist>{username}</Artist>
        <Name>{title}</Name>
      </Details>
    </Heading>
    <Progress />
  </Fragment>
);

TrackRowDetails.defaultProps = {
  publish: () => {},
  published: false,
};

TrackRowDetails.propTypes = {
  username: string.isRequired,
  title: string.isRequired,
  published: bool,
  publish: func,
};

export default TrackRowDetails;
