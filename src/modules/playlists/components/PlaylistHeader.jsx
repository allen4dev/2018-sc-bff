import React from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

import Photo from 'components/shared/Photo';
import { Button } from 'components/utils/Buttons';
import { Tag } from 'components/utils/Texts';

const Wrapper = styled.section`
  background-image: linear-gradient(to left, #7c9cae, #cad1d7);
  padding: 1rem;
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'heading photo'
    'footer photo';
`;

const Heading = styled.header`
  grid-area: heading;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Details = styled.section`
  display: flex;
  align-items: center;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;

  & > :first-child {
    margin-bottom: 0.3rem;
  }
`;

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
`;

const TrackCount = styled.div`
  background-color: ${({ theme: { colors } }) => colors.dark};
  border-radius: 50%;
  padding: 0.5rem;
  width: 125px;
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PlaylistPhoto = styled(Photo)`
  grid-area: photo;
`;

const Count = styled.span`
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const Span = styled.span`
  color: white;
  text-transform: uppercase;
  padding: 0.5rem;
`;

const Total = styled.span`
  color: ${({ theme: { colors } }) => colors.gray};
`;

const PlaylistHeader = () => (
  <Wrapper>
    <Heading>
      <Details>
        <Button bgColor="orange" color="white" radius="50%">
          <FaPlay />
        </Button>

        <Information>
          <Tag color="lightgray" bgColor="dark" size=".8rem">
            Archer
          </Tag>
          <Tag bgColor="dark">Fate collection</Tag>
        </Information>
      </Details>

      <Tag>7 meses</Tag>
    </Heading>

    <Footer>
      <TrackCount>
        <Count>72</Count>
        <Span>Pistas</Span>
        <Total>Total time</Total>
      </TrackCount>
    </Footer>

    <PlaylistPhoto src="/images/default_image.png" />
  </Wrapper>
);

export default PlaylistHeader;
