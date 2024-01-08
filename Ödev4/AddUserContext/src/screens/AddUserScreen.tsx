import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useUserContext } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';

const AddUserScreen: React.FC = () => {
  
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const { addUser } = useUserContext();

  const handleAddUser = () => {
    if (name.trim() !== '') {
      addUser(name);
      setName('');
      navigation.navigate('UserList')
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          { backgroundColor: pressed ? '#DDDDDD' : '#2196F3' },
        ]}
        onPress={handleAddUser}
      >
        {({ pressed }) => (
          <Text style={[styles.buttonText, { color: pressed ? '#333' : '#fff' }]}>
            Add
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    minWidth: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AddUserScreen;
