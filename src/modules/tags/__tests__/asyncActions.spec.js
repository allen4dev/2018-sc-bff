import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import fixtures from './fixtures';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create an ADD_TAGS  action after fetch the tags', async () => {
    const response = fixtures.getTagsResponse();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_TAGS,
        payload: {
          tags: fixtures.getRawTags(response),
        },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.fetchTags());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
