import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import calendarApp from './app/reducers/reducers';
import AppContainer from './app/navigation/navigation';

const store = createStore(calendarApp);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
}
