import {initializeApp} from 'firebase/app';
import { initializeAuth, getReactNativePersistence ,getAuth} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';



const firebaseConfig = {
    apiKey: "AIzaSyBkxb5OUZmZRxQNwpJdv_bNo6XRoOyfE8c",
    authDomain: "kittravel-19002.firebaseapp.com",
    projectId: "kittravel-19002",
    storageBucket: "kittravel-19002.appspot.com",
    messagingSenderId: "731432464140",
    appId: "1:731432464140:web:b9ea5289dd8edacb7da329"
  };

const app = initializeApp(firebaseConfig);

export default app;
export const  auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
