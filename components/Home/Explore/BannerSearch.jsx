import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native'
  import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wd,
  } from 'react-native-responsive-screen'
export default function BannerSearch() {
  return (
    <View
    style={styles.SearchContainer}
    className="flex items-center sticky top-0  justify-center mx-auto"
  >
    <TextInput
      placeholderTextColor={'#000000'}
      style={styles.SearchInput}
      placeholder="Where are you going?"
    />
  </View>
  )
}

const styles = StyleSheet.create({
    bannerContainer: {
      height: hp((480 / 812) * 100),
      width: wd(100),
      position:'absolute',
      top:0,
      backgroundColor: '#25AEC8',
      borderRadius: 24,
      paddingTop: hp((52 / 812) * 100),
    },
    SearchContainer: {
      backgroundColor: 'white',
      height: hp((48 / 812) * 100),
      width: wd((343 / 375) * 100),
      borderRadius: 28,
    },
    SearchInput: {
      fontSize: hp((18 / 812) * 100),
    },
    buttonGroup: {
      padding: hp((16 / 812) * 100),
      gap: 12,
    },
  })