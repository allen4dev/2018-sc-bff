import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const addTrack = createAction(
  actionTypes.ADD_TRACK,
  ({ data: { id, attributes } }) => ({
    id,
    track: {
      ...attributes,
      id,
    },
  }),
);

export const aasd = 1;
