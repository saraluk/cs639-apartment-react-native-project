import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import LocationCard from "../components/LocationCard";

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.TitleTextContainer}>
        <Text style={styles.TitleText}>Where</Text>
        <Text style={styles.SubTitleText}>do you want to live ?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.rowContainer}>
          <LocationCard
            label={"Manhattan"}
            onPress={() => navigation.navigate("SearchResult")}
          />
          <LocationCard
            label={"Long Island City"}
            onPress={() => navigation.navigate("SearchResult")}
          />
        </View>
        <View style={styles.rowContainer}>
          <LocationCard
            label={"Brooklyn"}
            onPress={() => navigation.navigate("SearchResult")}
          />
          <LocationCard
            label={"Jersey City"}
            onPress={() => navigation.navigate("SearchResult")}
          />
        </View>
        <View style={styles.rowContainer}>
          <LocationCard
            label={"Others"}
            onPress={() => navigation.navigate("SearchResult")}
          />
          <LocationCard
            label={"All"}
            onPress={() => navigation.navigate("SearchResult")}
          />
        </View>
      </View>
    </View>
  );
}

SearchScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a2e49"
  },
  TitleTextContainer: {
    height: (2.8 * deviceHeight) / 20,
    padding: deviceWidth / 20
  },
  TitleText: {
    color: "#ef4923",
    fontSize: deviceHeight / 20,
    fontWeight: "bold"
  },
  SubTitleText: {
    color: "#ffffff",
    fontSize: (0.6 * deviceHeight) / 20,
    fontWeight: "bold"
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 0.5 * (deviceHeight / 20),
    alignItems: "center"
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});
