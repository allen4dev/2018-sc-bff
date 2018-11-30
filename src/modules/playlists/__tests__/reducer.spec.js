import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});
