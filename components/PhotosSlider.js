import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout.js";
import { SliderBox } from "react-native-image-slider-box";

export default class PhotosSlider extends Component {
  state = {
    apartment: this.props.apartmentObject
  };

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.apartment.apartmentPhotos}
          sliderBoxHeight={8 * (deviceHeight / 20)}
          dotColor='#4a6e99'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
