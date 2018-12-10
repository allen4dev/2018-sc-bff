import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import usersModule from 'modules/users';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import fixtures from './fixtures';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth module async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create an SET_AUTHENTICATED_USER  action after a user registration', async () => {
    const token = fixtures.getToken();

    const response = fixtures.getTokenResponse(token);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 201,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.SET_AUTHENTICATED_USER,
        payload: {
          id: response.data.attributes.id,
          token: response.data.attributes.token,
        },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    const details = {
      username: 'Allen',
      email: 'allen@example.test',
      password: 'asdqwe',
    };

    await store.dispatch(actions.register(details));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an SET_AUTHENTICATED_USER  action after a login', async () => {
    const token = fixtures.getToken();

    const response = fixtures.getTokenResponse(token);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.SET_AUTHENTICATED_USER,
        payload: {
          id: response.data.attributes.id,
          token: response.data.attributes.token,
        },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    const credentials = {
      email: 'allen@example.test',
      password: 'asdqwe',
    };

    await store.dispatch(actions.login(credentials));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an SET_AUTHENTICATED_USER  action after a login', async () => {
    const token = fixtures.getToken();

    const response = fixtures.getTokenResponse(token);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.SET_AUTHENTICATED_USER,
        payload: {
          id: response.data.attributes.id,
          token: response.data.attributes.token,
        },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    const credentials = { email: 'allen@example.test', password: 'asdqwe' };

    await store.dispatch(actions.login(credentials));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an users/ADD_USER action after user fetchs his profile', async () => {
    const user = {
      id: '123',
      username: 'Allen',
      email: 'allen@example.test',
    };

    const response = {
      data: {
        type: 'users',
        id: user.id,
        attributes: {
          username: user.username,
          email: user.email,
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: usersModule.actionTypes.ADD_USER,
        payload: {
          user: { ...user },
          id: user.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.fetchProfile());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an users/UPDATE_USER action after user updates his profile', async () => {
    const user = {
      id: '123',
      username: 'allen',
      email: 'allen@example.test',
    };

    const details = {
      username: 'Updated username',
    };

    const updated = {
      ...user,
      ...details,
    };

    const response = {
      data: {
        type: 'users',
        id: updated.id,
        attributes: {
          username: updated.username,
          email: updated.email,
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: usersModule.actionTypes.UPDATE_USER,
        payload: {
          updated: { ...updated },
          id: updated.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.updateProfile(details));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an users/ADD_USER_TRACKS action after user updates his profile', async () => {
    const user = {
      id: '123',
      username: 'allen',
    };

    const response = {
      data: [
        { type: 'tracks', id: '123', attributes: { title: 'Track 1' } },
        { type: 'tracks', id: '456', attributes: { title: 'Track 2' } },
      ],
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: usersModule.actionTypes.ADD_USER_TRACKS,
        payload: {
          tracks: response.data,
          id: user.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { current: user.id, token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.fetchProfileTracks());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
