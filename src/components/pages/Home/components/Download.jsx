import React from 'react';
import styled from 'styled-components';

import { Title, Text } from 'components/utils/Texts';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.lightgray};
  background-image: url('images/phone.jpg');
  background-position: 90% bottom;
  background-size: 50%;
  background-repeat: no-repeat;
  height: 50vh;
  padding: 2rem;
`;

const Content = styled.section`
  width: 35%;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 1.5rem;
`;

const StyledText = styled(Text)`
  line-height: 2rem;
`;

const Download = () => (
  <Wrapper>
    <Content>
      <StyledTitle color="dark" size="2rem">
        Llevate la musica contigo
      </StyledTitle>

      <StyledText color="dark" size="1.3rem">
        SoundCloud esta disponible en Web, Mobile, Sonos, Google Chromecast y
        Microsoft Xbox One.
      </StyledText>
    </Content>
  </Wrapper>
);

export default Download;
