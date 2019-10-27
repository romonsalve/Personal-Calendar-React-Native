import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { SafeAreaView } from 'react-native';
import rootReducer from './app/reducers/reducers';
import AppContainer from './app/navigation/navigation';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
}
