import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import SubjectSelect from '../component/SubjectSelect';
import ChapterSelector from '../component/ChapterSelector';

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
        <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
          Choose any one according to your preparation
        </Text>
      </View>
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
            }}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 20,
          borderWidth: 1,
        }}>
          <View>
          <Text
            style={{
              fontSize: 24,
              marginBottom: 20,
              fontWeight: 'bold',
              paddingTop: 15,
            }}>
            Choose Subject
          </Text>
        </View>
        <SubjectSelect
          onSelect={handleSubjectSelect}
          style={{borderWidth: 1}}
        />
       
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 24,
              marginBottom: 20,
              fontWeight: 'bold',
              paddingTop: 15,
            }}>
            Choose Chapter
          </Text>
        </View>

        <ChapterSelector
          onSelect={handleChapterSelect}
          subjectName="Mathematics"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
