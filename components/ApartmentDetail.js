import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout.js";
import SaveButton from "../components/SaveButton.js";
import ShareButton from "../components/ShareButton.js";
import HorizontalLine from "./HorizontalLine.js";
import AmenitiesList from "./AmenitiesList.js";
import SectionHeader from "./SectionHeader.js";
import PhotosSlider from "./PhotosSlider.js";
import FloorplanList from "./FloorplanList";
import AgencyInfo from "./AgencyInfo.js";

export default class ApartmentDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PhotosSlider
          apartmentObject={this.props.apartmentObject}
        ></PhotosSlider>
        <View style={styles.buttonContainer}>
          <SaveButton></SaveButton>
          <View style={styles.space}></View>
          <ShareButton></ShareButton>
        </View>
        <View style={styles.detailContainer}>
          <View>
            <Text style={styles.apartmentName}>
              {this.props.apartmentObject.apartmentName}
            </Text>
            <Text style={styles.apartmentAddress}>
              {this.props.apartmentObject.address}
            </Text>
          </View>
          <HorizontalLine></HorizontalLine>
          <SectionHeader label='Amenities'></SectionHeader>
          <AmenitiesList
            apartmentObject={this.props.apartmentObject}
          ></AmenitiesList>
          <HorizontalLine></HorizontalLine>
          <SectionHeader label='Available Floorplans'></SectionHeader>
          <FloorplanList
            apartmentObject={this.props.apartmentObject}
          ></FloorplanList>
          <HorizontalLine></HorizontalLine>
          <SectionHeader label='Contact Agency'></SectionHeader>
          <AgencyInfo apartmentObject={this.props.apartmentObject}></AgencyInfo>
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
  apartmentName: {
    fontSize: 0.6 * (deviceHeight / 20),
    fontWeight: "bold",
    color: "#0a2e49"
  },
  apartmentAddress: {
    fontSize: 0.35 * (deviceHeight / 20),
    color: "#0a2e49"
  },
  space: {
    width: 0.3 * (deviceWidth / 20)
  }
});
