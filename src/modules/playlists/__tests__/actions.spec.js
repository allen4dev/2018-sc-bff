import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import fixtures from './fixtures';

describe('action creators', () => {
  it('should create an action to add a playlist', () => {
    const playlist = fixtures.getPlaylist();

    const response = fixtures.getPlaylistResponse(playlist);

    const { user } = response.data.relationships;

    const expectedAction = {
      type: actionTypes.ADD_PLAYLIST,
      payload: {
        id: playlist.id,
        playlist: {
          id: playlist.id,
          ...response.data.attributes,
        },
        userId: user.data.id,
      },
    };

    expect(actions.addPlaylist(response)).toEqual(expectedAction);
  });
});
