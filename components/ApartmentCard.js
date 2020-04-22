import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import SaveButton from "./SaveButton";
import ShareButton from "./ShareButton";

export default class ApartmentCard extends Component {
  render() {
    const { apartmentObject, handleToggle, isSaved } = this.props;
    return (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <View style={styles.leftContainer}>
              <Image
                style={styles.thumbnailPhoto}
                source={{ uri: apartmentObject.thumbnailPhoto }}
              />
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.apartmentName}>
                <Text style={styles.title}>
                  {apartmentObject.apartmentName}
                </Text>
              </View>
              <View style={styles.apartmentSubArea}>
                <View style={styles.rowContainer}>
                  <Ionicons style={styles.icon} name='ios-pin' />
                  <Text style={styles.subTitle}>{apartmentObject.subArea}</Text>
                </View>
              </View>
              <View style={styles.apartmentPriceRange}>
                <View style={styles.rowContainer}>
                  <Ionicons style={styles.icon} name='md-cash' />
                  <Text style={styles.subTitle}>
                    {apartmentObject.priceRange}
                  </Text>
                </View>
              </View>
              <View style={styles.apartmentRoomTypes}>
                <View style={styles.rowContainer}>
                  <Ionicons style={styles.icon} name='md-bed' />
                  <Text style={styles.subTitle}>
                    {apartmentObject.roomTypes}
                  </Text>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.rowContainer}>
                  <SaveButton
                    apartmentObject={apartmentObject}
                    isSaved={isSaved}
                    handleToggle={() => handleToggle(apartmentObject.id)}
                  ></SaveButton>
                  <View style={styles.space}></View>
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
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
    flex: 1,
  },
  leftContainer: {
    flex: 1.5,
    overflow: "hidden",
    padding: 0.5 * (deviceWidth / 20),
  },
  thumbnailPhoto: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
  },
  rightContainer: {
    flex: 2,
  },
  apartmentName: {
    flex: 1.5,
    justifyContent: "center",
  },
  apartmentSubArea: {
    flex: 1,
  },
  apartmentPriceRange: {
    flex: 1,
  },
  apartmentRoomTypes: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1.5,
    justifyContent: "center",
  },
  title: {
    fontSize: 0.4 * (deviceHeight / 20),
    fontWeight: "bold",
  },
  icon: {
    fontSize: 0.4 * (deviceHeight / 20),
    fontWeight: "bold",
    marginRight: 5,
  },
  subTitle: {
    fontSize: 0.35 * (deviceHeight / 20),
  },
  space: {
    width: 0.3 * (deviceWidth / 20),
  },
});
