import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const getData = async () => {
  try {
    const response = await fetch(
      "http://192.168.124.6:3020/device/Lampka_Nocna/color/20/20/20",
      {
        method: "GET", // Poprawienie metody na "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json(); // Pobranie danych w formacie JSON
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={require("../assets/zigbi.png")}
      ></Image>
      <View style={styles.navigationContainer}>
        <Text style={styles.sectionTitle}>Smart Home Zigbee</Text>
        <View style={styles.navigationContainer1}>
          <TouchableOpacity
            onPress={() => {
              console.log("test");
            }}
          >
            <Text style={styles.navigationButton}>
              Lista aktywnych urządzeń
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /* Obsługa nawigacji do sekcji "Ustawienia" */
            }}
          >
            <Text style={styles.navigationButton}>Kocham Zigbee</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3498db",
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
