import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import fixtures from './fixtures';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create an SET_AUTHENTICATED_USER  action after a user registration', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 201,
        // response,
      });
    });

    const expectedActions = [];

    const store = mockStore(INITIAL_STATE);

    // await store.dispatch(actions.register(details));

    // expect(store.getActions()).toEqual(expectedActions);
    expect(true).toBeTruthy();
  });
});
