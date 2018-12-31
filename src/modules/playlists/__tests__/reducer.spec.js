import tracksModule from 'modules/tracks';
import usersModule from 'modules/users';

import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import * as actions from '../actions';

import allReducer from '../reducer/all';
import favoritesReducer from '../reducer/favorites';
import sharedReducer from '../reducer/shared';
import tracksReducer from '../reducer/tracks';

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

    const playlist2 = fixtures.getPlaylist();

    const nextResponse = fixtures.getPlaylistResponse(playlist2);

    const nextState = allReducer(newState, actions.addPlaylist(nextResponse));

    expect(nextState).toEqual({
      ...newState,
      entities: {
        [playlist1.id]: { ...playlist1 },
        [playlist2.id]: { ...playlist2 },
      },
      byId: [playlist1.id, playlist2.id],
    });
  });

  it('should handle ADD_CREATED_PLAYLIST action', () => {
    const playlist1 = fixtures.getPlaylist();

    const response = fixtures.getPlaylistResponse(playlist1);

    const newState = allReducer(
      ALL_STATE,
      actions.addCreatedPlaylist(response),
    );

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: {
        [playlist1.id]: { ...playlist1 },
      },
      byId: [playlist1.id],
    });

    const playlist2 = fixtures.getPlaylist();

    const nextResponse = fixtures.getPlaylistResponse(playlist2);

    const nextState = allReducer(
      newState,
      actions.addCreatedPlaylist(nextResponse),
    );

    expect(nextState).toEqual({
      ...newState,
      entities: {
        [playlist1.id]: { ...playlist1 },
        [playlist2.id]: { ...playlist2 },
      },
      byId: [playlist1.id, playlist2.id],
    });
  });

  it('should handle ACTUALIZE_PLAYLIST action', () => {
    const playlist = fixtures.getPlaylist();

    const details = { title: 'Updated playlist title' };

    const updated = { ...playlist, ...details };

    const response = fixtures.getPlaylistResponse(updated);

    const newState = allReducer(
      {
        ...ALL_STATE,
        entities: { [playlist.id]: { ...playlist } },
      },
      actions.actualizePlaylist(response),
    );

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: { [playlist.id]: updated },
    });
  });

  it('should handle REMOVE_PLAYLIST action', () => {
    const playlist1 = fixtures.getPlaylist();
    const playlist2 = fixtures.getPlaylist();

    const newState = allReducer(
      {
        ...ALL_STATE,
        entities: {
          [playlist1.id]: { ...playlist1 },
          [playlist2.id]: { ...playlist2 },
        },
        byId: [playlist1.id, playlist2.id],
      },
      actions.removePlaylist(playlist1.id),
    );

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: {
        [playlist2.id]: { ...playlist2 },
      },
      byId: [playlist2.id],
    });

    const nextState = allReducer(
      newState,
      actions.removePlaylist(playlist2.id),
    );

    expect(nextState).toEqual({
      ...newState,
      entities: {},
      byId: [],
    });
  });

  it('should handle users/', () => {
    const response = fixtures.getPlaylistsResponse();

    const newState = allReducer(
      ALL_STATE,
      usersModule.actions.addUserPlaylists(response, '1'),
    );

    const playlists1 = response.data;

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: {
        [playlists1[0].id]: {
          ...playlists1[0].attributes,
          id: playlists1[0].id,
        },
        [playlists1[1].id]: {
          ...playlists1[1].attributes,
          id: playlists1[1].id,
        },
      },
      byId: [playlists1[0].id, playlists1[1].id],
    });
  });
});

