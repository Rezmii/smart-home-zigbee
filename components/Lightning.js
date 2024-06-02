import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { styles } from "./ControlPanel";
import ColorPicker, { Panel3, Preview } from "reanimated-color-picker";
import getData from "../services/getData";
import sendColorToServer from "../services/sendColorToServer";

const Lightning = ({ device, onLightningData }) => {
  const windowWidth = useWindowDimensions().width;
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(Object);

  const onSelectColor = ({ hex }) => {
    console.log(hex);
    console.log(selectedDevice);
    setSelectedColor(hex);
    sendColorToServer(hex, selectedDevice);
    onLightningData(hex);
  };
  return (
    <View>
      <Pressable
        style={[
          styles.controlButton,
          specificStyles.marginOnButton,
          { margin: windowWidth < 500 ? 10 : 200 },
        ]}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.buttonText}>Wybierz kolor</Text>
      </Pressable>

      <Modal visible={showModal} animationType="slide" transparent>
        <View style={specificStyles.modalContainer}>
          <ColorPicker
            style={
              (specificStyles.colorPickerStyle,
              { width: windowWidth < 500 ? "50%" : "20%" })
            }
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
        style={[
          styles.controlButton,
          specificStyles.marginOnButton,
          { margin: windowWidth < 500 ? 10 : 200 },
        ]}
        onPress={() => getData()}
      >
        <Text style={styles.buttonText}>Pokaz aktualny kolor</Text>
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
    marginTop: "10px",
  },
  modalButton: {
    width: "200px",
  },
};
