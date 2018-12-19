import * as actionTypes from '../actionTypes';
import * as actions from '../actions';
import fixtures from './fixtures';

describe('action creators', () => {
  it('should create an action to add a list of tags', () => {
    const response = fixtures.getTagsResponse();

    const tags = response.data.map(tag => ({
      ...tag.attributes,
      id: tag.id,
    }));

    const expectedAction = {
      type: actionTypes.ADD_TAGS,
      payload: { tags },
    };

    expect(actions.addTags(response)).toEqual(expectedAction);
  });
});