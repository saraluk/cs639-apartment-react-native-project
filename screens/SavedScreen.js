import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { deviceHeight } from "../constants/Layout";
import ApartmentCard from "../components/ApartmentCard";

const savedList = require("../util/SavedList.json");

export default class SavedScreen extends Component {
  state = {
    savedList: savedList.savedApartment
  };

  componentDidUpdate = () => {
    this.setState({
      savedList: savedList.savedApartment
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.savedList.length > 0 &&
            this.state.savedList.map(apartment => (
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
    backgroundColor: "#ffffff",
    paddingTop: (0.5 * deviceHeight) / 20
  }
});
