import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import currentReducer from '../reducer/current';
import tokenReducer from '../reducer/token';

import fixtures from './fixtures';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('current', () => {
  const CURRENT_STATE = INITIAL_STATE.current;

  it('should handle SET_AUTHENTICATED_USER action', () => {
    const id = '1';

    const response = { data: { attributes: { id, token: 'xxx.xxx.xxx' } } };

    const nextState = currentReducer(
      CURRENT_STATE,
      actions.setAuthenticatedUser(response),
    );

    expect(nextState).toEqual(id);
  });
});

describe('token', () => {
  const TOKEN_STATE = INITIAL_STATE.token;

  it('should handle SET_AUTHENTICATED_USER action', () => {
    const token = fixtures.getToken();

    const response = fixtures.getTokenResponse(token);

    const nextState = tokenReducer(
      TOKEN_STATE,
      actions.setAuthenticatedUser(response),
    );

    expect(nextState).toEqual(token);
  });
});
