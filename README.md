# Quiz App

## Overview

This is a React Native application for a quiz game. Users can input their username, take a quiz, and see their scores on a leaderboard. The app supports navigating between different screens and maintains the leaderboard using `AsyncStorage`.

## Installation

### Prerequisites

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed on your system.
- **Expo CLI**: Install Expo CLI globally by running  
    ```sh
    npm install -g expo-cli
    ```

### Install Dependencies
- running cmd 
    ```sh
    npm install
    ```
 
### Install Additional Dependencies
- running cmd 
    ```sh
    expo install @react-native-async-storage/async-storage @react-navigation/native @react-navigation/stack react-native-safe-area-context react-native-screens
    ```
- install the Expo-specific packages for React Navigation, running cmd
    ```sh
    expo install @react-navigation/native @react-navigation/stack
    ```


## Running the Application
- download application **Expo** in mobile
- running cmd 
  ```sh
    npx expo start
  ```
  or 
    ```sh
    expo start
    ```
- scan qrcode for open application in mobile by Expo

## Usage
1. Start the App: When you launch the app, you will be prompted to enter a name on the UsernameInput screen.
2. Take the Quiz: After entering a name, you will proceed to the HomeScreen where you can start answering quiz questions.
3. View the Leaderboard: After finishing the quiz, you'll be directed to the Leaderboard screen to view the scores. You can start a new quiz by clicking the "Start New Quiz" button, which will reset the quiz state and allow you to enter a new name.

## Handling Scores
- Score Tracking: Scores are tracked based on the number of correct answers. The score is updated in real-time and passed to the leaderboard.
- Leaderboard: Scores are saved in AsyncStorage and displayed in descending order.
