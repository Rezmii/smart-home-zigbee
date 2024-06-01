import * as React from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";

const OtherDevices = () => {
  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      ></View>
    </PaperProvider>
  );
};

export default OtherDevices;
