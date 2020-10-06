import React from 'react';

// Aula1 - 0:09:37
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import themeReducer from './redux/themeReducer';

import HomeScrren from './src/screens/HomeScreen';


// Aula1 - 0:10:31
const store = createStore( combineReducers({themeReducer}),
                           applyMiddleware(thunk) ); 

export default function App() {
  return (
    <Provider store={store}>
      < HomeScrren />
    </Provider>
  );
}
