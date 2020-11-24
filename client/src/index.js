import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago'
 
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'
 
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

import App from './app';

import 'normalize.css/normalize.css';
import './sass/main.scss';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
