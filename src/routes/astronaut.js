import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Show } from '../components/astronaut/';

export default [
    <Route path="/create" component={Create} exact key="create" />,
    <Route path="/show/:id" component={Show} exact key="show" />,
    <Route path="/" component={List} exact strict key="list" />
];