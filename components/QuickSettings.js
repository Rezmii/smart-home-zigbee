import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuickSettings = () => {
  // Przykładowe ustawienia
  const settings = [
    { id: 1, name: 'Tryb nocny' },
    { id: 2, name: 'Tryb oszczędzania energii' },
    // Dodaj więcej ustawień tutaj
  ];

  const handleSettingPress = (setting) => {
    // Obsługa naciśnięcia przycisku ustawienia
   // console.log(`Wybrano ustawienie: ${setting.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Szybkie ustawienia:</Text>
      <View style={styles.settingsContainer}>
        {settings.map(setting => (
          <TouchableOpacity
            key={setting.id}
            style={styles.settingButton}
            onPress={() => handleSettingPress(setting)}
          >
            <Text style={styles.settingButtonText}>{setting.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  settingButton: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  settingButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default QuickSettings;
