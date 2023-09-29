import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp,
widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { BgImage } from '../../assets';
export default function Index() {
  return (
    <View
    className='bg-white h-full w-full'
>
      <Image
      style={styles.bg}
        source={require('../../assets/Auth/index/background.png')}
      />
    
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height:100,
    width:100,
    background:'red'
  },
  bg: {
    width: wd(100),
    height: hp(100),
  }
});