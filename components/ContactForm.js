import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import { TextInput } from "react-native-gesture-handler";

export default class ContactForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  newState = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.textInputHalf}
            onChangeText={(firstName) => this.setState({ firstName })}
            value={this.state.firstName}
            placeholder='First Name'
          />
          <TextInput
            style={styles.textInputHalf}
            onChangeText={(lastName) => this.setState({ lastName })}
            value={this.state.lastName}
            placeholder='Last Name'
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.textInputHalf}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            placeholder='Email Address'
          />
          <TextInput
            style={styles.textInputHalf}
            onChangeText={(phone) => this.setState({ phone })}
            value={this.state.phone}
            placeholder='Phone Number'
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.textInputFull}
            multiline={true}
            onChangeText={(message) => this.setState({ message })}
            value={this.state.message}
            placeholder='Messages...'
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              underlayColor='transparent'
              style={styles.button}
              onPress={() => {
                alert(this.state.firstName + ", your message has been sent!");
              }}
            >
              <View>
                <Text style={styles.buttonText}>Send</Text>
              </View>
            </TouchableHighlight>
            <View style={styles.space}></View>
            <TouchableHighlight
              underlayColor='transparent'
              style={styles.button}
            >
              <View>
                <Text style={styles.buttonText} onPress={this.newState}>
                  Reset
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0.5 * (deviceWidth / 20),
    paddingRight: 2 * (deviceWidth / 20),
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 0.2 * (deviceHeight / 20),
  },
  textInputHalf: {
    height: 0.8 * (deviceHeight / 20),
    width: 8 * (deviceWidth / 20),
    textAlign: "left",
    borderColor: "#dddddd",
    borderWidth: 1,
    backgroundColor: "#eaeaea",
    marginRight: 0.5 * (deviceWidth / 20),
    padding: 4,
  },
  textInputFull: {
    height: 3 * (deviceHeight / 20),
    width: 16.5 * (deviceWidth / 20),
    textAlign: "left",
    borderColor: "#dddddd",
    borderWidth: 1,
    backgroundColor: "#eaeaea",
    marginRight: 0.5 * (deviceWidth / 20),
    padding: 4,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    height: 0.7 * (deviceHeight / 20),
    width: 4 * (deviceWidth / 20),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a2e49",
  },
  buttonText: {
    color: "#ffffff",
  },
  space: {
    width: 0.3 * (deviceWidth / 20),
  },
});
