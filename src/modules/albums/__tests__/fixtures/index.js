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

  getAlbumsResponse() {
    const album1 = this.getAlbum();
    const album2 = this.getAlbum();

    return {
      data: [
        {
          type: 'albums',
          id: album1.id,
          attributes: { title: album1.title, published: true },
        },
        {
          type: 'albums',
          id: album2.id,
          attributes: { title: album2.title, published: true },
        },
      ],
    };
  },
};
