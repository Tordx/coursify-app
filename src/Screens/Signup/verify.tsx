import { View, Text, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../Assets/Styles';
import { Input } from '../../Partials/Global/fields';
import { black, errors, mode, success, white } from '../../Assets/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoginButton, TopExit } from '../../Partials/Global/buttons';
import { useNavigation } from '@react-navigation/native';
import { AlertModal, LoadingModal } from '../../Partials/Global/modals';
import { dbtoken } from '../../Database/pouch';
import { disclosure } from '../../Assets/Constants';
import { useDispatch } from 'react-redux';
import { onDelete, signup } from '../../Library/Firebase';



const Verify: React.FC =  () => {

  const [password, setpassword] = useState('');
  const [passconfirm, setpassconfirm] = useState('');
  const [title, settitle] = useState('');
  const [email, setemail] = useState('');
  const [alertmodal, setalertmodal] = useState(false);
  const [loadingmodal, setloadingmodal] = useState(false);

  const navigation = useNavigation();

  const initiateSignup = () => {

    setloadingmodal(true);
    signup(email, password, navigation)
    .then((response: any) => {
    })
    .catch((error: any) => {
      if (error.code === 'auth/email-already-in-use') {
        settitle('email already used');
        setalertmodal(true);
        setloadingmodal(false);
      
      }else  if (error.code === 'auth/cancelled') {
        onDelete();
      }else if (error.code === 'auth/weak-password') {
        
        settitle('At least 6 alphanumeric password');
        setalertmodal(true);
        setloadingmodal(false);
      } else {
        console.log(error);
        settitle('something went wrong');
        setalertmodal(true);
        setloadingmodal(false);
      }
    });

  }



  return (
    <View style  = {styles.container}>
      <Text style = {styles.appname}>Get Started</Text>
      <Text style = {styles.signuptag}>Set your email address, make sure it hasn't been used here before.</Text>
      <Input
        placeholderTextColor= {white.W001}
        name = 'card-account-details-outline'
        placeholder= "Email Address"
        value = {email}
        onChangeText={(value) => setemail(value)}
        secureTextEntry = {false}
      />
      <Input
        placeholderTextColor= {white.W001}
        name = 'lock-outline'
        placeholder= "New Password"
        value = {password}
        onChangeText={(value) => setpassword(value)}
        secureTextEntry = {false}
      />
      <Input
        placeholderTextColor= {white.W001}
        name = 'lock-outline'
        placeholder= "Confirm New Password"
        value = {passconfirm}
        onChangeText={(value) => setpassconfirm(value)}
        secureTextEntry = {false}
      />
      <LoginButton
        title='Continue'
        onPress={initiateSignup}
      />
      <Pressable onPress={() => {navigation.navigate('Verify' as never)}}>
        <Text style = {[styles.signupbutton, {textAlign: 'center', fontSize: 13}]}>By signing up you understand our 
          <Text style = {{color:success.G006 }}> Terms of use </Text> and
          <Text style = {{color:success.G006}}> Conditions</Text>
        </Text>
      </Pressable>
      <LoadingModal
        visible = {loadingmodal}
        title={'Verifying TruCredit ID, please wait.'}
      />
      <AlertModal
        title= {title}
        visible = {alertmodal}
        onRequestClose={() => setalertmodal(false)}
        onPress={() => setalertmodal(false)}
      />
      <TopExit
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Verify