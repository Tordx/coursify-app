import { View, Text, Pressable, AppState, Switch } from 'react-native'
import React, { useEffect, useRef, useState,  } from 'react'
import { styles } from '../../Assets/Styles'
import { useSelector } from 'react-redux'
import { firebase } from '@react-native-firebase/auth'
import { AlertModal, ButtonModal, LoadingModal, SuccessModal } from '../../Partials/Global/modals'
import { Dropdown, Input } from '../../Partials/Global/fields'
import { black, mode, theme, white, success } from '../../Assets/Colors'
import { LoginButton, TopExit } from '../../Partials/Global/buttons'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { openEmailApp } from '../../Library/Functions'
import { genders, strand } from '../../Assets/Constants'
import { info } from '../../Library/Firebase'


type Props = {}

const successstate = success

const Signup = (props: Props) => {

  const [modal, setmodal] = useState(false);
  const [vermodal, setvermodal] = useState(false)
  const [alert, setalert] = useState(false);
  const [success, setsuccess] = useState(false);
  const [title, settitle] = useState('')
  const appState = useRef(AppState.currentState);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [gender, setgender] = useState('');
  const [strands, setStrands] = useState('');
  const navigation = useNavigation();
  const [time, settime] = useState(30);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const user = firebase.auth().currentUser;


  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        if(nextAppState === 'active'){
          if(!user?.emailVerified){
            setvermodal(true)
            settime(0)
            setmodal(false)
          }
        }
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setmodal(true)
      if (user) {
        user.reload().then(() => {
          setTimeout(() => {
            if (user.emailVerified) {
              console.log('verified');
              setmodal(false);
              settitle('Email Successfully Verified')
              setsuccess(true)
            } else {
              setvermodal(true)
              setmodal(false)
            }
          }, 2000);
        });
      }
    });

    return () => unsubscribe();
  }, []);

  useFocusEffect(() => {
  if(time < 31) {
  timecount(1000)
  }
  console.log(time);
   return
})


const timecount = (count: number) => {
  
  setTimeout(() => {
    settime((count) => {
    if (count > 0) 
      return count - 1;

    else return 0;

    })
  }, count);
}


  const checkAuth = () => {
    console.log('I am Pressed');
    
    setmodal(true);
    if (user && user.emailVerified) {
      settitle('Email successfully verified')
      setsuccess(true)
      setvermodal(false)
      return
    } else {
      settitle('not yet verified')
      setvermodal(true)
      setsuccess(false)
      setmodal(false)
      setalert(true)
    }
  };

  const reverify = () => {
    
    settime(31)
    user?.sendEmailVerification()
  } 

  return (
    <View style = {styles.container}>
      <Text style = {styles.vermodaltitle}>SET UP YOUR ACCOUNT</Text>
      <Text style = {[styles.signupbutton, {justifyContent: 'center', textAlign: 'center'}]}>Amazing! you have successfully verified your email, now finish up the sign up process to use the app!</Text>
     <Input
        placeholderTextColor= {mode ? white.W001 : black.B005}
        name = 'account-tie'
        placeholder= "First Name"
        value = {firstname}
        onChangeText={(value) => setfirstname(value)}
      />
     <Input
        placeholderTextColor= {mode ? white.W001 : black.B005}
        name = 'account-tie-outline'
        placeholder= "Last Name"
        value = {lastname}
        onChangeText={(value) => setlastname(value)}
      />
      
      <Dropdown
        name = 'checkbox-blank-circle-outline'
        defaultButtonText = 'Gender'
        data={genders}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
          setgender(selectedItem)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
      />
      <Dropdown
        name = 'school-outline'
        defaultButtonText = 'Strand'
        data={strand}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
          setStrands(selectedItem)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
      />
      <LoginButton
        title='SIGN UP'
        onPress={() => info(firstname , lastname, gender,  strands ,  navigation )}
      />
      <LoadingModal
        title='Checking email verification status'
        visible = {modal}
      />
      <ButtonModal
        disabled = {time > 0 ? true : false}
        email= {user?.email || ''}
        visible = {vermodal}
        onPress={openEmailApp}
        Resend={reverify}
        Refresh={checkAuth}
        time = {time}
      />
      <SuccessModal
        title = {title}
        visible = {success}
        onPress={() => setsuccess(false)}
      />
      <Pressable onPress={() => {navigation.navigate('Verify' as never)}}>
        <Text style = {[styles.signupbutton, {textAlign: 'center', fontSize: 13}]}>By signing up you understand our 
          <Text style = {{color: mode ? successstate.G006 : successstate.G002}}> Terms of use </Text> and
          <Text style = {{color: mode ? successstate.G006 : successstate.G002}}> Conditions</Text>
        </Text>
      </Pressable>
      <TopExit
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Signup