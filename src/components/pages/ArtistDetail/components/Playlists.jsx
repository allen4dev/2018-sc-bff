import React, { Component } from 'react';

import Sets from 'modules/playlists/components/Sets';

const playlistIds = new Array(10).fill('');

class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Sets ids={playlistIds} />;
  }
}

export default Playlists;
