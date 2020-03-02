import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ApartmentCard from "../components/ApartmentCard";

export default function SearchResultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <ScrollView>
        <ApartmentCard
          onPress={() => navigation.navigate("ApartmentDetail")}
        ></ApartmentCard>
        <ApartmentCard
          onPress={() => navigation.navigate("ApartmentDetail")}
        ></ApartmentCard>
        <ApartmentCard
          onPress={() => navigation.navigate("ApartmentDetail")}
        ></ApartmentCard>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
