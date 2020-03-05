import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout.js";
import SaveButton from "../components/SaveButton.js";
import ShareButton from "../components/ShareButton.js";
import HorizontalLine from "./HorizontalLine.js";
import AmenitiesList from "./AmenitiesList.js";
import SectionHeader from "./SectionHeader.js";
import PhotosSlider from "./PhotosSlider.js";

export default class ApartmentDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PhotosSlider photos={this.props.apartmentPhotos}></PhotosSlider>
        <View style={styles.buttonContainer}>
          <SaveButton></SaveButton>
          <ShareButton></ShareButton>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.apartmentTitle}>
            <Text style={styles.apartmentName}>{this.props.apartmentName}</Text>
            <Text style={styles.apartmentAddress}>{this.props.address}</Text>
          </View>
          <HorizontalLine></HorizontalLine>
          <SectionHeader label='Amenities'></SectionHeader>
          <AmenitiesList amenitiesList={this.props.amenities}></AmenitiesList>
          <HorizontalLine></HorizontalLine>
          <SectionHeader label='Available Floorplans'></SectionHeader>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 0.3 * (deviceHeight / 20),
    marginHorizontal: 0.4 * (deviceHeight / 20)
  },
  detailContainer: {
    marginLeft: 2 * (deviceWidth / 20)
  },
  apartmentTitle: {},
  apartmentName: {
    fontSize: 0.6 * (deviceHeight / 20),
    fontWeight: "bold",
    color: "#0a2e49"
  },
  apartmentAddress: {
    fontSize: 0.35 * (deviceHeight / 20),
    color: "#0a2e49"
  }
});
