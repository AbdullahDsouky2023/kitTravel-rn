import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ImageBackgroundBase, ScrollView } from 'react-native'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen'
import BannerButton from '../../components/Home/Explore/BannerButton'
import BannerSearch from '../../components/Home/Explore/BannerSearch'
import Banner from '../../components/Home/Explore/Banner'
export default function Explore() {
  return (
    <ScrollView style={{
      height:1000,
    }}>
      
<Banner/>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  bannerContainer: {
    height: hp((480 / 812) * 100),
    width: wd(100),
    // backgroundColor: '#25AEC8',
    borderRadius: 24,
    paddingTop: hp((52 / 812) * 100),
  },
  buttonGroup: {
    padding: hp((16 / 812) * 100),
    gap: 12,
  },
  BannerTextContainer: {
    paddingTop: hp((30 / 812) * 100),
    paddingHorizontal: hp((60 / 812) * 100),
  },
  BannerText: {
    fontSize: hp((37 / 812) * 100),
    // width: wd((254/375)*100),
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
