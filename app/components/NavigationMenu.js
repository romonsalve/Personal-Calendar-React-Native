import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import NavigationMenuItem from './NavigationMenuItem';
import * as Status from '../constants/status';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
});

const menuOrder = [
  Status.RESERVED,
  Status.CONFIRMED,
  Status.ASSISTED,
  Status.DIDNT_ASSIST,
  Status.PENDING,
  Status.WAITING,
];


export default function NavigationMenu({ selectedStatus, handleItemPress }) {
  const menuItems = menuOrder.map((status) => (
    <NavigationMenuItem
      text={Status.STATUS_TEXT[status]}
      status={status}
      icon={Status.STATUS_ICON[status]}
      selectedStatus={selectedStatus}
      handlePress={handleItemPress}
      key={status}
    />
  ));

  return (
    <View style={styles.container}>
      {menuItems}
    </View>
  );
}

NavigationMenu.propTypes = {
  selectedStatus: PropTypes.number.isRequired,
  handleItemPress: PropTypes.func.isRequired,

};
