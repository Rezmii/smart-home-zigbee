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
            style={specificStyles.colorPickerStyle}
            value="red"
            onComplete={onSelectColor}
          >
            <Preview
              hideInitialColor={true}
              style={specificStyles.previewMargin}
            />
            <Panel3 style={specificStyles.colorPanelMargin} />
          </ColorPicker>

          <Pressable
            onPress={() => setShowModal(false)}
            style={[
              styles.controlButton,
              specificStyles.marginOnButton,
              specificStyles.modalButton,
            ]}
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
    marginHorizontal: "25px",
    marginVertical: "15px",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  previewMargin: {
    marginTop: "40px",
  },
  colorPanelMargin: {
    marginTop: "10px",
  },
  colorPickerStyle: {
    width: "20%",
    marginTop: "10px",
  },
  modalButton: {
    width: "200px",
  },
};
