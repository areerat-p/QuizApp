import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from './navigation/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    // Function to clear AsyncStorage on app start
    const clearAsyncStorage = async () => {
      try {
        await AsyncStorage.removeItem('leaderboard');
        console.log('Leaderboard cleared');
      } catch (error) {
        console.error('Failed to clear leaderboard:', error);
      }
    };

    clearAsyncStorage();
  }, []);

  return (
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  );
};

export default App;
