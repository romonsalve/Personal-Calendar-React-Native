import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function BookingDetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>{navigation.getParam('booking', {}).id}</Text>
    </View>
  );
}
