import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../Assets/Styles'
import { Input } from '../../Partials/Global/fields'
import { black, mode, white, errors } from '../../Assets/Colors'
import { LoginButton, TopExit } from '../../Partials/Global/buttons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { openEmailApp } from '../../Library/Functions'
import { firebase } from '@react-native-firebase/auth'
import { AlertModal, SuccessModal } from '../../Partials/Global/modals'
type Props = {}

const Reset = (props: Props) => {

    const [email, setemail] = useState('');
    const [success, setsuccess] = useState(false)
    const [alertmodal, setalertmodal] = useState(false);
    const [title, settitle] = useState('')
    const navigation = useNavigation();

    const resetpassword = async() => {
      try {
      if (email) {
      await firebase.auth().sendPasswordResetEmail(email).then((response: any) => {
        console.log('sent password')
        settitle('Password reset Link sent')
        setsuccess(true)
        

    
      })
      } else {
        setalertmodal(true);
        settitle('Email is empty')
      }
      } catch (error: any){
        if (error.code === 'auth/user-not-found') {
          setalertmodal(true);
          settitle('Email not found')
        }
      }
    }

  return (
    <View style = {styles.container}>
         <Icon
          name = 'account-lock-open-outline'            
          size={150}
          color = {mode ? errors.main : errors.M004}
          />
        <Text style = {[styles.signupbutton, {textAlign: 'center', fontSize: 15}]} >Please enter your registered email address, a reset password link we'll be sent to you via email</Text>
        <Input
        placeholderTextColor= {white.W001}
        name = 'email-search-outline'
        placeholder= "Email address"
        value = {email}
        secureTextEntry = {false}
        onChangeText={(value) => setemail(value)}
        />
        <LoginButton
            title='Reset Password'
            onPress={resetpassword}
        />
        <Pressable 
            onPress={openEmailApp} 
            style = {styles.exitmodal}
          
          >
          <Text style  = {[styles.vermodaltext, {fontSize: 14}]}>Having trouble with your account? Contact Us</Text>
            </Pressable>
        <AlertModal
          title={title}
          visible = {alertmodal}
          onRequestClose={() => setalertmodal(false)}
          onPress={() => setalertmodal(false)}
        />
        <SuccessModal
          visible = {success}
          title={title}
          onPress={() => setsuccess(false)}
          onRequestClose={() => setsuccess(false)}
        />
        <TopExit
            onPress={() => {navigation.goBack()}}
        />
    </View>
  )
}

export default Reset