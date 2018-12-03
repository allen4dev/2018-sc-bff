import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

import fixtures from './fixtures';

describe('users - action creators', () => {
  it('should create an action to add a user', () => {
    const user = fixtures.getUser();

    const response = fixtures.getUserResponse(user);

    const expectedAction = {
      type: actionTypes.ADD_USER,
      payload: {
        user,
        id: user.id,
      },
    };

    expect(actions.addUser(response)).toEqual(expectedAction);
  });
});
