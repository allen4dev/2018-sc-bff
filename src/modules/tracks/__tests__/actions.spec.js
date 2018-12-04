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

    it('should create an action to add a list of tracks', () => {
      const response = fixtures.getTracksResponse();

      const track1 = {
        ...response.data[0].attributes,
        id: response.data[0].id,
      };
      const track2 = {
        ...response.data[1].attributes,
        id: response.data[1].id,
      };

      const expectedAction = {
        type: actionTypes.ADD_TRACKS,
        payload: {
          tracks: { [track1.id]: track1, [track2.id]: track2 },
          ids: [track1.id, track2.id],
        },
      };

      expect(actions.addTracks(response)).toEqual(expectedAction);
    });
  });
});
