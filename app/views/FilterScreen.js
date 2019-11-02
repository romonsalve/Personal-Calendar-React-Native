import React, { Component } from 'react';
import { Modal, View, Text } from 'react-native';


export default function FilterScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Modal
        onRequestClose={() => {}}
        visible={false}
      >
        <Text> OMG soy un modal </Text>
      </Modal>
    </View>
  );
}