import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";

const savedList = require("../util/SavedList.json");

export default class SaveButton extends Component {
  state = {
    onPressColor: "transparent",
    isSaved: true,
    savedList: savedList.savedApartment,
  };

  handleButtonOnPress = () => {
    let toggle = this.state.isSaved;
    this.setState({
      isSaved: !toggle,
    });
    if (toggle) {
      this.setState({
        onPressColor: "#ffffff",
      });
      //need to fix
      this.state.savedList.push(this.props.apartmentObject);
      console.log(this.state.savedList);
    } else {
      this.setState({
        onPressColor: "transparent",
      });
    }
  };

  render() {
    return (
      <TouchableHighlight
        onPress={this.handleButtonOnPress}
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
            backgroundColor: this.state.onPressColor,
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
