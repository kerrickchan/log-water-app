import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const WaterTracker = () => {
  const [dailyGoal, setDailyGoal] = useState(8); // Default to 8 glasses or adjust units
  const [currentIntake, setCurrentIntake] = useState(0);

  const handleLogWater = () => {
    // Increment currentIntake by a fixed amount or allow input? For simplicity, assume logging 1 unit each time.
    setCurrentIntake(prev => prev + 1);
  };

  const handleGoalChange = (text) => {
    setDaily, DailyGoal(parseFloat(text));
  };

  const resetIntake = () => {
    setCurrentIntake(0);
  };

  // Progress percentage
  const progress = (currentIntake / dailyGoal) * 10 + '%';

  return (
    <View style={styles.container}>
      <Text>Daily Water Goal (in glasses):</Text>
      <TextInput 
        value={dailyGoal.toString()} 
        onChangeText={handleGoalChange} 
        keyboardType="numeric"
      />
      <Text>Current Intake: {currentIntake}</Text>
      {/* Progress bar */}
      <View style={styles.progressBarContainer}>
        <View 
          style={[styles.progress, { width: progress }]} 
        />
      </View>
      <Text>Progress: {Math.round((currentIntake / dailyGoal) * 100)}%</Text>
      <Button title="Log Water" onPress={handleLogWater} />
      <Button title="Reset Intake" onPress={resetIntake} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  },
  progressBarContainer: {
    height: 20,
    width: '100%',
    backgroundColor: '#ddd',
    justifyContent: 'center'
  },
  progress: {
    height: '100%',
    backgroundColor: '#3498db'
  }
});

export default WaterTracker;
