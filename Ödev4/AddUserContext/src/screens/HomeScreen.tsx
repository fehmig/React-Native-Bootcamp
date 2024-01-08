import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native BOOTCAMP TASK 4</Text>
      <View style={styles.buttonContainer}>


        
      <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#DDDDDD' : '#2196F3' },
          ]}
          onPress={() => navigation.navigate('AddUser')}
        >
          {({ pressed }) => (
            <Text style={[styles.buttonText, { color: pressed ? '#333' : '#fff' }]}>
              Add User
            </Text>
          )}
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#DDDDDD' : '#4CAF50' },
          ]}
          onPress={() => navigation.navigate('UserList')}
        >
          {({ pressed }) => (
            <Text style={[styles.buttonText, { color: pressed ? '#333' : '#fff' }]}>
              User List
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
      button: {
        padding: 10,
        borderRadius: 8,
        minWidth: '45%',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default HomeScreen;
