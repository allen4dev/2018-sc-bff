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
});
