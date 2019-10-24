import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableWithoutFeedback,
} from 'react-native';
import { Images, Spacing } from '../styles';

const styles = StyleSheet.create({
  icon: {
    ...Images.icon,
    marginBottom: Spacing.extraSmall,
  },
  selected: {
    alignItems: 'center',
    backgroundColor: '#9FA8DA',
  },
  noSelected: {
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default function NavigationMenuItem({ imageSource, text, id, buttonHandler, selectedId }) {
  console.log(selectedId === id);
  return (
    <TouchableWithoutFeedback onPress={() => buttonHandler(id)}>
      <View style={selectedId === id ? styles.selected : styles.noSelected}>
        <Image style={styles.icon} source={imageSource} />
        <Text>{text}</Text>
      </View>
      
    </TouchableWithoutFeedback>
  );
}
