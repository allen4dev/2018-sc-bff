import { combineReducers } from 'redux';

import all from './all';
import tracks from './tracks';
import favorites from './favorites';

const reducer = combineReducers({ all, favorites, tracks });

export default reducer;
