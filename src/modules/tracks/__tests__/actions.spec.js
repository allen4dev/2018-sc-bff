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

      const expectedAction = {
        type: actionTypes.REMOVE_TRACK,
        payload: { id: track.id },
      };

      expect(actions.removeTrack(track.id)).toEqual(expectedAction);
    });

    it('should create an action to add a list of tracks', () => {
      const response = fixtures.getTracksResponse();

      const expectedAction = {
        type: actionTypes.ADD_TRACKS,
        payload: {
          tracks: response.data,
        },
      };

      expect(actions.addTracks(response)).toEqual(expectedAction);
    });

    it('should create an action to favorite a track', () => {
      const track = fixtures.getTrack();

      const expectedAction = {
        type: actionTypes.FAVORITE_TRACK,
        payload: {
          id: track.id,
        },
      };

      expect(actions.favoriteTrack(track.id)).toEqual(expectedAction);
    });
  });
});
