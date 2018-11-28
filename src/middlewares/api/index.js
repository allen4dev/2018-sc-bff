import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// eslint-disable-next-line
const apiMiddleware = ({ getState, dispatch }) => next => async action => {
  if (action.type !== actionTypes.API_REQUEST) return next(action);

  const { success } = action.payload;
  const { clientMethod, details = {} } = action.meta;

  const token = getState().auth.token || null;

  const response = await client[clientMethod](...details, token);

  dispatch(success(response));
};

export default apiMiddleware;
