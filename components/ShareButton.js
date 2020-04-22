import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";

export default class ShareButton extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}>
          <Ionicons style={styles.icon} name='ios-share' />
          <Text>Share</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 0.7 * (deviceHeight / 20),
    width: 4 * (deviceWidth / 20),
    borderColor: "#ef4923",
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    fontSize: 0.5 * (deviceHeight / 20),
    marginRight: 5
  }
});
