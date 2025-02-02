import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../styles/globalStyles';

const ProfileScreen = ({ navigation }) => {
  const profile = useSelector((state) => state.profile);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name: {profile.name}</Text>
        <Text style={styles.label}>Email: {profile.email}</Text>
        <Text style={styles.label}>Bio: {profile.bio}</Text>
      </View>
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('Edit')}
      />
    </View>
  );
};

export default ProfileScreen;