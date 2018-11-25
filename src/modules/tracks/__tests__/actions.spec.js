import { API_REQUEST } from 'middlewares/api/actionTypes';

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

  it('should create an api/API_REQUEST action to create a new track', () => {
    const details = {
      title: 'My new Track',
      photo: 'A photo image',
      src: 'The track source',
      tags: ['games'],
    };

    const expectedAction = {
      type: API_REQUEST,
      payload: {
        success: actions.addTrack,
      },
      meta: {
        details,
        clientMethod: 'createTrack',
      },
    };

    expect(actions.createTrack(details)).toEqual(expectedAction);
  });
});
