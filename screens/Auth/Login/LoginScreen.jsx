import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
  KeyboardAvoidingView,
} from 'react-native'
import { useState } from 'react'
import { ReturnArrow } from '../../../assets'
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { auth } from '../../../FirebaseConfig'
import { AuthErrorCodes, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import MessageModal from '../../../components/register/MessageModal'
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSignIn = async () => {
    try {
        signInWithEmailAndPassword(auth, email, password).then((result)=>{
          const currentUser =  result.user
          if(!currentUser.emailVerified)
          {
            sendEmailVerification(currentUser)
            navigation.navigate('VerifyAccount')

          }else {
            navigation.navigate("HomeScreen")
          }
          
        }).catch((error)=>{
          setErrorMessage(error.message)
        })
      
      
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          setErrorMessage(
            'Invalid email address. Please check your email format.',
          )
          break
        case 'auth/user-not-found':
          setErrorMessage('User not found. Please sign up first.')
          break
        case 'auth/wrong-password':
          setErrorMessage('Incorrect password. Please try again.')
          break
        default:
          setErrorMessage(
            'An error occurred during sign-in. Please try again later.',
          )
          break
      }
    }
  }

  return (
    <View style={styles.container} className="bg-white h-full ">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.arrowButton}
      >
        <ReturnArrow height={hp(3.5)} width={hp(3.5)} />
      </TouchableOpacity>
      <View style={styles.LoginContainer}>
        <Text style={styles.Text1}>Welcome Back!</Text>
        <Text
          style={styles.Text2}
          className="text-[#6e6d6d] drop-shadow-lg shadow-lg"
        >
          Input your Email Address & Password
        </Text>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.EmailContainer}>
            <Text>Email Address</Text>
            <TextInput
              cursorColor={'#000000'}
              style={styles.TextInput}
              onChangeText={(text) => setEmail(text)}
              className="border-2  border-neutral-300 focus:border-neutral-800 rounded-lg "
              placeholder="Email"
            />
          </View>
          <View style={styles.PasswordContainer}>
            <Text>Set Password</Text>
            <TextInput
              style={styles.TextInput}
              secureTextEntry={true}
              cursorColor={'#000000'}
              onChangeText={(text) => setPassword(text)}
              className="border-2 border-neutral-300 focus:border-neutral-800 rounded-lg "
              placeholder="Must Contain at least 6 character"
            />
          </View>
          <Text className="text-blue-400 " style={styles.Text3}>
            Forget Password?
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignIn()}
            className="   rounded-lg flex items-center mb-[8px]  justify-center bg-neutral-900 text-white"
          >
            <Text className="text-white" style={styles.ButtonText}>
              Login
            </Text>
          </TouchableOpacity>
          {errorMessage && (
            <MessageModal
              message={errorMessage}
              hideModel={setErrorMessage}
              visible={true}
            />
          )}
        </KeyboardAvoidingView>
      </View>
      <ExpoStatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: hp((44 / 812) * 100),
  },
  arrowButton: {
    paddingLeft: hp((16 / 812) * 100),
    marginVertical: hp((13 / 812) * 100),
  },
  LoginContainer: {
    paddingLeft: hp((16 / 812) * 100),
    paddingTop: hp(1.3),
  },
  Text1: {
    fontSize: hp(3.5),
    marginBottom: hp(0.4),
  },
  Text2: {
    fontSize: hp(2.3),
    textShadowColor: '#000',
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
    height: hp((52 / 812) * 100),
    width: wd((343 / 375) * 100),
    marginTop: hp((87 / 812) * 100),
  },
  ButtonText: {
    fontSize: hp(2.3),
  },
})