describe('tracks', () => {
  const TRACKS_STATE = INITIAL_STATE.tracks;

  it('should handle ADD_PLAYLIST_TRACK action', () => {
    const playlist = fixtures.getPlaylist();
    const track = { id: '123', title: 'Track title' };

    const details = { id: playlist.id, trackId: track.id };

    const newState = tracksReducer(TRACKS_STATE, actions.addTrack(details));

    expect(newState).toEqual([
      ...TRACKS_STATE,
      { id: playlist.id, trackId: track.id },
    ]);
  });

  it('should handle REMOVE_PLAYLIST_TRACK action', () => {
    const playlist = fixtures.getPlaylist();
    const track = { id: '123', title: 'Track title' };

    const details = { id: playlist.id, trackId: track.id };

    const newState = tracksReducer(
      [
        ...TRACKS_STATE,
        { id: playlist.id, trackId: track.id },
        { id: playlist.id, trackId: '999' },
      ],
      actions.removeTrack(details),
    );

    expect(newState).toEqual([{ id: playlist.id, trackId: '999' }]);
  });

  it('should handle REMOVE_PLAYLIST action', () => {
    const track = { id: '123', title: 'Track title' };
    const playlist = fixtures.getPlaylist();

    const newState = tracksReducer(
      [
        ...TRACKS_STATE,
        { id: playlist.id, trackId: track.id },
        { id: '888', trackId: '999' },
      ],
      tracksModule.actions.removeTrack(track.id),
    );

    expect(newState).toEqual([...TRACKS_STATE, { id: '888', trackId: '999' }]);
  });

  it('should handle tracks/REMOVE_TRACK action', () => {
    const track = { id: '123', title: 'Track title' };
    const playlist = fixtures.getPlaylist();

    const newState = tracksReducer(
      [
        ...TRACKS_STATE,
        { id: playlist.id, trackId: track.id },
        { id: '888', trackId: '999' },
      ],
      actions.removePlaylist(playlist.id),
    );

    expect(newState).toEqual([...TRACKS_STATE, { id: '888', trackId: '999' }]);
  });
});

describe('favorites', () => {
  const FAVORITES_STATE = INITIAL_STATE.favorites;

  it('should handle ADD_FAVORITED_PLAYLIST action', () => {
    const playlist = fixtures.getPlaylist();
    const user = {
      id: '123',
    };

    const newState = favoritesReducer(
      FAVORITES_STATE,
      actions.addFavoritedPlaylist(playlist.id, user.id),
    );

    expect(newState).toEqual([
      ...FAVORITES_STATE,
      { id: playlist.id, userId: user.id },
    ]);
  });

  it('should handle REMOVE_PLAYLIST action', () => {
    const user = { id: '123' };
    const playlist = fixtures.getPlaylist();

    const newState = favoritesReducer(
      [
        ...FAVORITES_STATE,
        { id: playlist.id, userId: user.id },
        { id: '888', userId: '999' },
      ],
      actions.removePlaylist(playlist.id),
    );

    expect(newState).toEqual([
      ...FAVORITES_STATE,
      { id: '888', userId: '999' },
    ]);
  });

  it('should handle users/REMOVE_USER action', () => {
    const playlist = fixtures.getPlaylist();
    const user = { id: '123' };

    const newState = favoritesReducer(
      [
        ...FAVORITES_STATE,
        { id: playlist.id, userId: user.id },
        { id: '888', userId: '999' },
      ],
      usersModule.actions.removeUser(user.id),
    );

    expect(newState).toEqual([
      ...FAVORITES_STATE,
      { id: '888', userId: '999' },
    ]);
  });
});

describe('shared', () => {
  const SHARED_STATE = INITIAL_STATE.favorites;

  it('should handle ADD_SHARED_PLAYLIST action', () => {
    const playlist = fixtures.getPlaylist();
    const user = {
      id: '123',
    };

    const newState = sharedReducer(
      SHARED_STATE,
      actions.addSharedPlaylist(playlist.id, user.id),
    );

    expect(newState).toEqual([
      ...SHARED_STATE,
      { id: playlist.id, userId: user.id },
    ]);
  });

  it('should handle REMOVE_PLAYLIST action', () => {
    const user = { id: '123' };
    const playlist = fixtures.getPlaylist();

    const newState = sharedReducer(
      [
        ...SHARED_STATE,
        { id: playlist.id, userId: user.id },
        { id: '888', userId: '999' },
      ],
      actions.removePlaylist(playlist.id),
    );

    expect(newState).toEqual([...SHARED_STATE, { id: '888', userId: '999' }]);
  });

  it('should handle users/REMOVE_USER action', () => {
    const playlist = fixtures.getPlaylist();
    const user = { id: '123' };

    const newState = favoritesReducer(
      [
        ...SHARED_STATE,
        { id: playlist.id, userId: user.id },
        { id: '888', userId: '999' },
      ],
      usersModule.actions.removeUser(user.id),
    );

    expect(newState).toEqual([...SHARED_STATE, { id: '888', userId: '999' }]);
  });
});
