import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import store from './store';

function rerender() {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
}

rerender();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    rerender();
  });
}
