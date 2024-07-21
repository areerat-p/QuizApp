import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Leaderboard = ({ route, navigation }: any) => {
  const { username, score } = route.params || {};
  const [leaderboard, setLeaderboard] = useState<{ username: string; score: number }[]>([]);

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const storedData = await AsyncStorage.getItem('leaderboard');
        const savedLeaderboard = storedData ? JSON.parse(storedData) : [];
        const existingUserIndex = savedLeaderboard.findIndex((entry: any) => entry.username === username);

        if (existingUserIndex !== -1) {
          // Update score if the new score is higher
          if (savedLeaderboard[existingUserIndex].score < score) {
            savedLeaderboard[existingUserIndex].score = score;
          }
        } else {
          // Add new user if not found
          savedLeaderboard.push({ username, score });
        }

        const sortedLeaderboard = savedLeaderboard.sort((a, b) => b.score - a.score);
        setLeaderboard(sortedLeaderboard);
        await AsyncStorage.setItem('leaderboard', JSON.stringify(sortedLeaderboard));
      } catch (error) {
        console.error('Failed to load or save leaderboard:', error);
      }
    };

    if (username && score !== undefined) {
      loadLeaderboard();
    }
  }, [username, score]);

  const handleStartNewQuiz = () => {
    navigation.navigate('UsernameInput');
  };

  const getItemStyle = (index: number) => {
    switch (index) {
      case 0:
        return [styles.item, styles.firstPlace];
      case 1:
        return [styles.item, styles.secondPlace];
      case 2:
        return [styles.item, styles.thirdPlace];
      default:
        return styles.item;
    }
  };

  const getUsernameStyle = (index: number) => {
    switch (index) {
      case 0:
        return styles.firstPlaceUsername;
      case 1:
        return styles.secondPlaceUsername;
      case 2:
        return styles.thirdPlaceUsername;
      default:
        return styles.username;
    }
  };

  const getScoreStyle = (index: number) => {
    switch (index) {
      case 0:
        return styles.firstPlaceScore;
      case 1:
        return styles.secondPlaceScore;
      case 2:
        return styles.thirdPlaceScore;
      default:
        return styles.score;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        renderItem={({ item, index }) => (
          <View style={getItemStyle(index)}>
            <Text style={getUsernameStyle(index)}>
              {index + 1}. {item.username} {index + 1 === 1 ? '🏆 ' : ''}
            </Text>
            <Text style={getScoreStyle(index)}>
              {item.score}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.username}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleStartNewQuiz}
      >
        <Text style={styles.buttonText}>Start New Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
  },
  firstPlace: {
    borderColor: '#FFD700', // Gold border
    borderWidth: 2,
  },
  secondPlace: {
    borderColor: '#C0C0C0', // Silver border
    borderWidth: 2,
  },
  thirdPlace: {
    borderColor: '#CD7F32', // Bronze border
    borderWidth: 2,
  },
  firstPlaceUsername: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  secondPlaceUsername: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  thirdPlaceUsername: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {},
  firstPlaceScore: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  secondPlaceScore: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  thirdPlaceScore: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    textAlign: 'right',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Leaderboard;
