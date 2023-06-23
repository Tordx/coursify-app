import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Assets/Styles'
import { Radio, TopExit } from '../Partials/Global/buttons'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Questionaires = (props: Props) => {
    const navigation = useNavigation();
    const [first, setfirst] = useState(false)
    const [second, setsecond] = useState(false);
    const [third, setthird] = useState(false);
    const [fourth, setfourth] = useState(false);
    const [fifth, setfifth] = useState(false);
  return (
    <View style = {styles.container}>
      <Text style = {[styles.assessmenttext, {top: 10, position: 'absolute', fontSize: 50}]}>Assessment</Text>
      <View style = {{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',

      }} >
        <Radio

            pressed = {first}
            onPress={() => setfirst(!first)}
            tag='1'
        
        />
        <Radio 
        
            pressed = {second}
            onPress={() => setsecond(!second)}
            tag='2'
        
        />
        <Radio 
        
        pressed = {third}
            onPress={() => setthird(!third)}
            tag='3'
        
        />
        <Radio 
        
            pressed = {fourth}
            onPress={() => setfourth(!fourth)}
            tag='4'
        
        />
        <Radio 
        
        pressed = {fifth}
            onPress={() => setfifth(!fifth)}
            tag='5'
        
        />
      </View>
      <TopExit
            onPress={() => {navigation.goBack()}}
        />
    </View>
  )
}

export default Questionaires