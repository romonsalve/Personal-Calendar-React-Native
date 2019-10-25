import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Spacing } from './app/styles';
import calendarApp from './app/reducers/reducers';
import NavigationMenuContainer from './app/components/NavigationMenuContainer';

const store = createStore(calendarApp);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Spacing.base
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 8,
  },
  navigationMenu: {
    flex: 1,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.topMenu} />
        <View style={styles.body} />
        <NavigationMenuContainer />
      </View>
    </Provider>
  );
}
