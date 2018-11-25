import { handleAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const ENTITIES_STATE = INITIAL_STATE.entities;

const entitiesReducer = handleAction(
  actionTypes.ADD_TRACK,
  (state, action) => ({
    ...state,
    [action.payload.id]: action.payload.track,
  }),
  ENTITIES_STATE,
);

export default entitiesReducer;
