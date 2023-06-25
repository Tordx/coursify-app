import { View, Text, Pressable, Image, Modal, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Input } from '../../Partials/Global/fields';
import { styles } from '../../Assets/Styles';
import { black, errors, mode, success, theme, white } from '../../Assets/Colors';
import { appname } from '../../Assets/Constants';
import { LoginButton } from '../../Partials/Global/buttons';
import {AlertModal, LoadingModal} from '../../Partials/Global/modals';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { login } from '../../Library/Logins';
import { loginauth } from '../../Library/Firebase';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [title, settitle] = useState('');
  const [openloginmodal, setopenloginmodal] = useState(false);
  const [alertmodal, setalertmodal] = useState(false);
  const [checksecu, setchecksecu] = useState(true)
  const navigation = useNavigation();
  

  useFocusEffect(() => {
    const Back = () => {
      BackHandler.exitApp();
      return true
    };
    const handler = BackHandler.addEventListener('hardwareBackPress', Back);
    return () => handler.remove();
  })

    const authLogin = async () => {

      if (!email) {
        settitle('Please enter your email address');
        setalertmodal(true);
      } else if (!password) {
        settitle('Please enter your password');
        setalertmodal(true);
      } else {
        try {
          settitle('Checking credentials, please wait...');
          setopenloginmodal(true);
          await loginauth(email, password, navigation);
          await AsyncStorage.setItem('login', JSON.stringify({email, password}))
          setopenloginmodal(false);
          setemail('')
          setpassword('')
        } catch (error: any) {
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            settitle('Email address not found');
            setalertmodal(true);
          }
          else if (error.code === 'auth/wrong-password') {
          settitle('Email and Password did not match');
          setalertmodal(true);
          } else {
            console.error(error);
            settitle('Something went wrong, please try again');
            setalertmodal(true);
          }
          setopenloginmodal(false);
        }
      }
    };
  return (
    <View style = {styles.container}>
      <Image
        source={require('../../Assets/Images/loginpic.png')}
        resizeMode='contain'
        style = {{width: 400, height: '25%', alignSelf: 'center', marginBottom: 10}}
      />
      <Text style = {styles.appname}> {appname.toUpperCase()} </Text>
      <Input
        name = 'email-outline'
        placeholderTextColor={white.main}
        placeholder='Email Address'
        value={email}
        secureTextEntry = {false}
        onChangeText={(value) => setemail(value)}
      />
       <Input
        name = 'lock-outline'
        placeholderTextColor={white.main}
        placeholder='Password'
        secureTextEntry = {checksecu}
        value = {password}
        onChangeText={(value) => setpassword(value)}
        secu= {checksecu ? 'eye-outline' : 'eye-off-outline'}
        onPress={() => setchecksecu(!checksecu)}
      />
      <Pressable onPress={() => {navigation.navigate('Reset' as never)}}
        style = {styles.forgottenpassword}
      >
        <Text style = {[styles.signupbutton, {color: errors.W001}]}>Forgotten Password?</Text>
      </Pressable>
      <LoginButton
        title = 'Sign In'
        onPress={authLogin}
      />
      <Pressable onPress={() => {navigation.navigate('Verify' as never)}}>
        <Text style = {styles.signupbutton}>Don't have an account yet? 
          <Text style = {{color: success.G006}}> Sign up</Text>
        </Text>
      </Pressable>
      <LoadingModal
        visible = {openloginmodal}
        title={title}
      />
      <AlertModal
        title= {title}
        visible = {alertmodal}
        onRequestClose={() => setalertmodal(false)}
        onPress={() => setalertmodal(false)}
      />
    </View>
  )
}

export default Login