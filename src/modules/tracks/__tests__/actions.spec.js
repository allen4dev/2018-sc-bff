import { API_REQUEST } from 'middlewares/api/actionTypes';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import fixtures from './fixtures';

describe('tracks action creators', () => {
  it('should create an action to add a track', () => {
    const track = fixtures.getTrack();

    const response = fixtures.getTrackResponse(track);

    const {
      data: { id, attributes, relationships },
    } = response;

    const expectedAction = {
      type: actionTypes.ADD_TRACK,
      payload: {
        id,
        track: {
          id,
          ...attributes,
        },
        userId: relationships.user.data.id,
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

  it('should create an api/API_REQUEST action to fetch track', () => {
    const track = fixtures.getTrack();

    const expectedAction = {
      type: API_REQUEST,
      payload: {
        success: actions.addTrack,
      },
      meta: {
        details: track.id,
        clientMethod: 'getTrack',
      },
    };

    expect(actions.fetchTrack(track.id)).toEqual(expectedAction);
  });
});
