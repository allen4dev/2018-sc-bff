import { createAction } from 'redux-actions';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// action creators
export const addUser = createAction(
  actionTypes.ADD_USER,
  ({ data: { id, attributes } }) => ({
    id,
    user: { ...attributes, id },
  }),
);

export const addFollowedUser = createAction(
  actionTypes.ADD_FOLLOWED_USER,
  (id, followed) => ({
    id,
    followed,
  }),
);

export const removeFollowedUser = createAction(
  actionTypes.REMOVE_FOLLOWED_USER,
  (id, unfollowed) => ({
    id,
    unfollowed,
  }),
);

export const addUserTracks = createAction(
  actionTypes.ADD_USER_TRACKS,
  ({ data }, id) => ({ tracks: data, id }),
);

export const addUserPlaylists = createAction(
  actionTypes.ADD_USER_PLAYLISTS,
  ({ data }, id) => ({ playlists: data, id }),
);

export const addUserAlbums = createAction(
  actionTypes.ADD_USER_ALBUMS,
  ({ data }, id) => ({ albums: data, id }),
);

export const addUserFollowers = createAction(
  actionTypes.ADD_USER_FOLLOWERS,
  ({ data }, id) => ({ users: data, id }),
);

export const addUserFollowings = createAction(
  actionTypes.ADD_USER_FOLLOWINGS,
  ({ data }, id) => ({ users: data, id }),
);

// async actions
export function fetchUser(id) {
  return async dispatch => {
    const response = await client.getUser(id);

    dispatch(addUser(response));
  };
}

export function fetchUserTracks(id) {
  return async dispatch => {
    const response = await client.getUserTracks(id);

    dispatch(addUserTracks(response, id));
  };
}

export function fetchUserPlaylists(id) {
  return async dispatch => {
    const response = await client.getUserPlaylists(id);

    dispatch(addUserPlaylists(response, id));
  };
}

export function fetchUserAlbums(id) {
  return async dispatch => {
    const response = await client.getUserAlbums(id);

    dispatch(addUserAlbums(response, id));
  };
}

export function followUser(id, followed) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    await client.followUser(followed, token);

    dispatch(addFollowedUser(id, followed));
  };
}

export function unfollowUser(id, unfollowed) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    await client.unfollowUser(unfollowed, token);

    dispatch(removeFollowedUser(id, unfollowed));
  };
}

export function fetchUserFollowers(id) {
  return async dispatch => {
    const response = await client.getUserFollowers(id);

    dispatch(addUserFollowers(response, id));
  };
}
