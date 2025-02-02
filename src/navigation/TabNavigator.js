import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileStackNavigator from './ProfileStackNavigator';
import CourseScreen from '../screens/CourseScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name='ProfileScreen' component={ProfileScreen}/>
      <Tab.Screen 
        name="Profile" 
        component={CourseScreen}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

