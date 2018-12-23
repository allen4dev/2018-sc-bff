import axios from 'axios';

class Client {
  constructor(options) {
    this.options = options || {
      endpoints: {
        tracks: 'https://sc.com/api/tracks',
        playlists: 'https://sc.com/api/playlists',
        albums: 'https://sc.com/api/albums',
        replies: 'https://sc.com/api/replies',
        users: 'https://sc.com/api/users',
        tags: 'https://sc.com/api/tags',
        auth: 'https://sc.com/api/auth',
      },
    };
  }

  register(details) {
    return axios
      .post(`${this.options.endpoints.auth}/register`, details)
      .then(response => response.data);
  }

  login(credentials) {
    return axios
      .post(`${this.options.endpoints.auth}/login`, credentials)
      .then(response => response.data);
  }

  createTrack(details, token) {
    return axios
      .post(`${this.options.endpoints.tracks}/`, details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.data);
  }

  updateTrack(id, newFields, token) {
    return axios
      .patch(`${this.options.endpoints.tracks}/${id}`, newFields, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.data);
  }

  publishTrack(id, token) {
    return axios
      .patch(`${this.options.endpoints.tracks}/${id}/publish`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.data);
  }

  getTrack(id) {
    return axios
      .get(`${this.options.endpoints.tracks}/${id}?include=user`)
      .then(response => response.data);
  }

  replyTrack(id, details, token) {
    return axios
      .post(`${this.options.endpoints.tracks}/${id}/replies`, details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.data);
  }

  getReply(id) {
    return axios
      .get(`${this.options.endpoints.replies}/${id}`)
      .then(response => response.data);
  }

  favoriteTrack(id, token) {
    return axios
      .post(`${this.options.endpoints.tracks}/${id}/favorite`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.data);
  }

  unfavoriteTrack(id, token) {
    return axios
      .delete(`${this.options.endpoints.tracks}/${id}/unfavorite`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.data);
  }

  shareTrack(id, token) {
    return axios
      .post(`${this.options.endpoints.tracks}/${id}/share`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.data);
  }

  deleteTrack(id, token) {
    return axios
      .delete(`${this.options.endpoints.tracks}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  createPlaylist(details, token) {
    return axios
      .post(`${this.options.endpoints.playlists}/`, details, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  getPlaylist(id) {
    return axios
      .get(`${this.options.endpoints.playlists}/${id}`)
      .then(response => response.data);
  }

  updatePlaylist(id, details, token) {
    return axios
      .patch(`${this.options.endpoints.playlists}/${id}`, details, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  deletePlaylist(id, token) {
    return axios
      .delete(`${this.options.endpoints.playlists}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  favoritePlaylist(id, token) {
    return axios
      .post(`${this.options.endpoints.playlists}/${id}/favorite`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  unfavoritePlaylist(id, token) {
    return axios
      .delete(`${this.options.endpoints.playlists}/${id}/unfavorite`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  addTrackToPlaylist(id, trackId, token) {
    return axios
      .post(`${this.options.endpoints.playlists}/${id}/tracks/${trackId}/add`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  removeTrackFromPlaylist(id, trackId, token) {
    return axios
      .delete(
        `${this.options.endpoints.playlists}/${id}/tracks/${trackId}/remove`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      .then(response => response.data);
  }

  sharePlaylist(id, token) {
    return axios
      .post(`${this.options.endpoints.playlists}/${id}/share`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  createAlbum(details, token) {
    return axios
      .post(`${this.options.endpoints.albums}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  getAlbum(id) {
    return axios
      .get(`${this.options.endpoints.albums}/${id}`)
      .then(response => response.data);
  }

  updateAlbum(id, details, token) {
    return axios
      .patch(`${this.options.endpoints.albums}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  publishAlbum(id, token) {
    return axios
      .patch(`${this.options.endpoints.albums}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  deleteAlbum(id, token) {
    return axios
      .delete(`${this.options.endpoints.albums}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  favoriteAlbum(id, token) {
    return axios
      .post(`${this.options.endpoints.albums}/${id}/favorite`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  shareAlbum(id, token) {
    return axios
      .post(`${this.options.endpoints.albums}/${id}/share`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  getUser(id) {
    return axios
      .get(`${this.options.endpoints.users}/${id}`)
      .then(response => response.data);
  }

  getUserTracks(id) {
    return axios
      .get(`${this.options.endpoints.users}/${id}/tracks`)
      .then(response => response.data);
  }

  getUserPlaylists(id) {
    return axios
      .get(`${this.options.endpoints.users}/${id}/playlists`)
      .then(response => response.data);
  }

  getUserAlbums(id) {
    return axios
      .get(`${this.options.endpoints.users}/${id}/albums`)
      .then(response => response.data);
  }

  followUser(id, token) {
    return axios
      .post(`${this.options.endpoints.users}/${id}/follow`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  unfollowUser(id, token) {
    return axios
      .delete(`${this.options.endpoints.users}/${id}/unfollow`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  getUserFollowers(id) {
    return axios
      .get(`${this.options.endpoints.users}/${id}/followers`)
      .then(response => response.data);
  }

  getUsersFollowing(id) {
    return axios
      .get(`${this.options.endpoints.users}/${id}/following`)
      .then(response => response.data);
  }

  deleteProfile(id, token) {
    return axios
      .delete(`${this.options.endpoints.users}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  getTags() {
    return axios
      .get(`${this.options.endpoints.tags}/`)
      .then(response => response.data);
  }

  getTagTracks(id) {
    return axios
      .get(`${this.options.endpoints.tags}/${id}/tracks`)
      .then(response => response.data);
  }

  getTagAlbums(id) {
    return axios
      .get(`${this.options.endpoints.tags}/${id}/albums`)
      .then(response => response.data);
  }

  getTagPlaylists(id) {
    return axios
      .get(`${this.options.endpoints.tags}/${id}/playlists`)
      .then(response => response.data);
  }

  getProfile(token) {
    return axios
      .get(`${this.options.endpoints.me}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  updateProfile(details, token) {
    return axios
      .patch(`${this.options.endpoints.me}/`, details, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  getProfileTracks(token) {
    return axios
      .get(`${this.options.endpoints.me}/tracks`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  getProfileAlbums(token) {
    return axios
      .get(`${this.options.endpoints.me}/albums`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  getProfilePlaylists(token) {
    return axios
      .get(`${this.options.endpoints.me}/playlists`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  getProfileFollowers(token) {
    return axios
      .get(`${this.options.endpoints.me}/followers`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  getProfileFollowings(token) {
    return axios
      .get(`${this.options.endpoints.me}/followings`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }
}

export default Client;
