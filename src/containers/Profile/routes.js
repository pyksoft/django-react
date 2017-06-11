import React from 'react';
import {Route} from 'react-router';
import Profile from "./";
import About from "./About";
import Posts from "./Posts";


export default (
    <Route path="/profile" component={Profile}>
        <Route path="about" component={About} />
        <Route path="posts" component={Posts} />
    </Route>
);
