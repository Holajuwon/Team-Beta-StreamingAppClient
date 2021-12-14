import React, { Component } from 'react';
import watch from './watch';

export default class Watch extends Component {
  componentDidMount() {
    watch();
  }

  render() {
    return (
      <div id="videoDiv">
        <video playsInline autoPlay muted id="watchVideo" />
      </div>
    );
  }
}
