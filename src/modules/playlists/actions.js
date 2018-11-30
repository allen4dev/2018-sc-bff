import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const addPlaylist = createAction(
  actionTypes.ADD_PLAYLIST,
  ({ data: { id, attributes } }) => ({
    id,
    playlist: {
      id,
      ...attributes,
    },
  }),
);

export const DUMMIE = 'DUMMIE';
