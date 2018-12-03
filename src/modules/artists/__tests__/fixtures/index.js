import uuid from 'uuid';

export default {
  getUser() {
    return {
      id: uuid(),
      email: 'allen@example.test',
      username: 'allen',
    };
  },

  getUserResponse(user) {
    return {
      data: {
        type: 'users',
        id: user.id,
        attributes: { username: user.username, email: user.email },
      },
    };
  },
};
