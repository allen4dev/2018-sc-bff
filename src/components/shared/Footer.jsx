import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  height: ${({ theme: { sizes } }) => sizes.footer};
  padding: 1rem 2rem;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.li`
  margin: 0.5rem;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.darkgray};
  text-decoration: none;
`;

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <Link href="/">Busquedas populares</Link>
      </Item>
      <Item>
        <Link href="/">Directorio</Link>
      </Item>
      <Item>
        <Link href="/">Quienes somos</Link>
      </Item>
      <Item>
        <Link href="/">Blog</Link>
      </Item>
      <Item>
        <Link href="/">Trabajo</Link>
      </Item>
      <Item>
        <Link href="/">Desarrolladores</Link>
      </Item>
      <Item>
        <Link href="/">Ayuda</Link>
      </Item>
      <Item>
        <Link href="/">Legal</Link>
      </Item>
      <Item>
        <Link href="/">Privacidad</Link>
      </Item>
      <Item>
        <Link href="/">Cookies</Link>
      </Item>
      <Item>
        <Link href="/">SoundCloud Ltd.</Link>
      </Item>
    </List>
  </Wrapper>
);

export default Footer;
