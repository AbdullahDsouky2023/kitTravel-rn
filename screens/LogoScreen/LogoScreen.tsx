import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Logo } from '../../assets';
 
export default function LogoScreen({navigation}) {
 
  useEffect(() => {
    // Use setTimeout to navigate to HomeScreen after 5 seconds (5000 milliseconds)
    const timeout = setTimeout(() => {
      navigation.navigate('AuthIndex');
    }, 7000);

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <View
    className="flex items-center justify-center h-full bg-white">
      <Logo /> 
      
    </View>
  )
}

