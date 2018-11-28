import uuid from 'uuid';

export default {
  getReply() {
    return { id: uuid(), body: 'Reply body' };
  },

  getReplyResponse(reply, user = null, track = null) {
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
          track: {
            data: {
              type: 'tracks',
              id: track ? track.data.id : uuid(),
            },
          },
        },
      },
    };
  },

  getRepliesResponse() {
    const reply1 = this.getReply();
    const reply2 = this.getReply();

    return {
      data: [
        { type: 'replies', id: reply1.id, attributes: { body: reply1.body } },
        { type: 'replies', id: reply2.id, attributes: { body: reply2.body } },
      ],
    };
  },
};
