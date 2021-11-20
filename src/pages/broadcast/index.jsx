import React, { Component } from 'react';
import broadcast from './broadcast';

export default class Broadcast extends Component {
  componentDidMount() {
    broadcast();
  }

  render() {
    return (
      <div id="videoDiv">
        <video playsInline autoPlay muted id="broadcastVideo" />
      </div>
    );
  }
}
