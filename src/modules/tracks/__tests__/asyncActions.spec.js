import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

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
});
