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
import ContactForm from "./ContactForm.js";
import Comment from "./Comment.js";
import StudentMember from "./StudentMember.js";

export default class ApartmentDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PhotosSlider apartmentObject={this.props.apartmentObject} />
        <View style={styles.detailContainer}>
          <View>
            <Text style={styles.apartmentName}>
              {this.props.apartmentObject.apartmentName}
            </Text>
            <Text style={styles.apartmentAddress}>
              {this.props.apartmentObject.address}
            </Text>
          </View>
          <HorizontalLine />
          <SectionHeader label='Amenities' />
          <AmenitiesList apartmentObject={this.props.apartmentObject} />
          <HorizontalLine />
          <SectionHeader label='Available Floorplans' />
          <FloorplanList apartmentObject={this.props.apartmentObject} />
          <HorizontalLine />
          <SectionHeader label='Communities' />
          <StudentMember apartmentObject={this.props.apartmentObject} />
          <HorizontalLine />
          <SectionHeader label='Contact Agency' />
          <AgencyInfo apartmentObject={this.props.apartmentObject} />
          <ContactForm />
          <HorizontalLine />
          <SectionHeader label='Comments' />
          <Comment apartmentObject={this.props.apartmentObject} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  detailContainer: {
    marginTop: 0.5 * (deviceHeight / 20),
    marginLeft: 2 * (deviceWidth / 20),
    marginBottom: 4 * (deviceHeight / 20),
  },
  apartmentName: {
    fontSize: 0.6 * (deviceHeight / 20),
    fontWeight: "bold",
    color: "#0a2e49",
  },
  apartmentAddress: {
    fontSize: 0.35 * (deviceHeight / 20),
    color: "#0a2e49",
  },
  space: {
    width: 0.3 * (deviceWidth / 20),
  },
});
