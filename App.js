import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import calendarApp from './app/reducers/reducers';
import AppContainer from './app/navigation/navigation';

const store = createStore(calendarApp);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
