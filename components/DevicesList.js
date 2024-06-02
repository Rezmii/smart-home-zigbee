import React, { useEffect, useState } from "react";
import { View, StyleSheet, Modal, Text, Image } from "react-native";
import { Button, List } from "react-native-paper";
import getDeviceList from "../services/getDeviceList";
import Lightning from "../components/Lightning";

const DevicesList = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [devicesList, setDevicesList] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(Object);
  const [modalVisible, setModalVisible] = useState(false);
  const [icon, setIcon] = useState("");

  const handlePress = () => {
    setExpanded(!expanded);
  };

  // Zmiana wybraneg urządzenia i ikonki oraz odpalenie Popup'a
  const onItemClickHandler = (device) => {
    setSelectedDevice(device);
    setModalVisible(true);
    setIcon("../assets/" + device.type + ".png");
  };

  //Tu mozna cos zrobic z informacjami z Lightning
  const handleLightningData = (data) => {
    console.log(data);
  };

  // Pobranie listy urządzeń z API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = JSON.parse(await getDeviceList());
        setDevicesList(data);
        console.log(data);
      } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
        setDevicesList(null); // ustawienie devicesList na null w przypadku błędu
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedDevice.friendly_name}</Text>
            <Image source={icon} style={styles.image}></Image>
            <Lightning
              device={selectedDevice}
              onLightningData={handleLightningData}
            />
          </View>
          <Button
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textStyle}>Zamknij</Text>
          </Button>
        </View>
      </Modal>
      <List.Accordion
        title="Lista aktywnych urządzeń"
        titleStyle={styles.accordionTitle}
        expanded={expanded}
        onPress={handlePress}
      >
        {devicesList === null || devicesList.length === 0 ? (
          <List.Item title="Brak aktywnych urządzeń" />
        ) : (
          devicesList.map((device, index) => (
            <List.Item
              onPress={() => onItemClickHandler(device)}
              key={index}
              title={device.friendly_name}
              description={device.type}
              left={(props) => (
                <List.Icon
                  {...props}
                  icon={"../assets/" + device.type + ".png"}
                />
              )}
            />
          ))
        )}
      </List.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  accordionTitle: {
    color: "black",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    display: "flex",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  image: {
    width: "50%",
    height: "50%",
    resizeMode: "center",
    alignSelf: "center",
  },
});

export default DevicesList;
