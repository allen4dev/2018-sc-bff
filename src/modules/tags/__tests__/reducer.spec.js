import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import fixtures from './fixtures';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});
