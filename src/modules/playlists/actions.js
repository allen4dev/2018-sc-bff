import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const addPlaylist = createAction(
  actionTypes.ADD_PLAYLIST,
  ({ data: { id, attributes, relationships } }) => ({
    id,
    playlist: {
      id,
      ...attributes,
    },
    userId: relationships.user.data.id,
  }),
);

export const DUMMIE = 'DUMMIE';
