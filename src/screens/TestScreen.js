import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { navigate, replace, resetAndNavigate } from '../navigation/NavigationUtil';

const TestScreen = ({navigation}) => {
  const [numQuestions, setNumQuestions] = useState('');
  const [selectedOption, setSelectedOption] = useState('random');
//   const navigation = useNavigation();

  return (
    <View style={{flex:1}}>
      <View
        style={{
          
          flexDirection:'row',
          width: 400,
          marginBottom:110,
          paddingVertical:20,
          paddingHorizontal:20,
          marginTop:30,
        }}>
        <View style={{ width:300}}>
          <Text style={{fontSize: 22, fontWeight: 'bold',}}>
            No of Questions for test
          </Text>
        </View>
        <View>
          <TextInput
            style={{
              width: 60,
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              marginBottom: 20,
              justifyContent:'center',
              alignItems:'center'
            }}
            keyboardType="numeric"
            value={numQuestions}
            onChangeText={setNumQuestions}
            placeholder="Enter number of questions"
          />
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'start',
          padding: 20,
          paddingHorizontal:80
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
          <Text style={{fontSize: 16}}>Random</Text>
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
          <Text style={{fontSize: 16}}>System Order</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:200, justifyContent: 'center', 
            alignItems: 'center',}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Exam')}
          style={{
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
            height: 40,
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>Start Test</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

export default TestScreen;
