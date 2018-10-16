import React from 'react';
import styled from 'styled-components';

import TrackCardList from 'modules/tracks/components/TrackCardList';

import Searchbar from 'components/shared/Searchbar';
import { Text } from 'components/utils/Texts';
import { Button, FlatButton } from 'components/utils/Buttons';

const Wrapper = styled.section`
  padding: 2rem;
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  grid-template-areas:
    '. heading .'
    'list list list'
    '. footer .';
  grid-gap: 2rem;
`;

const Heading = styled.header`
  grid-area: heading;
  text-align: center;
`;

const Search = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledSearchbar = styled(Searchbar)`
  flex: 1;
`;

const StyledText = styled(Text)`
  margin: 0 0.5rem;
`;

const TrackList = styled(TrackCardList)`
  grid-area: list;
`;

const Footer = styled.footer`
  grid-area: footer;
  text-align: center;
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

    <TrackList />

    <Footer>
      <Button bgColor="orange" color="white">
        Explora nuestro top 50
      </Button>
    </Footer>
  </Wrapper>
);

export default Content;
