import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const FlashCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const questions = [
    {
        question: "What is Newton's First Law of Motion?",
        options: [
          "An object's acceleration is proportional to force",
          "An object remains at rest or in motion unless acted upon by force",
          "Every action has an equal and opposite reaction",
          "Objects attract with gravitational force"
        ],
        correctAnswer: 1,
        explanation: "Newton's First Law states that an object will remain at rest or in uniform motion unless acted upon by an external force. This principle is also known as the law of inertia."
      },
      {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Watt", "Ampere", "Ohm"],
        correctAnswer: 2,
        explanation: "The ampere (A) is the SI unit of electric current, measuring the rate of flow of electric charge past a point in a circuit."
      },
      {
        question: "Which electromagnetic wave has the shortest wavelength?",
        options: ["Radio waves", "Visible light", "X-rays", "Gamma rays"],
        correctAnswer: 3,
        explanation: "Gamma rays have the shortest wavelength in the electromagnetic spectrum, typically less than 0.01 nanometers, making them highly energetic."
      },
      {
        question: "What is the speed of light in vacuum?",
        options: ["299,792 km/s", "300,000 km/s", "199,792 km/s", "250,000 km/s"],
        correctAnswer: 0,
        explanation: "The speed of light in vacuum is exactly 299,792 kilometers per second, a fundamental constant of nature."
      },
      {
        question: "What is the main principle of conservation of energy?",
        options: [
          "Energy can be created but not destroyed",
          "Energy can be destroyed but not created",
          "Energy cannot be created or destroyed",
          "Energy can be both created and destroyed"
        ],
        correctAnswer: 2,
        explanation: "The law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another in an isolated system."
      },
      {
        question: "What particle has zero rest mass?",
        options: ["Electron", "Proton", "Photon", "Neutron"],
        correctAnswer: 2,
        explanation: "Photons, the particles of light, have zero rest mass and always travel at the speed of light in vacuum."
      },
      {
        question: "What is the unit of electrical resistance?",
        options: ["Ampere", "Volt", "Watt", "Ohm"],
        correctAnswer: 3,
        explanation: "The ohm (Ω) is the SI unit of electrical resistance, defined as the resistance when one volt causes a current of one ampere."
      },
      {
        question: "What force keeps planets in orbit around the Sun?",
        options: [
          "Electromagnetic force",
          "Gravitational force",
          "Nuclear force",
          "Centripetal force"
        ],
        correctAnswer: 1,
        explanation: "Gravitational force, described by Newton's law of universal gravitation, keeps planets in elliptical orbits around the Sun."
      }
  ];

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  });

  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  const handleFlip = () => {
    Animated.timing(animatedValue, {
      toValue: isFlipped ? 0 : 180,
      duration: 800,
      useNativeDriver: true
    }).start(() => {
      setIsFlipped(prev => !prev); 
    });
  };

  const resetCard = () => {
    setIsFlipped(false);
    setSelectedOption(null);
    animatedValue.setValue(0);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      resetCard();
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      resetCard();
      setCurrentIndex(prev => prev - 1);
    }
  };

  const frontAnimatedStyle = { transform: [{ rotateY: frontInterpolate }] };
  const backAnimatedStyle = { transform: [{ rotateY: backInterpolate }] };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <Text style={styles.question}>{questions[currentIndex].question}</Text>
          <View style={styles.optionsContainer}>
            {questions[currentIndex].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelect(index)}
                style={[
                  styles.option,
                  selectedOption === index && {
                    backgroundColor: index === questions[currentIndex].correctAnswer 
                      ? '#4CAF50' 
                      : '#FF5252'
                  }
                ]}
              >
                <Text style={[
                  styles.optionText,
                  selectedOption === index && styles.selectedOptionText
                ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {selectedOption !== null && (
            <TouchableOpacity style={styles.summaryButton} onPress={handleFlip}>
              <Text style={styles.summaryText}>Show Summary</Text>
            </TouchableOpacity>
          )}
        </Animated.View>

        <Animated.View 
          style={[
            styles.card, 
            styles.cardBack, 
            backAnimatedStyle, 
            { pointerEvents: isFlipped ? 'auto' : 'none' }
          ]}
        >
          <Text style={styles.answerTitle}>Correct Answer:</Text>
          <Text style={styles.answer}>
            {questions[currentIndex].options[questions[currentIndex].correctAnswer]}
          </Text>
          <Text style={styles.explanationTitle}>Explanation:</Text>
          <Text style={styles.explanation}>
            {questions[currentIndex].explanation}
          </Text>
        </Animated.View>
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity 
          style={[styles.navButton, currentIndex === 0 && styles.disabledButton]} 
          onPress={handlePrev}
          disabled={currentIndex === 0}
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.pageIndicator}>
          {`${currentIndex + 1}/${questions.length}`}
        </Text>
        <TouchableOpacity 
          style={[styles.navButton, currentIndex === questions.length - 1 && styles.disabledButton]} 
          onPress={handleNext}
          disabled={currentIndex === questions.length - 1}
        >
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: SCREEN_WIDTH - 40,
    backgroundColor: '#1E2746',
    borderRadius: 15,
    padding: 20,
    backfaceVisibility: 'hidden',
    borderWidth:1,
    borderColor:'white'
  },
  cardBack: {
    position: 'absolute',
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  optionsContainer: {
    gap: 12,
  },
  option: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#2A3655',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  summaryButton: {
    backgroundColor: '#4A90E2',
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  summaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  answerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  answer: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 20,
  },
  explanationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  explanation: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  navButton: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#2A3655',
  },
  pageIndicator: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default FlashCard;