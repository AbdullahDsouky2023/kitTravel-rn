import { View, Text } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useIsFocused } from '@react-navigation/native';

export default function TabIcon({focused,iconName,tabName}) {
    const isFocused = useIsFocused();

  return (
    <View 
              style={{
                width:widthPercentageToDP((86/375)*100),
                display:'flex',
                alignItems:'center'
              }}
              className={`m1-2 bg-white flex items-center justify-center`}>
                <Ionicons
                  name={iconName}
                  size={24}
                  color={focused ? "#000000 " : "#cccc"}
                />
                <Text style={{
                    fontSize:heightPercentageToDP((14/812)*100),
                    textAlign:'center',
                    color: focused ? "#000000" : "#cccc"
                }}>
                   {tabName}
                </Text>
              </View>
  )
}