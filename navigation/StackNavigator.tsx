import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UsernameInputScreen from '../screens/UsernameInputScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UsernameInput">
        <Stack.Screen
          name="UsernameInput"
          component={UsernameInputScreen}
          options={{ 
            title: 'Quiz Game', 
            headerLeft: () => null, 
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Questions',
            headerLeft: () => null, 
          }}
        />
        <Stack.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={({ navigation }) => ({
            title: 'Leaderboard',
            headerLeft: () => null, // Remove the back button
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
