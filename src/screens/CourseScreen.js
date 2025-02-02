import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const QuestionCard = ({ questionData }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowSolution(true);
  };

  const getOptionStyle = (option) => {
    if (!showSolution) return styles.option;
    if (option === questionData.correct) return styles.correctOption;
    if (option === selectedOption) return styles.wrongOption;
    return styles.option;
  };

  const getOptionTextStyle = (option) => {
    if (!showSolution) return styles.optionText;
    if (option === questionData.correct || option === selectedOption) {
      return styles.selectedOptionText;
    }
    return styles.optionText;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* Question Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.subject}>{questionData.subject}</Text>
          <Text style={styles.topic}>{questionData.topic}</Text>
        </View>

        {/* Question */}
        <Text style={styles.question}>{questionData.question}</Text>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {Object.entries(questionData.options).map(([key, value]) => (
            <TouchableOpacity
              key={key}
              style={[getOptionStyle(key)]}
              onPress={() => handleOptionSelect(key)}
              disabled={showSolution}
            >
              <Text style={getOptionTextStyle(key)}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Solution */}
        {showSolution && (
          <View style={styles.solutionContainer}>
            <Text style={styles.solutionTitle}>Solution:</Text>
            <Text style={styles.solutionText}>
              {questionData.solutions[`answer${questionData.correct.slice(-1)}`]}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerContainer: {
    marginBottom: 16,
  },
  subject: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  topic: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 20,
    lineHeight: 24,
  },
  optionsContainer: {
    gap: 12,
  },
  option: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  correctOption: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#e7f3e8',
    borderWidth: 1,
    borderColor: '#4caf50',
  },
  wrongOption: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffebee',
    borderWidth: 1,
    borderColor: '#ef5350',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  solutionContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  solutionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  solutionText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});

export default QuestionCard;