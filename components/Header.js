import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.navigationContainer}>
        <View style={styles.navigationContainer1}>
          <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={require("../assets/zigbi.png")}
          ></Image>
          <Text style={styles.sectionTitle}>Smart Home Zigbee</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3498db",
    paddingRight: "45px",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  navigationContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  navigationContainer1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  navigationButton: {
    marginLeft: 20,
    fontSize: 16,
    color: "#fff",
    textDecorationLine: "underline",
  },
  imageStyle: {
    width: 50,
    height: 50,
    float: "left",
  },
});

export default Header;
