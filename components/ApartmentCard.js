import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from "react-native";
import { deviceHeight } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";

export default function ApartmentCard({ onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
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
              <Text style={styles.title}>The Brooklyn Grove</Text>
            </View>
            <View style={styles.apartmentSubArea}>
              <View style={styles.rowContainer}>
                <Ionicons style={styles.icon} name='ios-pin' />
                <Text style={styles.subTitle}>Downtown Brooklyn</Text>
              </View>
            </View>
            <View style={styles.apartmentPriceRange}>
              <View style={styles.rowContainer}>
                <Ionicons style={styles.icon} name='md-cash' />
                <Text style={styles.subTitle}>$3,000 - $6,000</Text>
              </View>
            </View>
            <View style={styles.apartmentRoomTypes}>
              <View style={styles.rowContainer}>
                <Ionicons style={styles.icon} name='md-bed' />
                <Text style={styles.subTitle}>Studio | 1BR | 2BR | 3BR</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}></View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 4 * (deviceHeight / 20),
    marginHorizontal: (0.5 * deviceHeight) / 20,
    marginBottom: (0.5 * deviceHeight) / 20,
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    padding: 10
  },
  rowContainer: {
    flexDirection: "row"
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
    flex: 1.5
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
    flex: 1
  },
  title: {
    fontSize: 0.45 * (deviceHeight / 20),
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
