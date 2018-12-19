import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import fixtures from './fixtures';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

it('should handle ADD_TAGS action', () => {
  const response = fixtures.getTagsResponse();

  const tags = fixtures.getRawTags(response);

  const newState = reducer(INITIAL_STATE, actions.addTags(response));

  expect(newState).toEqual(tags);

  const nextResponse = fixtures.getTagsResponse();

  const nextTags = fixtures.getRawTags(nextResponse);

  const nextState = reducer(newState, actions.addTags(nextResponse));

  expect(nextState).toEqual([...tags, ...nextTags]);
});
