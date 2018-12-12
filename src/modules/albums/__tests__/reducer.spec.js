import usersModule from 'modules/users';
import tracksModule from 'modules/tracks';

import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import * as actions from '../actions';

import allReducer from '../reducer/all';
import tracksReducer from '../reducer/tracks';

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

  it('should handle ACTUALIZE_ALBUM action', () => {
    const album = fixtures.getAlbum();
    const details = { title: 'A new album title' };

    const updated = { ...album, ...details };

    const response = fixtures.getAlbumResponse(updated);

    const newState = allReducer(
      {
        ...ALL_STATE,
        entities: {
          [album.id]: { ...album },
        },
      },
      actions.actualizeAlbum(response),
    );

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: {
        [updated.id]: updated,
      },
    });
  });

  it('should handle REMOVE_ALBUM action', () => {
    const album1 = fixtures.getAlbum();
    const album2 = fixtures.getAlbum();

    const newState = allReducer(
      {
        ...ALL_STATE,
        entities: {
          [album1.id]: album1,
          [album2.id]: album2,
        },
        byId: [album1.id, album2.id],
      },
      actions.removeAlbum(album1.id),
    );

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: {
        [album2.id]: album2,
      },
      byId: [album2.id],
    });

    const nextState = allReducer(newState, actions.removeAlbum(album2.id));

    expect(nextState).toEqual({
      entities: {},
      byId: [],
    });
  });

  it('should handle usets/ADD_USER_ALBUMS action', () => {
    const response = fixtures.getAlbumsResponse();

    const newState = allReducer(
      ALL_STATE,
      usersModule.actions.addUserAlbums(response, '1'),
    );

    const albums1 = response.data;

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: {
        [albums1[0].id]: albums1[0],
        [albums1[1].id]: albums1[1],
      },
      byId: [albums1[0].id, albums1[1].id],
    });

    const nextResponse = fixtures.getAlbumsResponse();

    const nextState = allReducer(
      newState,
      usersModule.actions.addUserAlbums(nextResponse, '2'),
    );

    const albums2 = response.data;

    expect(newState).toEqual({
      ...newState,
      entities: {
        [albums2[0].id]: albums2[0],
        [albums2[1].id]: albums2[1],
      },
      byId: [albums2[0].id, albums2[1].id],
    });
  });
});

describe('tracks', () => {
  const TRACKS_STATE = INITIAL_STATE.tracks;

  it('should handle ADD_ALBUM action', () => {
    const album = fixtures.getAlbum();

    const response = fixtures.getAlbumResponse(album);

    const tracks = ['1', '2'];

    const newState = tracksReducer(
      TRACKS_STATE,
      actions.addAlbum(response, tracks),
    );

    expect(newState).toEqual([
      ...TRACKS_STATE,
      { id: album.id, trackId: tracks[0] },
      { id: album.id, trackId: tracks[1] },
    ]);
  });

  it('should handle REMOVE_ALBUM action', () => {
    const album = fixtures.getAlbum();

    const track = {
      id: '123',
      title: 'Track title',
    };

    const newState = tracksReducer(
      [
        ...TRACKS_STATE,
        { id: album.id, trackId: track.id },
        { id: '888', trackId: '999' },
      ],
      actions.removeAlbum(album.id),
    );

    expect(newState).toEqual([...TRACKS_STATE, { id: '888', trackId: '999' }]);
  });

  it('should handle tracks/REMOVE_TRACK action', () => {
    const album = fixtures.getAlbum();

    const track = {
      id: '123',
      title: 'Track title',
    };

    const newState = tracksReducer(
      [
        ...TRACKS_STATE,
        { id: album.id, trackId: track.id },
        { id: '888', trackId: '999' },
      ],
      tracksModule.actions.removeTrack(track.id),
    );

    expect(newState).toEqual([...TRACKS_STATE, { id: '888', trackId: '999' }]);
  });
});
