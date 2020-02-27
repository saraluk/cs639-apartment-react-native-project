import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class SearchResultScreen extends React.Component {
  state = {
    searchText: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchFilterContainer}>
          <View style={styles.rowContainer}>
            <TextInput
              style={styles.searchBarContainer}
              onChangeText={searchText => this.setState({ searchText })}
              value={this.state.searchText}
              placeholder='Search'
            />
            <TouchableHighlight>
              <View style={styles.filterButton}>
                <Text style={styles.filterTextButton}>Filter</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  searchFilterContainer: {
    height: 1.5 * (deviceHeight / 20),
    marginVertical: 0.5 * (deviceHeight / 20),
    marginHorizontal: 0.5 * (deviceWidth / 20)
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchBarContainer: {
    width: 14 * (deviceWidth / 20),
    height: deviceHeight / 20,
    borderWidth: 2,
    borderColor: "#dddddd",
    borderRadius: 10
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
  }
});
