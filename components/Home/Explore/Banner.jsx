import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ImageBackgroundBase, ScrollView } from 'react-native'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen'
import BannerButton from './BannerButton'
import BannerSearch from './BannerSearch'

export default function Banner() {
  return (
    <ImageBackground 
    source={{
      uri: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    }}
    >
    <View 
    style={styles.bannerContainer}
    >
      <BannerSearch />
      <View
        style={styles.buttonGroup}
        className="flex items-center flex-row "
      >
        <BannerButton IconName={'airplane-outline'} name={'Fligts'} />
        <BannerButton IconName={'home-outline'} name={'Hotel'} />
        <BannerButton IconName={'image-outline'} name={'Spots'} />
      </View>
      <View style={styles.BannerTextContainer}>
        <Text style={styles.BannerText} className='text-white'>do not have idea where to go?</Text>
      </View>
      <TouchableOpacity className='bg-white p-2 w-fit mx-auto rounded-lg mt-4 '>
        <Text style={{
          fontSize:hp((12/812)*100)
        }}>
          Explore Now
        </Text>

      </TouchableOpacity>
    </View>
    </ImageBackground> 
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