import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import NotificationList from "./components/NotificationList";
import InformationSection from "./components/InformationSection";
import QuickSettings from "./components/QuickSettings";
import BottomNav from "./components/BottomNav";
import Lightning from "./components/Lightning";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [activeTab, setActiveTab] = useState("ControlPanel");

  const paddingTopValue =
    Platform.OS === "android" ? StatusBar.currentHeight : 0;

  return (
    <View style={[styles.container, { paddingTop: paddingTopValue }]}>
      <Header />

      {activeTab === "ControlPanel" && (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ControlPanel">
            <Stack.Screen name="ControlPanel" component={ControlPanel} />
            <Stack.Screen name="Lightning" component={Lightning} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
      {activeTab === "Notifications" && <NotificationList />}
      {activeTab === "Information" && <InformationSection />}
      {activeTab === "Settings" && <QuickSettings />}

      <BottomNav onChangeTab={(tabName) => setActiveTab(tabName)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
