import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

/* eslint-disable */
injectGlobal`
  ${styledNormalize}

  *, *::before, &::after {
    box-sizing: border-box;
  }

  html {
    font-family: Arial;
  }

  body, h1, h2, h3, h4, ul, p, figure {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

const colors = {
  black: '#111111',
  dark: '#333333',
  lightgray: '#f2f2f2',
  gray: '#c2c2c2',
  darkgray: '#a8a8a8',
  blue: '#5988dd',
  orange: '#ff5500',
  darkGradient: '#281e49',
  lightGradient: '#592146',
  facebook: '#2c498f',
  google: '#4285f4',
};

const sizes = {
  header: '4rem',
};

export default {
  colors,
  sizes,
};
