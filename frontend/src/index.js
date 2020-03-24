import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom'

import reducer from './redux/reducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const middleware = compose(applyMiddleware(thunk.withExtraArgument('http://192.168.0.27:3001')),)

const store = createStore(reducer, middleware)

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
