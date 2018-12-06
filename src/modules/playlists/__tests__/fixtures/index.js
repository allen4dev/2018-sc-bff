import uuid from 'uuid';

export default {
  getPlaylist() {
    return { id: uuid(), title: 'Playlist name' };
  },

  getPlaylistResponse(playlist, user = null) {
    return {
      data: {
        type: 'playlists',
        id: playlist.id,
        attributes: { title: playlist.title },
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
