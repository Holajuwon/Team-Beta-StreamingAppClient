/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Broadcast from '../pages/broadcast';
import PageNotFound from '../pages/404page';

export default class Router extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/broadcast" element={<Broadcast />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }
}
