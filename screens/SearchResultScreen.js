import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import ApartmentCard from "../components/ApartmentCard";

const data = require("../util/Data.json");
const list = require("../util/SavedList.json");

export default class SearchResultScreen extends Component {
  state = {
    apartments: data.apartments,
    filteredList: [],
    mainArea: "",
    savedList: list.savedApartment,
  };

  componentDidMount() {
    const params = this.props.route.params;
    const mainAreaId = params.key;
    const mainAreaName = params.mainArea;
    let filtered;
    if (mainAreaId != null) {
      filtered = this.state.apartments.filter((apartment) => {
        return apartment.mainAreaId == mainAreaId;
      });
      console.log(filtered);
    } else {
      filtered = this.state.apartments;
    }
    this.setState({
      filteredList: filtered,
      mainArea: mainAreaName,
    });
  }

  handleToggle = (apartmentId) => {
    const apartment = this.state.filteredList.find(
      (apartment) => apartment.id == apartmentId
    );
    apartment["isSaved"] = !apartment["isSaved"];
    if (apartment["isSaved"] == true) {
      list.savedApartment.push(apartment);
      this.setState({
        savedList: list.savedApartment,
      });
    } else {
      list["savedApartment"] = list.savedApartment.filter(
        (apartment) => apartment.id !== apartmentId
      );
      this.setState(() => ({
        savedList: list.savedApartment,
      }));
    }
  };

  // handleToggle = async (apartmentId) => {
  //   const apartment = this.state.filteredList.find(
  //     (apartment) => apartment.id == apartmentId
  //   );
  //   apartment["isSaved"] = !apartment["isSaved"];
  //   if (apartment["isSaved"] == true) {
  //     const updatedSaveList = [...this.state.savedList, apartment];
  //     this.setState(() => ({
  //       savedList: updatedSaveList,
  //     }));
  //   } else {
  //     const updatedSaveList = this.state.savedList.filter(
  //       (apartment) => apartment.id !== apartmentId
  //     );
  //     this.setState(() => ({
  //       savedList: updatedSaveList,
  //     }));
  //   }
  //   try {
  //     const apartmentJSON = JSON.stringify(this.state.savedList);
  //     await AsyncStorage.setItem("apartment", apartmentJSON);
  //     console.log(this.state.savedList.length);
  //   } catch (err) {
  //     console.log("Error Saving Data ", err);
  //   }
  // };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          mainArea={this.state.mainArea}
          results={this.state.filteredList.length}
        ></SearchBar>
        <ScrollView>
          {this.state.filteredList.length > 0 &&
            this.state.filteredList.map((apartment) => (
              <ApartmentCard
                key={apartment.id}
                apartmentObject={apartment}
                isSaved={apartment["isSaved"]}
                handleToggle={this.handleToggle}
                onPress={() =>
                  this.props.navigation.navigate("ApartmentDetailScreen", {
                    key: apartment.id,
                  })
                }
              />
            ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
