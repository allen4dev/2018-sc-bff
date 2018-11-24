import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import currentReducer from '../reducer/current';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('current', () => {
  const CURRENT_STATE = INITIAL_STATE.current;

  it('should handle SET_CURRENT_USER action', () => {
    const uid = '1';

    const nextState = currentReducer(
      CURRENT_STATE,
      actions.setCurrentUser(uid),
    );

    expect(nextState).toEqual(uid);
  });
});
