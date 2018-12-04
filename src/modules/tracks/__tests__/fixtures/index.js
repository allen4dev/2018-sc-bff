import uuid from 'uuid';

export default {
  getTrack() {
    return { id: uuid(), title: 'Track name', published: false };
  },

  getTrackResponse(track, user = null) {
    return {
      data: {
        type: 'tracks',
        id: track.id,
        attributes: { title: track.title, published: track.published },
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

  getTracksResponse() {
    const track1 = this.getTrack();
    const track2 = this.getTrack();

    return {
      data: [
        {
          type: 'tracks',
          id: track1.id,
          attributes: { title: track1.title, published: false },
        },
        {
          type: 'tracks',
          id: track2.id,
          attributes: { title: track2.title, published: false },
        },
      ],
    };
  },

  getTracksFromResponse(response) {
    return response.data.map(track => ({
      ...track.attributes,
      id: track.id,
    }));
  },
};
