import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

import { deviceHeight, deviceWidth } from "../constants/Layout";

export default class LocationCard extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={this.props.onPress}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 3.5 * (deviceHeight / 20),
    width: 8 * (deviceWidth / 20),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dddddd",
    marginHorizontal: (0.7 * deviceWidth) / 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 0.5 * (deviceHeight / 20),
    color: "#ef4923",
    fontWeight: "bold",
    textAlign: "center"
  }
});
