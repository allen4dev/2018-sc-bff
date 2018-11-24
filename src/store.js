import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import api from 'middlewares/api';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer, applyMiddleware(api, logger));

export default store;
