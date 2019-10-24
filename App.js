import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationMenu from './app/components/NavigationMenu';
import { Spacing } from './app/styles';

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
    <View style={styles.container}>
      <View style={styles.topMenu} />
      <View style={styles.body} />
      <NavigationMenu style={styles.navigationMenu} />
    </View>
  );
}
