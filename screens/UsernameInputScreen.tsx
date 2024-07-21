// screens/UsernameInput.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UsernameInput = ({ navigation }: any) => {
  const [username, setUsername] = useState<string>(null);

  const handleStartQuiz = () => {
    if (username.trim()) {
      navigation.navigate('Home', { username });
    } else {
      alert('Please enter a username.');
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Enter Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleStartQuiz}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default UsernameInput;
