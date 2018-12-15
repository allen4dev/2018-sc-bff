import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import fixtures from './fixtures';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('replies module async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create an ADD_TRACK_REPLY action after a user replies a track', async () => {
    const reply = fixtures.getReply();

    const response = fixtures.getReplyResponse(reply);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 201,
        response,
      });
    });

    const { track } = response.data.relationships;

    const expectedActions = [
      {
        type: actionTypes.ADD_TRACK_REPLY,
        payload: {
          id: reply.id,
          reply: { ...reply },
          repliedId: track.data.id,
        },
      },
    ];

    const token = 'xxx.xxx.xxx';

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token },
    });

    await store.dispatch(actions.replyTrack(track.data.id, reply.body));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_REPLY_COMMENT action after a user comment a reply', async () => {
    const reply = fixtures.getReply();

    const comment = fixtures.getReply();

    const response = fixtures.getReplyResponse(comment);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 201,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_REPLY_COMMENT,
        payload: {
          id: comment.id,
          reply: { ...comment },
          repliedId: reply.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.commentReply(reply.id, comment.body));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
