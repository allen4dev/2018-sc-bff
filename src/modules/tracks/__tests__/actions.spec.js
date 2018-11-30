import { API_REQUEST } from 'middlewares/api/actionTypes';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import fixtures from './fixtures';

describe('tracks action creators', () => {
  describe('action creators', () => {
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

    it('should create an action to actualize a track', () => {
      const track = fixtures.getTrack();

      const updatedFields = {
        title: 'new title',
      };

      const updatedTrack = {
        ...track,
        ...updatedFields,
      };

      const response = fixtures.getTrackResponse(updatedTrack);

      const expectedAction = {
        type: actionTypes.ACTUALIZE_TRACK,
        payload: {
          id: track.id,
          updated: {
            ...updatedTrack,
          },
        },
      };

      expect(actions.actualizeTrack(response)).toEqual(expectedAction);
    });

    it('should create an action to remove a track', () => {
      const track = fixtures.getTrack();

      const details = {
        id: track.id,
      };

      const expectedAction = {
        type: actionTypes.REMOVE_TRACK,
        payload: details,
      };

      expect(actions.removeTrack(undefined, details)).toEqual(expectedAction);
    });
  });

  describe('api/API_REQUEST action creators', () => {
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
          details: { id: track.id },
          clientMethod: 'getTrack',
        },
      };

      expect(actions.fetchTrack(track.id)).toEqual(expectedAction);
    });

    it('should create an api/API_REQUEST action to update a track', () => {
      const track = fixtures.getTrack();

      const updatedFields = {
        title: 'Updated title',
      };

      const expectedAction = {
        type: API_REQUEST,
        payload: {
          success: actions.actualizeTrack,
        },
        meta: {
          details: { id: track.id, updatedFields },
          clientMethod: 'updateTrack',
        },
      };

      expect(actions.updateTrack(track.id, updatedFields)).toEqual(
        expectedAction,
      );
    });

    it('should create an api/API_REQUEST action to publish a track', () => {
      const track = fixtures.getTrack();

      const expectedAction = {
        type: API_REQUEST,
        payload: {
          success: actions.actualizeTrack,
        },
        meta: {
          details: { id: track.id },
          clientMethod: 'publishTrack',
        },
      };

      expect(actions.publishTrack(track.id)).toEqual(expectedAction);
    });

    it('should create an api/API_REQUEST action to delete a track', () => {
      const track = fixtures.getTrack();

      const expectedAction = {
        type: API_REQUEST,
        payload: { success: actions.removeTrack },
        meta: {
          details: { id: track.id },
          clientMethod: 'deleteTrack',
        },
      };

      expect(actions.deleteTrack(track.id)).toEqual(expectedAction);
    });
  });
});
