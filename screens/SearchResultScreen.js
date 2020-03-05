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
    const params = this.props.route.params;
    const mainAreaId = params.mainAreaId;
    const mainArea = params.mainArea;
    let filtered = this.state.apartments.filter(apartment => {
      return apartment.mainAreaId == mainAreaId;
    });
    console.log(filtered);

    return (
      <View style={styles.container}>
        <SearchBar mainArea={mainArea} results={filtered.length}></SearchBar>
        <ScrollView>
          {filtered.length > 0 &&
            filtered.map(apartment => (
              <ApartmentCard
                key={apartment.id}
                thumbnailPhoto={apartment.thumbnailPhoto}
                apartmentName={apartment.apartmentName}
                subArea={apartment.subArea}
                priceRange={apartment.priceRange}
                roomTypes={apartment.roomTypes}
                onPress={() =>
                  this.props.navigation.navigate("ApartmentDetail", {
                    key: apartment.id
                  })
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
