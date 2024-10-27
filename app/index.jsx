import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl font-pbold">Aora!</Text>
      <Link href={'/profile'} className="text-blue-600">
        Go to profile
      </Link>
    </View>
  );
};

export default Index;
