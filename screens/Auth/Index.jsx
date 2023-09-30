import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen'
import { LogoHorizonal } from '../../assets'
export default function Index({navigation}) {
  return (
    <View className="bg-white relative h-full w-full">
      <Image
        style={styles.bg}
        source={require('../../assets/Auth/index/background.png')}
      />
      <View style={styles.textContainer} className="absolute  top-0 flex ">
        <LogoHorizonal />
        <Text style={styles.LogoText}>
          Discover and planning your travelling any location around the world
          just one app.
        </Text>
      </View>
      <View
        style={styles.buttonContainer}
        className="flex items-center    absolute bottom-0  justify-center "
      >
        <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate('Login')}
          className="   rounded-lg flex items-center mb-[8px]  justify-center bg-white"
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate('Register')}
          className="   rounded-lg flex items-center justify-center bg-transparent border-2  border-white "
        >
          <Text style={styles.text2} className="text-slate-200 text-md">
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wd(100),
    height: hp(100),
  },
  bg: {
    width: wd(100),
    height: hp(100),
  },
  buttonContainer: {
    width: wd(100),
    paddingBottom: hp((32 / 812) * 100),
  },
  button: {
    height: hp((52 / 812) * 100),
    width: wd((343 / 375) * 100),
  },
  text: {
    fontSize: hp(2.3),
  },
  text2: {
    fontSize: hp(2),
  },
  textContainer: {
    marginTop: hp((73 / 812) * 100),
    marginLeft: hp((24 / 812) * 100),
  },
  LogoText: {
    fontSize: hp(3.5),
    color: '#DDDDDD',
    marginTop: hp((24 / 812) * 100),
    width: wd((278 / 375) * 100),
  },
})
