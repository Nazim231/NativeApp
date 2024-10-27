import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Profile</Text>
      <Link href={"/"} className='text-blue-600'>Go to home</Link>
    </View>
  );
};

export default Profile;
