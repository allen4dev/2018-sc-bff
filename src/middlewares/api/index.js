import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// eslint-disable-next-line
const apiMiddleware = ({ dispatch }) => next => async action => {
  if (action.type !== actionTypes.API_REQUEST) return next(action);

  const { success } = action.payload;
  const { clientMethod, details = {} } = action.meta;

  const response = await client[clientMethod](details);

  dispatch(success(response));
};

export default apiMiddleware;
