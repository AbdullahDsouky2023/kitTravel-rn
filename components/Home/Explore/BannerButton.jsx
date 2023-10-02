import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wd } from 'react-native-responsive-screen'
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BannerButton({name,IconName}) {
  return (
    <TouchableOpacity
        className='flex items-center flex-row  justify-center'
        style={styles.button}>
          <Ionicons 
          name={IconName}
          color={'white'}
          size={16}
          />
          <Text className='text-white ml-1 text-center'
          style={styles.buttonText}
          >
            {name}
          </Text>
        </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    button:{
      height: hp((36/812)*100),
      width:wd((106/375)*100),
      backgroundColor:'#000',
      color:'white',
      borderRadius:4
    },
    buttonText:{
      fontSize:hp((16/812)*100),
    }
  })