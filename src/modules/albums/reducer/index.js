import { combineReducers } from 'redux';

import all from './all';
import tracks from './tracks';

const reducer = combineReducers({ all, tracks });

export default reducer;
