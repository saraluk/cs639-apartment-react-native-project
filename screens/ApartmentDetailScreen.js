import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout.js";
import SaveButton from "../components/SaveButton.js";
import ShareButton from "../components/ShareButton.js";
import ApartmentDetail from "../components/ApartmentDetail.js";

const data = require("../util/Data.json");

export default class ApartmentDetailScreen extends Component {
  state = {
    apartments: []
  };

  componentDidMount() {
    this.setState({
      apartments: data.apartments
    });
  }

  render() {
    const params = this.props.route.params;
    const id = params.key;
    let filtered = this.state.apartments.filter(apartment => {
      return apartment.id == id;
    });

    console.log(filtered);
    return (
      <View style={styles.container}>
        <ScrollView>
          {filtered.length > 0 &&
            filtered.map(apartment => (
              <ApartmentDetail
                key={apartment.id}
                apartmentName={apartment.apartmentName}
                address={apartment.address}
                amenities={apartment.amenities}
              ></ApartmentDetail>
            ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
