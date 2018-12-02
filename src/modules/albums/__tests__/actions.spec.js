import tracksFixtures from 'modules/tracks/__tests__/fixtures';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import fixtures from './fixtures';

describe('action creators', () => {
  it('should create an action to add an album', () => {
    const album = fixtures.getAlbum();

    const response = fixtures.getAlbumResponse(album);

    const expectedAction = {
      type: actionTypes.ADD_ALBUM,
      payload: {
        id: album.id,
        album: { ...album },
        userId: response.data.relationships.user.data.id,
      },
    };

    expect(actions.addAlbum(response)).toEqual(expectedAction);
  });
});
