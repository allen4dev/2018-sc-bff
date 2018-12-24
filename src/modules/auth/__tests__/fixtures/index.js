import uuid from 'uuid';

export default {
  getToken() {
    return 'xxx.xxx.xxx';
  },

  getTokenResponse(token) {
    const id = uuid();

    return {
      data: {
        type: 'auth',
        id,
        attributes: {
          token,
        },
      },
    };
  },
};
