import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const FlashCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const questionData = {
    question: "What is the capital of France?",
    options: [
      { id: 1, text: "London" },
      { id: 2, text: "Berlin" },
      { id: 3, text: "Paris" },
      { id: 4, text: "Madrid" }
    ],
    correctAnswer: 3,
    explanation: "Paris is the capital and largest city of France."
  };

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  });

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  const handleFlip = () => {
    setIsFlipped(true);
    Animated.timing(animatedValue, {
      toValue: 180,
      duration: 800,
      useNativeDriver: true
    }).start();
  };

  const frontAnimatedStyle = {
    transform: [
      { rotateY: frontInterpolate }
    ]
  };

  const backAnimatedStyle = {
    transform: [
      { rotateY: backInterpolate }
    ]
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.cardFront, frontAnimatedStyle]}>
        <Text style={styles.question}>{questionData.question}</Text>
        {questionData.options.map(option => (
          <TouchableOpacity
            key={option.id}
            onPress={() => handleSelect(option.id)}
            style={[
              styles.option,
              selectedOption === option.id && {
                backgroundColor: option.id === questionData.correctAnswer ? '#90EE90' : '#FFB6C1'
              }
            ]}
          >
            <Text style={styles.optionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
        {selectedOption && (
          <TouchableOpacity style={styles.summaryButton} onPress={handleFlip}>
            <Text style={styles.summaryText}>Show Summary</Text>
          </TouchableOpacity>
        )}
      </Animated.View>

      <Animated.View style={[styles.cardBack, backAnimatedStyle]}>
        <Text style={styles.answerTitle}>Correct Answer:</Text>
        <Text style={styles.answer}>
          {questionData.options.find(opt => opt.id === questionData.correctAnswer).text}
        </Text>
        <Text style={styles.explanationTitle}>Explanation:</Text>
        <Text style={styles.explanation}>{questionData.explanation}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFront: {
    width: SCREEN_WIDTH - 40,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    backfaceVisibility: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  cardBack: {
    width: SCREEN_WIDTH - 40,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    backfaceVisibility: 'hidden',
    position: 'absolute',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
  },
  summaryButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  summaryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  answerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answer: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 20,
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  explanation: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default FlashCard;