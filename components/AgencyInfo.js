import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";

export default class AgencyInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image
            style={styles.photo}
            source={{
              uri: "https://codehs.com/uploads/3fb254527bfe2f367b433f75a741e2b1"
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.infoText}>
              {this.props.apartmentObject.agentName}
            </Text>
            <Text style={styles.infoText}>
              {this.props.apartmentObject.agentPhoneNumber}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "row"
  },
  photo: {
    height: 1.2 * (deviceHeight / 20),
    width: 1.2 * (deviceHeight / 20),
    borderRadius: 100,
    marginRight: 0.5 * (deviceWidth / 20)
  },
  textContainer: {
    height: 1.2 * (deviceHeight / 20),
    justifyContent: "center"
  },
  infoText: {
    fontSize: 0.35 * (deviceHeight / 20)
  }
});
