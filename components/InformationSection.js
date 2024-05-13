import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InformationSection = () => {
  // Przykładowe dane
  const energyUsage = { electricity: '25 kWh', water: '10 m³' };
  const weatherInfo = { temperature: '20°C', condition: 'Sunny' };
  const systemStatus = { online: true, errors: 2 };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sekcja informacyjna:</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Zużycie energii:</Text>
          <Text style={styles.infoText}>{energyUsage.electricity} (prąd), {energyUsage.water} (woda)</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Pogoda:</Text>
          <Text style={styles.infoText}>{weatherInfo.temperature}, {weatherInfo.condition}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Status systemu:</Text>
          <Text style={styles.infoText}>
            {systemStatus.online ? 'Online' : 'Offline'}, 
            {systemStatus.errors > 0 ? ` ${systemStatus.errors} błędy` : ''}
          </Text>
        </View>
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
    color: 'red',
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  infoItem: {
    marginBottom: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoText: {},
});

export default InformationSection;
