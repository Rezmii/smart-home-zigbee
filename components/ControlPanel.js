import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ControlPanel = () => {
  const navigation = useNavigation();

  const openNewTab = () => {
    console.log("test");
    navigation.navigate("Lightning"); // Nawiguj do nowego komponentu
  };

  return (
    <View style={styles.quickControlsContainer}>
      <Text style={styles.sectionTitle}>Sterowanie:</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => {
            openNewTab();
          }}
        >
          <Text style={styles.buttonText}>Oświetlenie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.buttonText}>Gniazdka elektryczne</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.buttonText}>Inne urzadzenie</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  quickControlsContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3498db",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  controlButton: {
    width: "30%",
    backgroundColor: "#3498db",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ControlPanel;
