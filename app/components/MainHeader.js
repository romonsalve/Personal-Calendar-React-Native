import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { Platform, StatusBar } from 'react-native';
import es_CL from '../i18n/es-CL';
import { Spacing } from '../styles';
import { showFilters } from '../actions/filters_actions'
import FilterModalContainer from '../views/FilterModal';

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

function MainHeader({ navigation, visibleMainHeader, handleFilterPress }) {
  if (!visibleMainHeader) return null;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text>Personal Calendar</Text>
        </View>
        <View style={styles.button}>
          <Button
            title={es_CL.commons.filters}
            onPress={handleFilterPress}
          />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Todas tus citas Reservadas desde Hoy</Text>
      </View>
      <FilterModalContainer />
    </View>
  );
}

function mapStateToProps({ visibleMainHeader }) {
  return { visibleMainHeader };
}

function mapDispatchToProps(dispatch) {
  return {
    handleFilterPress: () => { dispatch(showFilters()); },
  };
}

const MainHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainHeader);

export default withNavigation(MainHeaderContainer);
