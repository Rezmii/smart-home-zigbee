import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import getDeviceList from "../services/getDeviceList";

const DevicesList = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [devicesList, setDevicesList] = useState([{}]);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDeviceList();
      setDevicesList(data);
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
        {devicesList.map((device, index) => (
          <List.Item key={index} title={device.friendly_name} />
        ))}
      </List.Accordion>
    </View>
  );
};

export default DevicesList;
