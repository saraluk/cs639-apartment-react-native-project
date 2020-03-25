import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  Modal
} from "react-native";
import { deviceHeight, deviceWidth } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";

export default class FloorplanList extends Component {
  state = {
    modalOpen: false,
    currentUnit: {}
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.modalOpen}
          animationType='slide'
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Floorplan</Text>
                <Ionicons
                  style={styles.icon}
                  name='ios-close-circle'
                  onPress={() =>
                    this.setState({
                      modalOpen: false
                    })
                  }
                />
              </View>
              <View style={styles.modalBodyContent}>
                <View style={styles.rowContainer}>
                  <Text style={styles.modalUnitTitle}>
                    {this.props.apartmentObject.apartmentName}
                  </Text>
                  <Text style={styles.modalUnitSubtitle}>
                    {this.state.currentUnit.roomType} |{" "}
                    {this.state.currentUnit.unit}
                  </Text>
                </View>
                <Text style={styles.modalUnitSubtitle}>
                  ${this.state.currentUnit.unitPrice} / month
                </Text>
              </View>
              <View style={styles.modalImageContainer}>
                <Image
                  style={styles.modalImage}
                  source={{
                    uri: this.state.currentUnit.floorplan
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>

        <ScrollView horizontal={true}>
          {this.props.apartmentObject.availableFloorplans.map((unit, index) => (
            <View key={index} style={styles.individualContainer}>
              <TouchableHighlight
                underlayColor='transparent'
                onPress={() =>
                  this.setState({
                    modalOpen: true,
                    currentUnit: unit
                  })
                }
              >
                <Image style={styles.image} source={{ uri: unit.floorplan }} />
              </TouchableHighlight>
              <Text style={styles.unitTitle}>
                {unit.roomType} | {unit.unit}
              </Text>
              <Text style={styles.unitSubtitle}>${unit.unitPrice}</Text>
              <Text style={styles.note}>(Tap to view detail)</Text>
            </View>
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
    marginVertical: 0.2 * (deviceHeight / 20)
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  individualContainer: {
    marginRight: 0.7 * (deviceWidth / 20),
    alignItems: "center"
  },
  image: {
    height: 3.5 * (deviceHeight / 20),
    width: 4 * (deviceHeight / 20),
    borderColor: "#4a6e99",
    borderWidth: 1.5,
    borderRadius: 10
  },
  unitTitle: {
    marginTop: 0.2 * (deviceHeight / 20),
    fontSize: 0.35 * (deviceHeight / 20)
  },
  unitSubtitle: {
    fontSize: 0.35 * (deviceHeight / 20),
    fontWeight: "bold"
  },
  note: {
    fontSize: 0.3 * (deviceHeight / 20)
  },
  modalContainer: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "flex-end"
  },
  modalContent: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 13 * (deviceHeight / 20)
  },
  modalHeader: {
    backgroundColor: "#dddddd",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  modalHeaderText: {
    fontSize: 0.4 * (deviceHeight / 20),
    fontWeight: "bold",
    color: "#0a2e49",
    marginLeft: 0.8 * (deviceWidth / 20)
  },
  modalBodyContent: {
    padding: 0.8 * (deviceWidth / 20)
  },
  modalUnitTitle: {
    fontSize: 0.45 * (deviceHeight / 20),
    fontWeight: "bold",
    color: "#0a2e49"
  },
  modalUnitSubtitle: {
    fontSize: 0.4 * (deviceHeight / 20),
    textAlign: "right"
  },
  modalImageContainer: {
    flex: 1,
    alignItems: "center"
  },
  modalImage: {
    height: 9 * (deviceHeight / 20),
    width: 9 * (deviceHeight / 20),
    resizeMode: "contain"
  },
  icon: {
    fontSize: 0.9 * (deviceHeight / 20),
    margin: 0.45 * (deviceWidth / 20),
    color: "#0a2e49"
  }
});
