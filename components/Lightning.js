import React from "react";
import { useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import { styles } from "./ControlPanel";
import ColorPicker, { Panel3, Preview } from "reanimated-color-picker";
import getData from "../services/getData";

const Lightning = () => {
  const [showModal, setShowModal] = useState(false);

  const onSelectColor = ({ hex }) => {
    console.log(hex);
  };

  return (
    <View>
      <Pressable
        style={[styles.controlButton, specificStyles.marginOnButton]}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.buttonText}>Wybierz kolor</Text>
      </Pressable>

      <Modal visible={showModal} animationType="slide" transparent>
        <View style={specificStyles.modalContainer}>
          <ColorPicker
            style={{ width: "20%" }}
            value="red"
            onComplete={onSelectColor}
          >
            <Preview hideInitialColor={true} />
            <Panel3 style={{ marginTop: "10px" }} />
          </ColorPicker>

          <Pressable
            onPress={() => setShowModal(false)}
            style={[styles.controlButton, specificStyles.marginOnButton]}
          >
            <Text style={styles.buttonText}>Ok</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable
        style={[styles.controlButton, specificStyles.marginOnButton]}
        onPress={() => getData()}
      >
        <Text style={styles.buttonText}>Pokaz kolor</Text>
      </Pressable>
    </View>
  );
};

export default Lightning;

const specificStyles = {
  marginOnButton: {
    margin: "25px",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};
