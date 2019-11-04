import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import SelectorWithIcon from './SelectorWithIcon';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function SelectList({ navigation }) {
  const onPress = navigation.getParam('onPress');
  const options = navigation.getParam('options');
  const currentValue = navigation.getParam('currentValue');

  const selectorList = options.map((item) => (
    <SelectorWithIcon
      label={item.label}
      element={null}
      icon={<Ionicons name="md-checkmark" size={24} color="green" />}
      showIcon={currentValue === item.value}
      key={item.value}
      onPress={() => {
        onPress(item.label, item.value);
        navigation.goBack();
      }}
    />
  ));

  return (
    <View style={styles.container}>
      <ScrollView>
        {selectorList}
      </ScrollView>
    </View>
  );
}

export default withNavigation(SelectList);
