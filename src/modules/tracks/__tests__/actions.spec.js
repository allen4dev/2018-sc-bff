import usersFixtures from 'modules/users/__tests__/fixtures';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import fixtures from './fixtures';

describe('tracks action creators', () => {
  describe('action creators', () => {
    it('should create an action to add a track', () => {
      const track = fixtures.getTrack();
      const rawUser = usersFixtures.getUser();
      const user = usersFixtures.getUserResponse(rawUser);

      const response = fixtures.getTrackResponse(track, user);

      const {
        data: { id, attributes, relationships },
        included,
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
          user: { ...rawUser },
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

    it('should create an action to add a favorited a track', () => {
      const track = fixtures.getTrack();
      const user = {
        id: '123',
      };

      const expectedAction = {
        type: actionTypes.ADD_FAVORITED_TRACK,
        payload: {
          id: track.id,
          userId: user.id,
        },
      };

      expect(actions.addFavoritedTrack(track.id, user.id)).toEqual(
        expectedAction,
      );
    });
  });
});
