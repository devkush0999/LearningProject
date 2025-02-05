import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import SubjectSelect from '../component/SubjectSelect';
import ChapterSelector from '../component/ChapterSelector';
import Animated, { FadeInDown } from 'react-native-reanimated';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSubjectSelect = subject => {
    console.log('Selected subject:', subject);
    // Do something with the selected subject
  };
  const handleChapterSelect = chapter => {
    console.log('Selected chapter:', chapter);
    // Handle chapter selection
  };

  return (
    <View style={styles.screen}>
       <Animated.View
                  entering={FadeInDown.duration(200).delay(200).springify()}
                >
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 20,
            color: 'green',
          }}>
          Start you journey
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', color:'white'}}>
          Choose any one according to your preparation
        </Text>
      </View>
      </Animated.View>
      <Animated.View
                  entering={FadeInDown.duration(200).delay(400).springify()}
                >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingHorizontal: 35,
            paddingVertical: 5,
            color:'white'
          }}>
          NEET{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('TestScreen')}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
              paddingHorizontal: 35,
              paddingVertical: 5,
              borderWidth: 1,
              borderRadius: 15,
              color:'white',
              backgroundColor:'#4A90E2',
            }}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
      </Animated.View>
      <Animated.View
                  entering={FadeInDown.duration(200).delay(600).springify()}
                >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}>
          <View>
          <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingHorizontal: 30,
            paddingTop: 15,
            color:'white'
          }}>
          SUBJECT{' '}
        </Text>
        </View>
        <SubjectSelect
          onSelect={handleSubjectSelect}
          style={{borderWidth: 1}}
        />
       
      </View>
      </Animated.View>
      <Animated.View
                  entering={FadeInDown.duration(200).delay(800).springify()}
                >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}>
        <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingHorizontal: 30,
            paddingTop: 15,
            color:'white'
          }}>
          CHAPTER{' '}
        </Text>
        </View>

        <ChapterSelector
          onSelect={handleChapterSelect}
          subjectName="Mathematics"
        />
      </View>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
