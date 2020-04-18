import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image, Alert, AsyncStorage } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";

export default class EditProfileScreen extends Component {
  
  componentDidMount = () => {
    AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }));
    AsyncStorage.getItem('username').then((value) => this.setState({ 'username': value }));
    AsyncStorage.getItem('email').then((value) => this.setState({ 'email': value }));
    AsyncStorage.getItem('phone').then((value) => this.setState({ 'phone': value }));
    AsyncStorage.getItem('school').then((value) => this.setState({ 'school': value }));
  };

  save = () => {
    Alert.alert("Changes saved");
    this.props.navigation.navigate("ProfileScreen");
  };

  setName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState({ 'name': value });
  };

  setUsername = (value) => {
    AsyncStorage.setItem('username', value);
    this.setState({ 'username': value });
  };

  setEmail = (value) => {
    AsyncStorage.setItem('email', value);
    this.setState({ 'email': value });
  };

  setPhone = (value) => {
    AsyncStorage.setItem('phone', value);
    this.setState({ 'phone': value });
  };

  setSchool = (value) => {
    AsyncStorage.setItem('school', value);
    this.setState({ 'school': value });
  };

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      email: "",
      phone: "",
      school: ""
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profilePhotoContainer}>
          <View style={styles.backgroundContainer}>
            <Image
              source={{
                uri:
                  "https://codehs.com/uploads/3fb254527bfe2f367b433f75a741e2b1"
              }}
              style={styles.photo}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={this.changePhoto}
          >
            <View style={styles.changePhotoButton}>
              <Text style={styles.buttonText}>Change Profile Photo</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.profileInfoContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.sectionHeader}>Personal Information</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Name</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={this.setName}
              value={this.setName}
              placeholder='Name'
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Username</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={this.setUsername}
              value={this.setUsername}
              placeholder='Username'
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={this.setEmail}
              value={this.setEmail}
              placeholder='Email'
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Phone</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={this.setPhone}
              value={this.setPhone}
              placeholder='Phone'
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>School</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={this.setSchool}
              value={this.setSchool}
              placeholder='School'
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={this.save}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("ProfileScreen")}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </View>
          </TouchableHighlight>
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
    justifyContent: "space-around",
    marginBottom: 20,
    flexDirection: 'row'
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
