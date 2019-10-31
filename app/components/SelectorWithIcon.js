import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Spacing } from '../styles';
import esCL from '../i18n/es-CL';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: Spacing.small,
    padding: Spacing.small,
  },
  label: {
    flex: 1,
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
  const iconComponent = showIcon ? <Text styles={styles.icon}>{icon}</Text> : null;
  return (
    <TouchableOpacity style={{flex: 1}} onPress={() => onPress(value)}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.element}>{element}</Text>
        {iconComponent}
      </View>
    </TouchableOpacity>
  );
}
