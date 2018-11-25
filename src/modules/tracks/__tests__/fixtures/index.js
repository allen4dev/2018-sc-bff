import uuid from 'uuid';

export default {
  getTrack() {
    return { id: uuid(), title: 'Track name' };
  },

  getTrackResponse(track, user = null) {
    return {
      data: {
        type: 'tracks',
        id: track.id,
        attributes: { title: track.title },
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
