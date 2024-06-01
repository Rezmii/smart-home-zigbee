import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import getDeviceList from "../services/getDeviceList";

const DevicesList = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [devicesList, setDevicesList] = useState([
    {
      title: "First",
    },
    {
      title: "Second",
    },
  ]);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDeviceList();
        setDevicesList(data);
      } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <List.Accordion
        title="Lista aktywnych urządzeń"
        expanded={expanded}
        onPress={handlePress}
      >
        {devicesList === null ? (
          <List.Item title="Brak aktywnych urządzeń" />
        ) : (
          devicesList.map((device, index) => (
            <List.Item key={index} title={device.title} />
          ))
        )}
      </List.Accordion>
    </View>
  );
};

export default DevicesList;
