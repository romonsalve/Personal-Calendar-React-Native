import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Spacing } from '../styles';
import esCL from '../i18n/es-CL';
import { greyLight } from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Spacing.extraSmall,
    borderBottomWidth: 1,
    borderColor: greyLight,
  },
  label: {
    flex: 2,
    fontWeight: 'bold',
  },
  element: {
    flex: 3,
  },
  icon: {
    flex: 1,
    alignSelf: 'flex-end',
  },
});

export default function SelectorWithIcon(props) {
  const {label, element, icon, onPress, value = null, showIcon = true} = props;
  return (
    <TouchableOpacity style={{flex: 1}} onPress={() => onPress(value)}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.element}>{element}</Text>
        {showIcon ? icon : null}
      </View>
    </TouchableOpacity>
  );
}
