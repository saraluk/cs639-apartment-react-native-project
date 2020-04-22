import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";

export default class SaveButton extends Component {
  componentDidUpdate(prevProp) {
    if (this.props.isSaved !== prevProp.isSaved) {
      console.log("SaveButton componentDidUpdate is called");
    }
  }

  render() {
    const { handleToggle, isSaved } = this.props;
    return (
      <TouchableHighlight
        onPress={handleToggle}
        underlayColor='transparent'
        style={styles.container}
      >
        <View
          style={{
            height: 0.7 * (deviceHeight / 20),
            width: 4 * (deviceWidth / 20),
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 50,
            borderColor: "#ef4923",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isSaved ? "#ef4923" : "transparent",
          }}
        >
          <Ionicons style={styles.icon} name='ios-bookmark' />
          <Text>Save</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 0.7 * (deviceHeight / 20),
    width: 4 * (deviceWidth / 20),
    borderColor: "#ef4923",
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 0.5 * (deviceHeight / 20),
    marginRight: 5,
  },
});
