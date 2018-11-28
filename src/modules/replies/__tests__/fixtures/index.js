import uuid from 'uuid';

export default {
  getReply() {
    return { id: uuid(), body: 'Reply body' };
  },

  getReplyResponse(reply, user = null) {
    return {
      data: {
        type: 'replies',
        id: reply.id,
        attributes: { body: reply.body },
        relationships: {
          user: {
            data: {
              type: 'users',
              id: user ? user.data.id : uuid(),
            },
          },
        },
      },
    };
  },
};
