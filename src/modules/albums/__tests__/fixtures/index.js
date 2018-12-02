import uuid from 'uuid';

export default {
  getAlbum() {
    return { id: uuid(), title: 'Album name', published: false };
  },

  getAlbumResponse(album, user = null) {
    return {
      data: {
        type: 'albums',
        id: album.id,
        attributes: { title: album.title, published: album.published },
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
