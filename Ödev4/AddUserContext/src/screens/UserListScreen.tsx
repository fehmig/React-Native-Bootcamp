import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useUserContext } from '../context/UserContext';

const UserListScreen: React.FC = () => {
  const { users } = useUserContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userItem: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserListScreen;
