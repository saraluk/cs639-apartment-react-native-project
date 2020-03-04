import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import SaveButton from "./SaveButton";
import ShareButton from "./ShareButton";

export default class ApartmentCard extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <View style={styles.leftContainer}>
              <Image
                style={styles.thumbnailImage}
                source={{
                  uri: "../assets/images/LIC_JacksonPark_photo_04.jpg"
                }}
              />
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.apartmentName}>
                <Text style={styles.title}>{this.props.apartmentName}</Text>
              </View>
              <View style={styles.apartmentSubArea}>
                <View style={styles.rowContainer}>
                  <Ionicons style={styles.icon} name='ios-pin' />
                  <Text style={styles.subTitle}>{this.props.subArea}</Text>
                </View>
              </View>
              <View style={styles.apartmentPriceRange}>
                <View style={styles.rowContainer}>
                  <Ionicons style={styles.icon} name='md-cash' />
                  <Text style={styles.subTitle}>{this.props.priceRange}</Text>
                </View>
              </View>
              <View style={styles.apartmentRoomTypes}>
                <View style={styles.rowContainer}>
                  <Ionicons style={styles.icon} name='md-bed' />
                  <Text style={styles.subTitle}>{this.props.roomTypes}</Text>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.rowContainer}>
                  <SaveButton></SaveButton>
                  <ShareButton></ShareButton>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 4 * (deviceHeight / 20),
    marginHorizontal: (0.5 * deviceHeight) / 20,
    marginBottom: (0.5 * deviceHeight) / 20,
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    justifyContent: "center"
  },
  rowContainer: {
    flexDirection: "row",
    flex: 1
  },
  leftContainer: {
    flex: 1.5
  },
  thumbnailImage: {
    height: 3 * (deviceHeight / 20),
    width: 3 * (deviceHeight / 20)
  },
  rightContainer: {
    flex: 2
  },
  apartmentName: {
    flex: 1.5,
    justifyContent: "center"
  },
  apartmentSubArea: {
    flex: 1
  },
  apartmentPriceRange: {
    flex: 1
  },
  apartmentRoomTypes: {
    flex: 1
  },
  buttonContainer: {
    flex: 1.5,
    justifyContent: "center"
  },
  title: {
    fontSize: 0.4 * (deviceHeight / 20),
    fontWeight: "bold"
  },
  icon: {
    fontSize: 0.4 * (deviceHeight / 20),
    fontWeight: "bold",
    marginRight: 5
  },
  subTitle: {
    fontSize: 0.35 * (deviceHeight / 20)
  }
});
