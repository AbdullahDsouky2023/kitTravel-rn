import { useNavigation } from '@react-navigation/native'
import { applyActionCode, sendEmailVerification } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { auth } from '../../../FirebaseConfig'
import MessageModal from '../../../components/register/MessageModal'

const VerifyAccount = ({ navigation, route }) => {
  const CELL_COUNT = 5
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState(auth.currentUser);

  const handleVerify = async () => {
    try {
      await applyActionCode(auth, value)
      // Code is verified, you can now mark the user as verified
      setErrorMessage(
        'Verification Email was sent',
      )
      navigation.navigate('HomeScreen')
      console.log('correct') // Navigate to the home screen or any other screen
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-code':
          setErrorMessage(
            'Invalid email address. Please check your email format.',
          )
          break
        default:
          setErrorMessage('Incorrect Code. Please try again.')
      }
    }
  }
  const handleResendEmailVefication = async () => {
    try {
      await sendEmailVerification(user)
      setErrorMessage('Check your email for the code')
    } catch (error) {
      setErrorMessage(error.message)
    }
  }



  return (
    <SafeAreaView
      style={{
        height: hp(110),
      }}
      className="p-4 pt-16 bg-white flex gap-32"
    >
      <View>

      <Text style={styles.Text1} className=" ">
        Verify is that you?
      </Text>
      <Text style={styles.Text2} className=" text-slate-400">
        One more step, please check your verification code on your email address
      </Text>
      </View>
      {/* <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            className={` text-2xl py-4 text-center border-b-[2px] border-neutral-400 ${
              isFocused && ' border-b-[2px] border-neutral-950'
            }`}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      /> */}
      {/* <Text className="text-md relative mt-4 text-slate-900">
        Don’t Receive the verification code?
        <TouchableOpacity onPress={handleResendEmailVefication}>
          <Text className="text-blue-400">Resend Code</Text>
        </TouchableOpacity>
      </Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}
        className="bg-neutral-900 relative   text-white  items-center p-4 rounded-lg"
      >
        <Text style={styles.ButtonText} className="text-white">
          Send
        </Text>
      </TouchableOpacity>
      {errorMessage && (
        <MessageModal
          message={errorMessage}
          hideModel={setErrorMessage}
          visible={true}
        />
      )}
    </SafeAreaView>
  )
}

export default VerifyAccount

const styles = StyleSheet.create({
  Text1: {
    fontSize: hp(3.2),
    marginBottom: hp(0.21),
  },
  Text2: {
    fontSize: hp(2.2),
    textShadowColor: '#000',
    width: wd((300 / 375) * 100),
  },
  EmailContainer: {
    marginTop: hp((26 / 812) * 100),
  },
  PasswordContainer: {
    marginTop: hp((16 / 812) * 100),
  },
  TextInput: {
    paddingLeft: hp((12 / 812) * 100),
    paddingVertical: hp((6 / 812) * 100),
    width: wd((343 / 375) * 100),
    marginTop: hp((7 / 812) * 100),
  },
  Text3: {
    marginTop: hp((14 / 812) * 100),
  },
  button: {
    height: hp((55 / 812) * 100),
    width: wd((343 / 375) * 100),
  },
  ButtonText: {
    fontSize: hp(2.3),
  },
  codeFieldRoot: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  cell: {
    width: wd((50 / 343) * 100),
    height: hp((66 / 812) * 100),
  },
})
