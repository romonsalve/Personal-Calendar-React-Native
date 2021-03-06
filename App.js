import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import moment from 'moment';
import rootReducer from './app/reducers/reducers';
import AppContainer from './app/navigation/navigation';

moment.locale('es');

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
