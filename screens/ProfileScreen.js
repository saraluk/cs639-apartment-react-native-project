import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight, AsyncStorage, Image } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "https://codehs.com/uploads/3fb254527bfe2f367b433f75a741e2b1",
      name: "",
      username: "",
      email: "",
      phone: "",
      school: ""
    }
  };

  componentDidMount = () => {
    AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }));
    AsyncStorage.getItem('username').then((value) => this.setState({ 'username': value }));
    AsyncStorage.getItem('email').then((value) => this.setState({ 'email': value }));
    AsyncStorage.getItem('phone').then((value) => this.setState({ 'phone': value }));
    AsyncStorage.getItem('school').then((value) => this.setState({ 'school': value }));
    AsyncStorage.getItem('image').then((value) => this.setState({ 'image': value }));
  };

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.profilePhotoContainer}>
          <View style={styles.backgroundContainer}>
            <Image source={{ uri: this.state.image }} style={styles.photo}/>
          </View>
        </View>

        <View style={styles.profileInfoContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.sectionHeader}>Personal Information</Text>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("EditProfileScreen")}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Edit</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Name: </Text>
            <Text style={styles.info}>{this.state.name}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Username: </Text>
            <Text style={styles.info}>{this.state.username}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Email: </Text>
            <Text style={styles.info}>{this.state.email}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Phone: </Text>
            <Text style={styles.info}>{this.state.phone}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>School: </Text>
            <Text style={styles.info}>{this.state.school}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  profilePhotoContainer: {
    height: 6 * (deviceHeight / 20),
    width: deviceWidth
  },
  backgroundContainer: {
    flex: 0.6,
    backgroundColor: "#ef4923",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  photo: {
    marginTop: 1.5 * (deviceHeight / 20),
    height: 4 * (deviceHeight / 20),
    width: 4 * (deviceHeight / 20),
    borderRadius: 100
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  changePhotoButton: {
    height: 0.7 * (deviceHeight / 20),
    width: 10 * (deviceWidth / 20),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a2e49"
  },
  button: {
    height: 0.7 * (deviceHeight / 20),
    width: 4 * (deviceWidth / 20),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a2e49"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 0.35 * (deviceHeight / 20),
    color: "#ffffff"
  },
  profileInfoContainer: {
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flex: 1,
    paddingHorizontal: 1.5 * (deviceWidth / 20),
    paddingVertical: 0.5 * (deviceHeight / 20)
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 0.2 * (deviceHeight / 20)
  },
  sectionHeader: {
    fontWeight: "bold"
  },
  textInput: {
    width: 11 * (deviceWidth / 20),
    textAlign: "left",
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1
  },
  info: {
    width: 11 * (deviceWidth / 20),
    textAlign: "left",
    marginBottom: 5
  }
});
