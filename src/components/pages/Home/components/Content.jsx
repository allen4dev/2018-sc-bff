import React from 'react';
import styled from 'styled-components';

import Searchbar from 'components/shared/Searchbar';
import { Text } from 'components/utils/Texts';
import { FlatButton } from 'components/utils/Buttons';

const Wrapper = styled.section``;
const Heading = styled.header`
  width: 60%;
  margin: auto;
  padding: 1rem
  text-align: center;
`;
const Search = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const StyledSearchbar = styled(Searchbar)`
  flex: 1;
`;

const StyledText = styled(Text)`
  margin: 0 0.5rem;
`;

const Content = () => (
  <Wrapper>
    <Heading>
      <Search>
        <StyledSearchbar />
        <StyledText>o</StyledText>
        <FlatButton color="gray">Sube la tuya</FlatButton>
      </Search>
      <Text size="1.2rem">
        Escucha la musica del momento gratis en la comunidad SoundCloud
      </Text>
    </Heading>
  </Wrapper>
);

export default Content;
