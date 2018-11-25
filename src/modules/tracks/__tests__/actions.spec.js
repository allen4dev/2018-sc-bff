import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

describe('tracks action creators', () => {
  it('should create an action to add a track', () => {
    const response = {
      data: {
        type: 'tracks',
        id: '1',
        attributes: {
          title: 'Some track name',
        },
      },
    };

    const { data } = response;

    const expectedAction = {
      type: actionTypes.ADD_TRACK,
      payload: {
        id: data.id,
        track: {
          id: data.id,
          ...data.attributes,
        },
      },
    };

    expect(actions.addTrack(response)).toEqual(expectedAction);
  });
});
