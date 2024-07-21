import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import questions, { Question } from '../data/questions'; // Import your questions data

const HomeScreen = ({ route, navigation }: any) => {
  const { username, reset } = route.params || {};
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);

  const shuffleArray = <T,>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    if (reset) {
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setScore(0);
    }

    const shuffledQuestions = shuffleArray(
      questions.map(q => ({
        ...q,
        answers: shuffleArray(q.answers),
      }))
    );
    
    setShuffledQuestions(shuffledQuestions);
  }, [reset]);

  const handleAnswer = (answer: string) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const correct = answer === currentQuestion.correctAnswer;
  
    const newScore = correct ? score + 1 : score;
    setScore(newScore);
  
    setSelectedAnswer(answer);
    setIsCorrect(correct);
  
    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        navigation.navigate('Leaderboard', { username, score: newScore });
      }
    }, 1000);
  };

  if (shuffledQuestions.length === 0) return <Text>Loading...</Text>;

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / shuffledQuestions.length * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
        </Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      </View>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      <FlatList
        data={currentQuestion.answers}
        renderItem={({ item }) => {
          let buttonColor = '#ddd';
          if (item === selectedAnswer) {
            buttonColor = isCorrect ? 'green' : 'red';
          } else if (selectedAnswer && item === currentQuestion.correctAnswer) {
            buttonColor = 'green';
          }
          return (
            <TouchableOpacity
              onPress={() => handleAnswer(item)}
              style={[styles.button, { backgroundColor: buttonColor }]}
              disabled={selectedAnswer !== null}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  question: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default HomeScreen;
