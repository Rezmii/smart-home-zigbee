import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BottomNav = ({ activeTab, onChangeTab }) => {
  const handleTabPress = (tabName) => {
    onChangeTab(tabName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'ControlPanel' && styles.activeTab]}
        onPress={() => handleTabPress('ControlPanel')}
      >
        <Text>Control Panel</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Notifications' && styles.activeTab]}
        onPress={() => handleTabPress('Notifications')}
      >
        <Text>Powiadomienia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Information' && styles.activeTab]}
        onPress={() => handleTabPress('Information')}
      >
        <Text>Informacje</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Settings' && styles.activeTab]}
        onPress={() => handleTabPress('Settings')}
      >
        <Text>Ustawienia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
});

export default BottomNav;
