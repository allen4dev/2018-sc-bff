import { injectGlobal } from 'styled-components';

// ${styledNormalize}

/* eslint-disable */
injectGlobal`
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
  myred: 'darkred',
};

const sizes = {};

export default {
  colors,
  sizes,
};
