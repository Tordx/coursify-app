import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../Assets/Styles'
import { Input } from '../../Partials/Global/fields'
import { black, mode, white, errors } from '../../Assets/Colors'
import { LoginButton, TopExit } from '../../Partials/Global/buttons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { openEmailApp } from '../../Library/Functions'
type Props = {}

const Reset = (props: Props) => {

    const [email, setemail] = useState('')
    const navigation = useNavigation()

  return (
    <View style = {styles.container}>
         <Icon
          name = 'account-lock-open-outline'            
          size={150}
          color = {mode ? errors.main : errors.M004}
          />
        <Text style = {[styles.signupbutton, {textAlign: 'center', fontSize: 15}]} >Please enter your registered email address, a reset password link we'll be sent to you via email</Text>
        <Input
        placeholderTextColor= {mode ? white.W001 : black.B005}
        name = 'email-search-outline'
        placeholder= "Email address"
        value = {email}
        onChangeText={(value) => setemail(value)}
        />
        <LoginButton
            title='Reset Password'
        />
        <Pressable 
            onPress={openEmailApp} 
            style = {styles.exitmodal}
          
          >
          <Text style  = {[styles.vermodaltext, {fontSize: 14}]}>Having trouble with your account? Contact Us</Text>
            </Pressable>
        <TopExit
            onPress={() => {navigation.goBack()}}
        />
    </View>
  )
}

export default Reset