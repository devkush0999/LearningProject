import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC, useEffect } from 'react'
// import { Colors, screenWidth } from '@utils/Constants'
import { resetAndNavigate } from './../navigation/NavigationUtil'

const Splash = () => {
  useEffect(()=>{
     const timerId = setTimeout(() => {
      resetAndNavigate("TabNavigator");
     }, 3000)
     return () => clearTimeout(timerId)
  }, [])
  return (
    <View style={styles.container}>
      {/* <Image source={require('@assets/images/logo_t.png')} style={styles.image} /> */}
      <Text>lorem20 lorem20</Text>
    </View>
  )
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      backgroundColor:"green",
      justifyContent:'center',
      alignItems:'center'
     },
     image:{
      }
})

export default Splash