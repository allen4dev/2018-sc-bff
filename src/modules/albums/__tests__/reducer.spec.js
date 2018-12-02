import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import * as actions from '../actions';

import allReducer from '../reducer/all';

import fixtures from './fixtures';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('all', () => {
  const ALL_STATE = INITIAL_STATE.all;

  it('should handle ADD_ALBUM action', () => {
    const album = fixtures.getAlbum();

    const response = fixtures.getAlbumResponse(album);

    const newState = allReducer(ALL_STATE, actions.addAlbum(response));

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: {
        [album.id]: album,
      },
      byId: [album.id],
    });
  });
});