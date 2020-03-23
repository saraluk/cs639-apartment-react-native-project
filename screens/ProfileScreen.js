import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";

export default class ProfileScreen extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    phone: "",
    school: ""
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
        <View style={styles.changePhotoButton}>
          <Text style={styles.changePhotoButtonText}>Change Profile Photo</Text>
        </View>

        <View style={styles.profileInfoContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.sectionHeader}>Personal Information</Text>
            <Text>Edit</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Name</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
              placeholder='Name'
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Username</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
              placeholder='Username'
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              placeholder='Email'
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>Phone</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={phone => this.setState({ phone })}
              value={this.state.phone}
              placeholder='Phone'
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.fieldLabel}>School</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={school => this.setState({ school })}
              value={this.state.school}
              placeholder='School'
            />
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
  changePhotoButton: {
    height: deviceHeight / 20,
    width: deviceWidth
  },
  changePhotoButtonText: {
    textAlign: "center",
    fontSize: 0.35 * (deviceHeight / 20)
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
  }
});
