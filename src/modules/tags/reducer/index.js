import { handleAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

const tagsReducer = handleAction(
  actionTypes.ADD_TAGS,
  (state, { payload }) => [...state, ...payload.tags],
  INITIAL_STATE,
);

export default tagsReducer;
