import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

function rerender() {
  return render(<App />, document.getElementById('root'));
}

rerender();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    rerender();
  });
}
