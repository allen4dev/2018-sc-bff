import React from 'react';
import styled from 'styled-components';

import TrackBar from 'modules/tracks/components/TrackBar';
import { Button } from 'components/utils/Buttons';
import { Tag } from 'components/utils/Texts';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
  height: ${({ theme: { sizes } }) => `calc(100vh - ${sizes.header})`};
`;

const Heading = styled.header``;
const Details = styled.div``;
const TagSection = styled.div``;

const TrackDetail = () => (
  <Wrapper>
    <Heading>
      <Details>
        <Button>></Button>
        <TagSection>
          <Tag>Fate UBW</Tag>
          <Tag>Emiya</Tag>
        </TagSection>
      </Details>

      <Tag>4 anios</Tag>
    </Heading>
    <TrackBar />
    <Photo />
  </Wrapper>
);

export default TrackDetail;
