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

  getUsersResponse() {
    const user1 = this.getUser();
    const user2 = this.getUser();

    return {
      data: [
        {
          type: 'users',
          id: user1.id,
          attributes: { username: user1.username, email: user1.email },
        },
        {
          type: 'users',
          id: user2.id,
          attributes: { username: user2.username, email: user2.email },
        },
      ],
    };
  },
};
