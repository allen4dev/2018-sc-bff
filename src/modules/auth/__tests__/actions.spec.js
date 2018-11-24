import { API_REQUEST } from 'middlewares/api/actionTypes';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

describe('auth action creators', () => {
  it('should create an action to set the current authenticated user', () => {
    const response = {
      data: {
        attributes: {
          id: '1',
          token: 'xxx.xxx.xxx',
        },
      },
    };

    const expectedAction = {
      type: actionTypes.SET_AUTHENTICATED_USER,
      payload: {
        id: response.data.attributes.id,
        token: response.data.attributes.token,
      },
    };

    expect(actions.setAuthenticatedUser(response)).toEqual(expectedAction);
  });

  it('should create an api/API_REQUEST action to register a new user', () => {
    const details = {
      username: 'Allen',
      email: 'allen@example.test',
      password: 'secret',
    };

    const expectedAction = {
      type: API_REQUEST,
      payload: {
        success: actions.setAuthenticatedUser,
      },
      meta: {
        details,
        clientMethod: 'register',
      },
    };

    expect(actions.register(details)).toEqual(expectedAction);
  });

  it('should create an api/API_REQUEST action to login a user with his credentials', () => {
    const credentials = {
      email: 'allen@example.test',
      password: 'secret',
    };

    const expectedAction = {
      type: API_REQUEST,
      payload: { success: actions.setAuthenticatedUser },
      meta: { details: credentials, clientMethod: 'login' },
    };

    expect(actions.login(credentials)).toEqual(expectedAction);
  });
});
