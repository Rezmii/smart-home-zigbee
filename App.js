import React, { useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import NotificationList from "./components/NotificationList";
import InformationSection from "./components/InformationSection";
import QuickSettings from "./components/QuickSettings";
import BottomNav from "./components/BottomNav";
import Lightning from "./components/Lightning";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ElectricalOutlet } from "./components/ElectricalOutlet";
import OtherDevices from "./components/OtherDevices";
import DevicesList from "./components/DevicesList";

const Stack = createNativeStackNavigator();

export default function App() {
  const [activeTab, setActiveTab] = useState("ControlPanel");

  const paddingTopValue =
    Platform.OS === "android" ? StatusBar.currentHeight : 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, { paddingTop: paddingTopValue }]}>
        <Header />
        <DevicesList />

        <NavigationContainer>
          {activeTab === "ControlPanel" && (
            <Stack.Navigator initialRouteName="ControlPanel">
              <Stack.Screen name="Control Panel" component={ControlPanel} />
              <Stack.Screen name="Oswietlenie" component={Lightning} />
              <Stack.Screen
                name="Gniazdka elektryczne"
                component={ElectricalOutlet}
              />
              <Stack.Screen name="Inne urzadzenie" component={OtherDevices} />
            </Stack.Navigator>
          )}
          {activeTab === "Notifications" && (
            <Stack.Navigator initialRouteName="NotificationList">
              <Stack.Screen name="Powiadomienia" component={NotificationList} />
            </Stack.Navigator>
          )}
          {activeTab === "Information" && (
            <Stack.Navigator initialRouteName="InformationSection">
              <Stack.Screen name="Informacje" component={InformationSection} />
            </Stack.Navigator>
          )}
          {activeTab === "Settings" && (
            <Stack.Navigator initialRouteName="QuickSettings">
              <Stack.Screen name="Ustawienia" component={QuickSettings} />
            </Stack.Navigator>
          )}
        </NavigationContainer>

        <BottomNav
          activeTab={activeTab}
          onChangeTab={(tabName) => setActiveTab(tabName)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
