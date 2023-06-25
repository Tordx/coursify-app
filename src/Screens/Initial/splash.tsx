import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../../Assets/Styles'
import { calcuplus } from '../../Assets/Constants'
import Login from './login'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { firebase } from '@react-native-firebase/auth'

type Props = {
}

const Splash = (props: Props) => {

  const navigation = useNavigation()

  useEffect(() => {

    setTimeout(async() => {
     const authCredentials =  await AsyncStorage.getItem('login')
     if (authCredentials !== null) {
      const loginCredentials = JSON.parse(authCredentials);
      const email = loginCredentials.email;
      const password = loginCredentials.password;
      await firebase.auth().signInWithEmailAndPassword(email, password).then(() => navigation.navigate('Bottomtabs' as never))
     } else {
      navigation.navigate('Login' as never)
     }
    }, 500);

  },[])

  return (
    <View style = {styles.container}>
      <Image
        source={require('../../Assets/Images/loginpic.png')}
        resizeMode='contain'
        style = {styles.splashimage}
      />
    </View>
  )
}

export default Splash