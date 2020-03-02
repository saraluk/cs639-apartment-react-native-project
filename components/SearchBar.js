import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default class SearchBar extends Component {
  state = {
    searchText: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.searchBarContainer}>
            <Ionicons style={styles.searchIcon} name='ios-search' />
            <TextInput
              style={styles.searchTextInput}
              onChangeText={searchText => this.setState({ searchText })}
              value={this.state.searchText}
              placeholder='Search'
            />
          </View>
          <TouchableHighlight>
            <View style={styles.filterButton}>
              <Text style={styles.filterTextButton}>Filter</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.area}>Brooklyn</Text>
            <Text style={styles.results}>(15 Results)</Text>
          </View>
          <View>
            <Text style={styles.sortedby}>Sorted by</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 2 * (deviceHeight / 20),
    marginVertical: 0.5 * (deviceHeight / 20),
    marginHorizontal: 0.5 * (deviceWidth / 20),
    justifyContent: "space-between",
    borderBottomColor: "#a5c1d6",
    borderBottomWidth: 2
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchBarContainer: {
    flexDirection: "row",
    width: 14 * (deviceWidth / 20),
    height: deviceHeight / 20,
    borderWidth: 2,
    borderColor: "#dddddd",
    borderRadius: 10
  },
  searchTextInput: {
    width: 14 * (deviceWidth / 20),
    height: deviceHeight / 20
  },
  searchIcon: {
    color: "#a5c1d6",
    fontSize: 28,
    marginHorizontal: 5
  },
  filterButton: {
    width: 4.5 * (deviceWidth / 20),
    height: deviceHeight / 20,
    backgroundColor: "#0a2e49",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  filterTextButton: {
    color: "#ffffff"
  },
  area: {
    fontSize: 0.4 * (deviceHeight / 20),
    fontWeight: "bold",
    marginRight: 5
  },
  results: {
    fontSize: 0.4 * (deviceHeight / 20)
  },
  sortedby: {
    fontSize: 0.4 * (deviceHeight / 20)
  }
});
