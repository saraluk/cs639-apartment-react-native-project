import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import ApartmentCard from "../components/ApartmentCard";

const data = require("../util/Data.json");

export default class SearchResultScreen extends Component {
  state = {
    apartments: data.apartments,
    filteredList: [],
    mainArea: ""
  };

  componentDidMount() {
    const params = this.props.route.params;
    const mainAreaId = params.key;
    const mainAreaName = params.mainArea;
    let filtered;
    if (mainAreaId != null) {
      filtered = this.state.apartments.filter(apartment => {
        return apartment.mainAreaId == mainAreaId;
      });
      console.log(filtered);
    } else {
      filtered = this.state.apartments;
    }

    this.setState({
      filteredList: filtered,
      mainArea: mainAreaName
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          mainArea={this.state.mainArea}
          results={this.state.filteredList.length}
        ></SearchBar>
        <ScrollView>
          {this.state.filteredList.length > 0 &&
            this.state.filteredList.map(apartment => (
              <ApartmentCard
                key={apartment.id}
                apartmentObject={apartment}
                thumbnailPhoto={apartment.thumbnailPhoto}
                apartmentName={apartment.apartmentName}
                subArea={apartment.subArea}
                priceRange={apartment.priceRange}
                roomTypes={apartment.roomTypes}
                onPress={() =>
                  this.props.navigation.navigate("ApartmentDetailScreen", {
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
