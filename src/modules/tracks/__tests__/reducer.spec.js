import * as actions from '../actions';
import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import entitiesReducer from '../reducer/entities';

import fixtures from './fixtures';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities', () => {
  const ENTITIES_STATE = INITIAL_STATE.entities;

  it('should handle an ADD_TRACK action', () => {
    const track = fixtures.getTrack();

    const response = fixtures.getTrackResponse(track);

    const nextState = entitiesReducer(
      ENTITIES_STATE,
      actions.addTrack(response),
    );

    expect(nextState).toEqual({
      ...ENTITIES_STATE,
      [response.data.id]: track,
    });

    const otherTrack = fixtures.getTrack();

    const newResponse = fixtures.getTrackResponse(otherTrack);

    const newState = entitiesReducer(nextState, actions.addTrack(newResponse));

    expect(newState).toEqual({
      ...nextState,
      [newResponse.data.id]: otherTrack,
    });
  });

  it('should handle an ACTUALIZE_TRACK action', () => {
    const track = fixtures.getTrack();

    const details = {
      title: 'Updated track title',
    };

    const STATE = {
      [track.id]: { ...track },
    };

    const nextState = entitiesReducer(
      STATE,
      actions.actualizeTrack(track.id, details),
    );

    expect(nextState).toEqual({
      ...STATE,
      [track.id]: {
        ...track,
        title: details.title,
      },
    });
  });
});
