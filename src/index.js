import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'
import {initialReducer} from './redux/reducers/initialReducer'
import {BrowserRouter as Router} from 'react-router-dom'

const store = createStore(initialReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
<>
   <Provider store={store}>
      <Router>
        <App />
      </Router>
   </Provider>
</>
  ,
  document.getElementById('root')
);

