import { combineReducers } from 'redux';

import all from './all';
import favorites from './favorites';
import shared from './shared';
import tracks from './tracks';

const reducer = combineReducers({ all, favorites, shared, tracks });

export default reducer;
