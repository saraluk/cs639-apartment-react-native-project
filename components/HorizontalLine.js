import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { deviceHeight } from "../constants/Layout";

export default class HorizontalLine extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 0.05 * (deviceHeight / 20),
    backgroundColor: "#ef4923",
    marginTop: 0.2 * (deviceHeight / 20),
    marginBottom: 0.35 * (deviceHeight / 20)
  }
});
