import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl font-pbold">Aora!</Text>
      <Link href={'/home'} className="text-blue-600">
        Go to Tabs
      </Link>
    </View>
  );
};

export default Index;
