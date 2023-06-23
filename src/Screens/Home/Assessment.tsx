import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../../Assets/Styles'
import { errors, mode, theme } from '../../Assets/Colors'

type Props = {}

const Assessment = (props: Props) => {
  return (
    <View style = {styles.container}>
     <Text style = {styles.assessmenttext}>
      Ready to take the Assessment?
     </Text>
     <Pressable style = {{width: '40%', justifyContent: 'center', alignItems: 'center', height: 50, elevation: 5, borderRadius: 15, backgroundColor: mode ? errors.main : theme.secondary}}>
        <Text style = {styles.alertmodaltext}>GET STARTED</Text>
     </Pressable>
    </View>
  )
}

export default Assessment