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

  it('should create an action to actualize an album', () => {
    const album = fixtures.getAlbum();

    const updated = { ...album, title: 'New album title' };

    const response = fixtures.getAlbumResponse(updated);

    const expectedAction = {
      type: actionTypes.ACTUALIZE_ALBUM,
      payload: { id: updated.id, updated },
    };

    expect(actions.actualizeAlbum(response)).toEqual(expectedAction);
  });

  it('should create an action to remove an album', () => {
    const album = fixtures.getAlbum();

    const expectedAction = {
      type: actionTypes.REMOVE_ALBUM,
      payload: { id: album.id },
    };

    expect(actions.removeAlbum(album.id)).toEqual(expectedAction);
  });
});
