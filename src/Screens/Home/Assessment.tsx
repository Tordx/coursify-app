import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../../Assets/Styles'
import { errors, mode, theme } from '../../Assets/Colors'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Assessment = (props: Props) => {

  const navigation = useNavigation()


  return (
    <View style = {styles.container}>
     <Text style = {styles.assessmenttext}>
      Ready to take the Assessment?
     </Text>
     <Pressable style = {styles.getstarted} onPress={() => navigation.navigate('Questionaires' as never)}>
        <Text style = {styles.alertmodaltext}>GET STARTED</Text>
     </Pressable>
    </View>
  )
}

export default Assessment