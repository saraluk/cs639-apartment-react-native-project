import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ApartmentDetail from "../components/ApartmentDetail.js";

const data = require("../util/Data.json");

export default class ApartmentDetailScreen extends Component {
  state = {
    apartments: data.apartments,
    filteredList: []
  };

  componentDidMount() {
    const params = this.props.route.params;
    const id = params.key;
    let filtered = this.state.apartments.filter(apartment => {
      return apartment.id == id;
    });
    console.log(filtered);
    this.setState({
      filteredList: filtered
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.filteredList.length > 0 &&
            this.state.filteredList.map(apartment => (
              <ApartmentDetail
                key={apartment.id}
                apartmentObject={apartment}
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
