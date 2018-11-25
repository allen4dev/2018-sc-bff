import * as actions from '../actions';
import reducer from '../reducer';
// import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import entitiesReducer from '../reducer/entities';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities', () => {
  const ENTITIES_STATE = INITIAL_STATE.entities;

  it('should handlean ADD_TRACK action', () => {
    const response = {
      data: {
        type: 'tracks',
        id: '1',
        attributes: {
          title: 'Some track name',
        },
      },
    };

    const nextState = entitiesReducer(
      ENTITIES_STATE,
      actions.addTrack(response),
    );

    expect(nextState).toEqual({
      ...ENTITIES_STATE,
      [response.data.id]: { ...response.data.attributes, id: response.data.id },
    });

    const newResponse = {
      data: {
        type: 'tracks',
        id: '2',
        attributes: {
          title: 'Some track name 2',
        },
      },
    };

    const newState = entitiesReducer(nextState, actions.addTrack(newResponse));

    expect(newState).toEqual({
      ...nextState,
      [newResponse.data.id]: {
        ...newResponse.data.attributes,
        id: newResponse.data.id,
      },
    });
  });
});
