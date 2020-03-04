import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { deviceHeight } from "../constants/Layout.js";

export default class SectionHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 0.5 * (deviceHeight / 20),
    fontWeight: "bold",
    color: "#4a6e99"
  }
});
