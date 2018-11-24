import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

describe('auth action creators', () => {
  it('should create an action to set the current authenticated user', () => {
    const id = '1';

    const expectedAction = {
      type: actionTypes.SET_CURRENT_USER,
      payload: { id },
    };

    expect(actions.setCurrentUser(id)).toEqual(expectedAction);
  });

  it('should create an action to set the current authenticated token', () => {
    const token = 'xxx.xxx.xxx';

    const expectedAction = {
      type: actionTypes.SET_TOKEN,
      payload: { token },
    };

    expect(actions.setToken(token)).toEqual(expectedAction);
  });
});
