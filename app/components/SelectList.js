import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Spacing } from '../styles';
import esCL from '../i18n/es-CL';
import { withNavigation } from 'react-navigation';
import SelectorWithIcon from './SelectorWithIcon';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: Spacing.small,
  },
});

function SelectList({ navigation }) {
  const onPress = navigation.getParam('onPress');
  const options = navigation.getParam('options');
  const currentValue = navigation.getParam('currentValue');



  const selectorList = options.map(item => {
    return (
      <SelectorWithIcon
        label={item.label}
        element={null}
        icon={"Seleccionado"}
        showIcon={currentValue === item.value}
        key={item.value}
        onPress={() => {
          onPress(item.label, item.value);
          navigation.goBack();
        }}
      />
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {selectorList}
      </ScrollView>
    </View>
  );
}

export default withNavigation(SelectList);
