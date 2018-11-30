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
};
