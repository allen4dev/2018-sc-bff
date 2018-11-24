import * as actionTypes from './actionTypes';

const apiMiddleware = ({ dispatch }) => next => async action => {
  if (action.type !== actionTypes.API_REQUEST) return next(action);

  const { success } = action.payload;
  const { clientMethod } = action.meta;

  const response = await clientMethod();

  dispatch(success(response));
};

export default apiMiddleware;
