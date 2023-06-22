import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../../Assets/Styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { mode, theme } from '../../Assets/Colors'

type Props = {

    onChangeText?: (value: string) => void,
    value?: string,
    placeholder?: string,
    placeholderTextColor: string,
    name?: string,
    secureTextEntry?: boolean,
    secu?: string,
    onPress?: (value: any) => void,
    autoComplete?: string,

}

export const Input = (props: Props) => {
  return (
    <View style = {styles.logininputcontainer}>
      <Icon
        name = {props.name || 'blank'}
        size = {25}
        color = {mode ? theme.accenta : theme.accentb}
        style = {styles.loginicon}
      />
      <TextInput
        placeholderTextColor={props.placeholderTextColor}
        placeholder= {props.placeholder}
        style = {styles.logininput}
        value = {props.value}
        onChangeText={props.onChangeText}
        secureTextEntry = {props.secureTextEntry}
        autoCapitalize = 'none'
        autoCorrect = {false}
      />
      <Pressable 
        
        style = {styles.secuicon}
        onPress={props.onPress}
      
      >
       <Icon
        name = {props.secu || 'blank'}
        size = {23}
        color = {mode ? theme.accenta : theme.accentb}
        style = {styles.secuicon}
      />
      </Pressable>
    </View>
  )
}