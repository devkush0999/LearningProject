import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {
  navigate,
  replace,
  resetAndNavigate,
} from '../navigation/NavigationUtil';
import Animated, {FadeInDown} from 'react-native-reanimated';

const TestScreen = ({navigation}) => {
  const [numQuestions, setNumQuestions] = useState('');
  const [selectedOption, setSelectedOption] = useState('random');

  return (
    <View style={{flex: 1}}>
      <Animated.View entering={FadeInDown.duration(200).delay(200).springify()}>
        <View style={{width: 400, paddingHorizontal: 5}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', padding: 10, textAlign:'center'}}>
            According to your preparation choose the number of question
          </Text>
        </View>
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(200).delay(200).springify()}>
          <View style={{ flexDirection:'row', paddingVertical:25, marginHorizontal: 25, paddingHorizontal:60}}>
            <Text style={{fontSize: 22, fontWeight: 'bold' ,  paddingRight:25,paddingTop:4}}>Questions no: </Text>
            <TextInput
              style={{
                width: 100,
                borderWidth: 1,
                padding: 5,
                borderRadius: 5,
                marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              keyboardType="numeric"
              value={numQuestions}
              onChangeText={setNumQuestions}
              placeholder="Enter number "
            />
          </View>
          <View>
            
          </View>
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(200).delay(600).springify()}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'start',
            padding: 20,
            paddingHorizontal: 80,
          }}>
          <TouchableOpacity
            onPress={() => setSelectedOption('random')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              {selectedOption === 'random' && (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: '#000',
                  }}
                />
              )}
            </View>

            <Text style={{fontSize: 20}}>Random</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedOption('system')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              {selectedOption === 'system' && (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: '#000',
                  }}
                />
              )}
            </View>
            <Text style={{fontSize: 20}}>System Order</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(200).delay(800).springify()}>
        <View
          style={{
            marginTop: 160,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Exam')}
            style={{
              backgroundColor: '#4A90E2',
              justifyContent: 'center',
              alignItems: 'center',
              width: 300,
              height: 60,
              borderRadius: 20,
            }}>
            <Text style={{color: '#fff', fontSize: 24}}>Start Test</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default TestScreen;
