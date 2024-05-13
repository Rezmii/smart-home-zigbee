import * as React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";

const DevicesList = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
      <List.Accordion
        title="Lista aktywnych urządzeń"
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </View>
  );
};

export default DevicesList;
