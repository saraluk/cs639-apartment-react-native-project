import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout.js";
import { Ionicons } from "@expo/vector-icons";

export default class AmenitiesList extends Component {
  state = {
    amenities: this.props.amenitiesList
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.amenities.map(amenity => (
          <View style={styles.rowContainer}>
            <View style={styles.leftContainer}>
              <Ionicons style={styles.icon} name='md-arrow-dropright' />
              <Text style={styles.text}>{amenity}</Text>
            </View>
            <View style={styles.middleContainer}></View>
            <View style={styles.rightContainer}>
              <Text style={styles.text}></Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: deviceWidth / 20
  },
  rowContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row"
    // borderColor: "black",
    // borderWidth: 1
  },
  middleContainer: {
    flex: 0.2
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row"
    // borderColor: "black",
    // borderWidth: 1
  },
  icon: {
    fontSize: 0.4 * (deviceHeight / 20),
    marginRight: 5
  },
  text: {
    fontSize: 0.35 * (deviceHeight / 20),
    color: "#000000"
  }
});
