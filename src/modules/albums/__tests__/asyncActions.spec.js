import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import { INITIAL_STATE } from '../model';

import fixtures from './fixtures';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('albums module async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create an ADD_CREATED_ALBUM action after a user creates an album', async () => {
    const album = fixtures.getAlbum();

    const response = fixtures.getAlbumResponse(album);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 201, response });
    });

    const details = { ...response.data.attributes, tracks: ['1', '2'] };

    const expectedActions = [
      {
        type: actionTypes.ADD_CREATED_ALBUM,
        payload: {
          tracks: details.tracks,
          id: album.id,
          album: { ...album },
          userId: response.data.relationships.user.data.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.createAlbum(details));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_ALBUM action after a user creates an album', async () => {
    const album = fixtures.getAlbum();

    const response = fixtures.getAlbumResponse(album);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const user = response.included[0];

    const expectedActions = [
      {
        type: actionTypes.ADD_ALBUM,
        payload: {
          id: album.id,
          album: { ...album },
          user: {
            ...user.attributes,
            id: user.id,
          },
          userId: response.data.relationships.user.data.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.fetchAlbum(album.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ACTUALIZE_ALBUM action after a user updates his album', async () => {
    const album = fixtures.getAlbum();
    const details = { title: 'A new album title' };

    const updated = { ...album, ...details };

    const response = fixtures.getAlbumResponse(updated);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ACTUALIZE_ALBUM,
        payload: {
          updated,
          id: updated.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.updateAlbum(album.id, details));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ACTUALIZE_ALBUM action after a user publish his album', async () => {
    const album = fixtures.getAlbum();
    const updated = { ...album, published: true };

    const response = fixtures.getAlbumResponse(updated);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ACTUALIZE_ALBUM,
        payload: {
          updated,
          id: updated.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.updateAlbum(album.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an REMOVE_ALBUM action after a user deletes his album', async () => {
    const album = fixtures.getAlbum();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 204 });
    });

    const expectedActions = [
      { type: actionTypes.REMOVE_ALBUM, payload: { id: album.id } },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.deleteAlbum(album.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_FAVORITED_ALBUM action after a user favorites an album', async () => {
    const album = fixtures.getAlbum();
    const user = { id: '123' };

    const response = fixtures.getAlbumResponse(album);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_FAVORITED_ALBUM,
        payload: {
          id: album.id,
          userId: user.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { current: user.id, token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.favoriteAlbum(album.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_SHARED_ALBUM action after a user shares an album', async () => {
    const album = fixtures.getAlbum();
    const user = { id: '123' };

    const response = fixtures.getAlbumResponse(album);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_SHARED_ALBUM,
        payload: {
          id: album.id,
          userId: user.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { current: user.id, token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.shareAlbum(album.id));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
