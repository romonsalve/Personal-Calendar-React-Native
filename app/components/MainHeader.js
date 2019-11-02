import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import es_CL from '../i18n/es-CL';
import { Dimensions, Platform, StatusBar } from 'react-native';
import { Spacing } from '../styles';
import { Header } from 'react-navigation-stack';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    height: 100,
    borderEndColor: 'black',
    borderBottomWidth: 1,
  },
  filterContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  filterText: {
    textAlign: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: Spacing.extraSmall,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
  },
});

function MainHeader({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text>Personal Calendar</Text>
        </View>
        <View style={styles.button}>
          <Button
            title={es_CL.commons.filters}
            onPress={() => navigation.navigate('Filters')}
          />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Todas tus citas Reservadas desde Hoy</Text>
      </View>
    </View>
  );
}

export default withNavigation(MainHeader);
