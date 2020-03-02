import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { ScrollView } from "react-native-gesture-handler";
import ApartmentCard from "../components/ApartmentCard";

export default class SearchResultScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar></SearchBar>
        <ScrollView>
          <ApartmentCard></ApartmentCard>
          <ApartmentCard></ApartmentCard>
          <ApartmentCard></ApartmentCard>
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
