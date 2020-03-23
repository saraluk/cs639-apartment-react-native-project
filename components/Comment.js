import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";

export default class Comment extends Component {
  state = {
    apartment: this.props.apartmentObject,
    rating: "",
    commentMessage: ""
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.apartment.comments.length > 0 &&
          this.state.apartment.comments.map(comment => (
            <View style={styles.commentDisplayContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.username}>{comment.username}</Text>
                <View style={styles.starIconContainer}>
                  <Ionicons style={styles.icon} name='ios-star' />
                  <Ionicons style={styles.icon} name='ios-star' />
                  <Ionicons style={styles.icon} name='ios-star' />
                  <Ionicons style={styles.icon} name='ios-star' />
                  <Ionicons style={styles.icon} name='ios-star' />
                </View>
              </View>
              <View>
                <Text>{comment.comment}</Text>
              </View>
            </View>
          ))}
        <View>
          <Text>Add your comment</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={rating => this.setState({ rating })}
            value={this.state.rating}
            placeholder='Select Rating'
          />
          <TextInput
            multiline={true}
            style={styles.textInputBox}
            onChangeText={commentMessage => this.setState({ commentMessage })}
            value={this.state.commentMessage}
            placeholder='Share your own experience at this place...'
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              underlayColor='transparent'
              style={styles.button}
            >
              <View>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableHighlight>
            <View style={styles.space}></View>
            <TouchableHighlight
              underlayColor='transparent'
              style={styles.button}
            >
              <View>
                <Text style={styles.buttonText}>Reset</Text>
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
    paddingRight: 2 * (deviceWidth / 20)
  },
  commentDisplayContainer: {
    minHeight: 2 * (deviceHeight / 20),
    width: 16.5 * (deviceWidth / 20),
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    padding: 10,
    marginBottom: 0.3 * (deviceHeight / 20)
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  username: {
    fontWeight: "bold"
  },
  starIconContainer: {
    flexDirection: "row"
  },
  icon: {
    fontSize: 0.5 * (deviceHeight / 20),
    color: "#ef4923"
  },
  textInput: {
    height: 0.8 * (deviceHeight / 20),
    width: 16.5 * (deviceWidth / 20),
    textAlign: "left",
    borderColor: "#dddddd",
    borderWidth: 1,
    backgroundColor: "#eaeaea",
    padding: 4,
    marginBottom: 0.2 * (deviceHeight / 20)
  },
  textInputBox: {
    height: 3 * (deviceHeight / 20),
    width: 16.5 * (deviceWidth / 20),
    textAlign: "left",
    borderColor: "#dddddd",
    borderWidth: 1,
    backgroundColor: "#eaeaea",
    marginRight: 0.5 * (deviceWidth / 20),
    padding: 4,
    marginBottom: 0.2 * (deviceHeight / 20)
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginBottom: 1 * (deviceHeight / 20)
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
    color: "#ffffff"
  },
  space: {
    width: 0.3 * (deviceWidth / 20)
  }
});
