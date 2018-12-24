import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import fixtures from './fixtures';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('tracks module async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create an ADD_TRACK action after a user creates a track', async () => {
    const track = fixtures.getTrack();

    const response = fixtures.getTrackResponse(track);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 201,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_TRACK,
        payload: {
          id: track.id,
          track: { ...track },
          user: {
            ...response.included[0].attributes,
            id: response.included[0].id,
          },
          userId: response.data.relationships.user.data.id,
        },
      },
    ];

    const token = 'xxx.xxx.xxx';

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { current: response.data.relationships.user.data.id, token },
      users: {
        all: {
          entities: {
            [response.data.relationships.user.data.id]: {
              id: response.data.relationships.user.data.id,
              username: 'allen',
            },
          },
        },
      },
    });

    const details = { ...response.data.attributes };

    await store.dispatch(actions.createTrack(details));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_TRACK action after a guest fetchs a track', async () => {
    const track = fixtures.getTrack();

    const response = fixtures.getTrackResponse(track);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_TRACK,
        payload: {
          id: track.id,
          track: { ...track },
          user: {
            ...response.included[0].attributes,
            id: response.included[0].id,
          },
          userId: response.data.relationships.user.data.id,
        },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.fetchTrack(track.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ACTUALIZE_TRACK action after a user updates a track', async () => {
    const track = fixtures.getTrack();

    const updatedFields = {
      ...track,
      title: 'Updated title',
    };

    const response = fixtures.getTrackResponse(updatedFields);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ACTUALIZE_TRACK,
        payload: {
          id: track.id,
          updated: { ...updatedFields },
        },
      },
    ];

    const token = 'xxx.xxx.xxx';

    const store = mockStore({ ...INITIAL_STATE, auth: { token } });

    await store.dispatch(actions.updateTrack(track.id, updatedFields));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ACTUALIZE_TRACK action after a user publish his track', async () => {
    const track = fixtures.getTrack();

    const published = { ...track, published: true };

    const response = fixtures.getTrackResponse(published);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ACTUALIZE_TRACK,
        payload: { id: track.id, updated: published },
      },
    ];

    const token = 'xxx.xxx.xxx';

    const store = mockStore({ ...INITIAL_STATE, auth: { token } });

    await store.dispatch(actions.publishTrack(track.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a REMOVE_TRACK action after a user delete his track', async () => {
    const track = fixtures.getTrack();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 204 });
    });

    const expectedActions = [
      { type: actionTypes.REMOVE_TRACK, payload: { id: track.id } },
    ];

    const token = 'xxx.xxx.xxx';

    const store = mockStore({ ...INITIAL_STATE, auth: { token } });

    await store.dispatch(actions.deleteTrack(track.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_FAVORITED_TRACK action after a user favorites a track', async () => {
    const track = fixtures.getTrack();

    const response = fixtures.getTrackResponse(track);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_FAVORITED_TRACK,
        payload: {
          id: track.id,
          userId: response.data.relationships.user.data.id,
        },
      },
    ];

    const token = 'xxx.xxx.xxx';

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token },
    });

    await store.dispatch(actions.favoriteTrack(track.id));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
