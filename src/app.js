import React, { Component } from 'react';
import allReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './components/counter';

// We are optimistic here while importing allReducers from reducers folder.
// createStore function takes in our allReducers object and creates our Store.

const store = createStore(allReducers);

export default class App extends Component{
  render(){
    return(

        // Provider component makes the store available throughout our App.
        <Provider store= {store}>
            <Counter />
        </Provider>
    );
  }
}