/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Broadcast from '../pages/broadcast';
import Watch from '../pages/watch';
import PageNotFound from '../pages/404page';

const Home = () => (
  <div>
    <h1>Welcome to TQL</h1>
    <p>This is a simple web application to broadcast and watch live streams.</p>
    <p>
      You can use this application to broadcast your own live stream or to watch
      other live streams.
    </p>
    <p>
      You can also use this application to watch live streams from other users.
    </p>
    <Link to="/broadcast">Broadcast | </Link>
    <Link to="/watch">Watch</Link>
  </div>
);
export default class Router extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/broadcast" element={<Broadcast />} />
        <Route exact path="/watch" element={<Watch />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }
}
