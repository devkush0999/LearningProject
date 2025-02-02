// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import ProfileScreen from '../screens/ProfileScreen';
// import EditProfileScreen from '../screens/EditProfileScreen';
// import TestScreen from '../screens/TestScreen';
// import Exam from '../screens/Exam';

// const Stack = createStackNavigator();

// const ProfileStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ title: 'Profile' }} />
//       <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
//       <Stack.Screen name="TestScreen" component={TestScreen} options={{ title: 'Test Profile' }} />
//       <Stack.Screen name='Exam' component={Exam} options={{ title: 'Exam' }} />
//     </Stack.Navigator>
//   );
// };

// export default ProfileStackNavigator;

import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './../screens/SplashScreen';
import { navigationRef } from './NavigationUtil';
import TabNavigator from './TabNavigator';
import Exam from '../screens/Exam';
import TestScreen from '../screens/TestScreen';
import EditProfileScreen from '../screens/EditProfileScreen';


const  Stack = createNativeStackNavigator();

 const Navigation=()=>{
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown:false}} initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
                <Stack.Screen name="Exam" component={Exam} />
                <Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: true}} />
                <Stack.Screen name="Edit" component={EditProfileScreen} options={{ headerShown: true}} />
            </Stack.Navigator>
        </NavigationContainer>)
}

export default Navigation; 