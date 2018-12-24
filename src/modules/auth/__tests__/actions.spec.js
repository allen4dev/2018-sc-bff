import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

describe('auth action creators', () => {
  it('should create an action to set the current authenticated user', () => {
    const response = {
      data: {
        id: '1',
        attributes: {
          token: 'xxx.xxx.xxx',
        },
      },
    };

    const expectedAction = {
      type: actionTypes.SET_AUTHENTICATED_USER,
      payload: {
        id: response.data.id,
        token: response.data.attributes.token,
      },
    };

    expect(actions.setAuthenticatedUser(response)).toEqual(expectedAction);
  });
});
