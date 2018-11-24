import client from 'helpers/client';

import { API_REQUEST } from 'middlewares/api/actionTypes';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

describe('auth action creators', () => {
  it('should create an action to set the current authenticated user', () => {
    const id = '1';
    const token = 'xxx.xxx.xxx';

    const expectedAction = {
      type: actionTypes.SET_AUTHENTICATED_USER,
      payload: { id, token },
    };

    expect(actions.setAuthenticatedUser(id, token)).toEqual(expectedAction);
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
        apiEndpoint: client.register,
      },
    };

    expect(actions.register(details)).toEqual(expectedAction);
  });
});
