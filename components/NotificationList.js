import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';





const NotificationList = () => {

  // Przykładowe dane powiadomień (Tu doda sie dane z API)
  const notifications = [
    { id: 1, title: 'Urządzenie 1: Włączone', timestamp: '2024-04-23 10:00' },
    { id: 2, title: 'Urządzenie 2: Wyłączone', timestamp: '2024-04-22 15:30' },
    { id: 3, title: 'Błąd systemowy: Brak połączenia', timestamp: '2024-04-21 08:45' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista powiadomień:</Text>
      <ScrollView style={styles.notificationContainer}>
        {notifications.map(notification => (
          <View key={notification.id} style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationTimestamp}>{notification.timestamp}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#3498db'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 10,
    color: 'white'
  },
  notificationContainer: {
    maxHeight: 200, // Maksymalna wysokość listy powiadomień
  },
  notificationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  notificationTimestamp: {
    fontSize: 12,
    color: 'black',
  },
});

export default NotificationList;
