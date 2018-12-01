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

  it('should handle ADD_PLAYLIST action', () => {
    const playlist1 = fixtures.getPlaylist();

    const response = fixtures.getPlaylistResponse(playlist1);

    const newState = allReducer(ALL_STATE, actions.addPlaylist(response));

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: {
        [playlist1.id]: { ...playlist1 },
      },
      byId: [playlist1.id],
    });
  });
});
