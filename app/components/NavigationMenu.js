import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import NavigationMenuItem from './NavigationMenuItem';

const reservedIcon = require('../assets/icon.png');
const confirmedIcon = require('../assets/icon.png');
const asistsIcon = require('../assets/icon.png');
const noAsistsIcon = require('../assets/icon.png');
const waitingIcon = require('../assets/icon.png');
const pendingIcon = require('../assets/icon.png');


const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default class NavigationMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedId: 'reserved'
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(selectedId) {
    this.setState({selectedId});
    console.log(selectedId);
  }

  render() {
    const { style } = this.props;
    const { selectedId } = this.state;
    const container = { ...styles.container, ...style };
    return (
      <View style={container}>
        <NavigationMenuItem
          text="reserved"
          imageSource={reservedIcon}
          id="reserved"
          selectedId={selectedId}
          buttonHandler={this.buttonHandler}
        />
        <NavigationMenuItem
          text="confirmed"
          imageSource={confirmedIcon}
          id="confirmed"
          selectedId={selectedId}
          buttonHandler={this.buttonHandler}
        />
        <NavigationMenuItem
          text="asists"
          imageSource={asistsIcon}
          id="asists"
          selectedId={selectedId}
          buttonHandler={this.buttonHandler}
        />
        <NavigationMenuItem
          text="noAsists"
          imageSource={noAsistsIcon}
          id="noAsists"
          selectedId={selectedId}
          buttonHandler={this.buttonHandler}
        />
        <NavigationMenuItem
          text="waiting"
          imageSource={waitingIcon}
          id="waiting"
          selectedId={selectedId}
          buttonHandler={this.buttonHandler}
        />
        <NavigationMenuItem
          text="pending"
          imageSource={pendingIcon}
          id="pending"
          selectedId={selectedId}
          buttonHandler={this.buttonHandler}
        />
      </View>
    );
  }
}
