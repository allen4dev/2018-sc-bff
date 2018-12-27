import uuid from 'uuid';

export default {
  getPlaylist() {
    return { id: uuid(), title: 'Playlist name' };
  },

  getPlaylistResponse(playlist, user = null) {
    const usr = user || {
      type: 'users',
      id: uuid(),
      attributes: { username: 'allen' },
    };

    return {
      data: {
        type: 'playlists',
        id: playlist.id,
        attributes: { title: playlist.title },
        relationships: {
          user: {
            data: {
              type: 'users',
              id: usr ? usr.id : uuid(),
            },
          },
        },
      },
      included: [{ ...usr }],
    };
  },

  getPlaylistsResponse() {
    const playlist1 = this.getPlaylist();
    const playlist2 = this.getPlaylist();

    return {
      data: [
        {
          type: 'playlists',
          id: playlist1.id,
          attributes: { title: playlist1.title },
        },
        {
          type: 'playlists',
          id: playlist2.id,
          attributes: { title: playlist2.title },
        },
      ],
    };
  },
};
