import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout.js";
import { Ionicons } from "@expo/vector-icons";

export default class AmenitiesList extends Component {
  render() {
    let newArr = [...this.props.apartmentObject.amenities];
    let rightArr = newArr;
    let leftArr = newArr.splice(0, Math.ceil(newArr.length / 2));

    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            {leftArr.map((amenity, index) => (
              <View key={index} style={styles.list}>
                <Ionicons style={styles.icon} name='md-arrow-dropright' />
                <Text style={styles.text}>{amenity}</Text>
              </View>
            ))}
          </View>
          <View style={styles.middleContainer}></View>
          <View style={styles.rightContainer}>
            {rightArr.map((amenity, index) => (
              <View key={index} style={styles.list}>
                <Ionicons style={styles.icon} name='md-arrow-dropright' />
                <Text style={styles.text}>{amenity}</Text>
              </View>
            ))}
          </View>
        </View>
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
    flex: 1
  },
  middleContainer: {
    flex: 0.2
  },
  rightContainer: {
    flex: 1
  },
  list: {
    flexDirection: "row"
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
