import React from 'react';
import { Text, View } from 'react-native';

export default function BookingScreen({ status }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{status}</Text>
    </View>
  );
}
