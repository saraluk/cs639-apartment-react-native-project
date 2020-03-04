import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const data = require("../util/Data.json");

export default class ApartmentDetailScreen extends Component {
  state = {
    apartments: []
  };

  componentDidMount() {
    this.setState({
      apartments: data.apartments
    });
  }

  render() {
    const params = this.props.route.params;
    const id = params.key;
    let filtered = this.state.apartments.filter(apartment => {
      return apartment.id == id;
    });

    console.log(filtered);
    return (
      <View style={styles.container}>
        <ScrollView></ScrollView>
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
