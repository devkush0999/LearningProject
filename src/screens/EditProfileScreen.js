import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../redux/profileSlice';  
import { styles } from '../styles/globalStyles';

const EditProfileScreen = ({ navigation }) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);

  const handleSave = () => {
    // Basic validation
    if (!name.trim() || !email.trim() || !bio.trim()) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      dispatch(updateProfile({
        name: name.trim(),
        email: email.trim(),
        bio: bio.trim(),
      }));

      Alert.alert(
        'Success',
        'Profile updated successfully',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
      console.error('Update profile error:', error);
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={bio}
          onChangeText={setBio}
          placeholder="Bio"
          multiline
          numberOfLines={3}
        />
        <Button title="Save Changes" onPress={handleSave} />
      </View>
    </View>
  );
};

export default EditProfileScreen;