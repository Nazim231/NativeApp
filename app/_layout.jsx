import React, { useEffect } from 'react';
import { Slot } from 'expo-router';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font'; // This hook is used to add custom fonts to the app
import '../global.css';

/**
 * To ensure that splash screen only hides when the resources are loaded
 * so prevent it from auto hiding.
 */
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // Using the useFonts hook to import the fonts;
  const [fontsLoaded, error] = useFonts({
    // "key for font" : require("<font/file/in/assets>")
    'Poppins-Black': require('@/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('@/assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('@/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('@/assets/fonts/Poppins-Thin.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // it will hide the splash screen immediately
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
};

export default RootLayout;
