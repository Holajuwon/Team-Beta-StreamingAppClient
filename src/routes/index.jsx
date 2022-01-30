/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Broadcast from '../pages/broadcast';
import Watch from '../pages/watch';
import PageNotFound from '../pages/404page';

export default class Router extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Watch />} />
        <Route exact path="/broadcast" element={<Broadcast />} />
        <Route exact path="/watch" element={<Watch />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }
}
