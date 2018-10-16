import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

function rerender() {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'),
  );
}

rerender();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    rerender();
  });
}
