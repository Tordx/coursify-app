import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../../Assets/Styles'
import { calcuplus } from '../../Assets/Constants'
import Login from './login'
import { useNavigation } from '@react-navigation/native'

type Props = {
}

const Splash = (props: Props) => {

  const navigation = useNavigation()

  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('Login' as never)
    }, 1500);

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