import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import ApartmentCard from "../components/ApartmentCard";

const list = require("../util/SavedList.json");
export default class SavedScreen extends Component {
  state = {
    savedList: list.savedApartment,
  };

  componentDidMount() {
    this.setState({
      savedList: list.savedApartment,
    });
  }

  handleRefresh = () => {
    this.setState({
      savedList: list.savedApartment,
    });
  };

  handleToggle = (apartmentId) => {
    const apartment = this.state.savedList.find(
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

  render() {
    const { savedList } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.handleRefresh}
              underlayColor='transparent'
              style={styles.button}
            >
              <View>
                <Text style={styles.buttonText}>Refresh</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <ScrollView>
          {savedList.length > 0 &&
            savedList.map((apartment) => (
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
    paddingTop: (0.5 * deviceHeight) / 20,
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: (0.2 * deviceHeight) / 20,
    marginRight: (0.5 * deviceHeight) / 20,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    height: 0.7 * (deviceHeight / 20),
    width: 4 * (deviceWidth / 20),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a2e49",
  },
  buttonText: {
    color: "#ffffff",
  },
  space: {
    width: 0.3 * (deviceWidth / 20),
  },
});
