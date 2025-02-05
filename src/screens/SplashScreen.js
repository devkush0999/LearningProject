import { View, Text, StyleSheet, Image, StatusBar, Pressable } from 'react-native'
import React, { FC, useEffect } from 'react'
import { resetAndNavigate } from './../navigation/NavigationUtil'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
  useEffect(()=>{
     const timerId = setTimeout(() => {
      resetAndNavigate("TabNavigator");
     }, 3000)
     return () => clearTimeout(timerId)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          
          <Animated.View
            entering={FadeInDown.duration(200).springify()}
            style={styles.logoContainer}
          >
            {/* <MaterialCommunityIcons name="airplane" size={24} color="#12B3A8" /> */}
            <Text style={styles.brandText}>
              FLASH{" "}
            </Text>
            <Text style={styles.flyText}>
              CARD
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(200).springify()}
          >
            <Text style={styles.headlineText}>
            Don't Just Dream of Being a Doctor, NEET It!
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(400).springify()}
            style={styles.descriptionContainer}
          >
            <Text style={styles.descriptionText}>
            From practice to perfect. Our NEET platform helps you master the exam and achieve your dream of becoming a doctor.
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(600).springify()}
            style={styles.buttonContainer}
          >
            <Pressable
              onPress={() => navigation.navigate("login")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>START</Text>
            </Pressable>

            <View style={styles.accountContainer}>
              <Text style={styles.accountText}>
                Don't have an account?{" "}
              </Text>
              <Text style={styles.discoverText}>Create</Text>
            </View>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192031',
  },
  mainContainer: {
    height: '100%',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginVertical: 32,
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 96,
  },
  brandText: {
    fontSize: 20,
    color: 'white',
    lineHeight: 60,
    paddingLeft: 4,
  },
  flyText: {
    fontSize: 20,
    color: '#e6f0ff',
    lineHeight: 60,
    paddingLeft: 4,
    fontStyle: 'italic',
  },
  headlineText: {
    color: 'white',
    fontSize: 52,
    fontWeight: '500',
    lineHeight: 60,
    marginTop: 10,
  },
  descriptionContainer: {
    marginTop: 10,
  },
  descriptionText: {
    color: '#d4d4d4',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 38,
    marginTop: 16,
    paddingHorizontal: 4,
  },
  buttonContainer: {
    height: '25%',
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,

    borderWidth:1,
    borderColor: 'green',
   
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  accountContainer: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    justifyContent: 'center',
  },
  accountText: {
    color: '#d4d4d4',
    fontWeight: '500',
    fontSize: 18,
    fontStyle: 'italic',
  },
  discoverText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Splash;