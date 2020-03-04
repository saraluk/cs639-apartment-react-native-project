import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import ApartmentCard from "../components/ApartmentCard";

const data = require("../util/Data.json");
export default class SearchResultScreen extends Component {
  state = {
    apartments: []
  };

  componentDidMount() {
    this.setState({
      apartments: data.apartments
    });
  }

  render() {
    // const param = this.props.navigation.state.params;
    // const mainArea = param.mainAreaId;
    return (
      <View style={styles.container}>
        <SearchBar></SearchBar>
        <ScrollView>
          {this.state.apartments.length > 0 &&
            this.state.apartments.map(apartment => (
              <ApartmentCard
                apartmentName={apartment.apartmentName}
                subArea={apartment.subArea}
                priceRange={apartment.priceRange}
                roomTypes={apartment.roomTypes}
                onPress={() =>
                  this.props.navigation.navigate("ApartmentDetail")
                }
              ></ApartmentCard>
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
