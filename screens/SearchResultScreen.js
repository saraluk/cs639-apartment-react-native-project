import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";

export default class SearchResultScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar></SearchBar>
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
