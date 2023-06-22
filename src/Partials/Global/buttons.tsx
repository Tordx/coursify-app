import { View, Text, Pressable, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from '../../Assets/Styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { black, errors, mode, theme, white } from '../../Assets/Colors'
type Props = {

    numbers?: string,
    onPress?: (e: any) => void,
    name?: string,
    style?: ViewStyle,
    title?: string,


}


const backgroundmode = mode;

export const NumpadButton = (props: Props) => {

  return (
    <Pressable
        android_ripple = {{
          borderless: true,
          color: backgroundmode ? theme.light : theme.dark
        }}
        style = {[styles.passcodekeys, props.style]}
        onPress={props.onPress}
    >
      <Text style = {styles.passcodekeytext}>{props.numbers}</Text>
    </Pressable>
  )
}

export const IconButton = (props: Props) => {

  
  return (
    <Pressable
        android_ripple = {{
          borderless: true,
          color: backgroundmode ? errors.A001 : errors.A001
        }}
        style = {styles.passcodekeys}
        onPress={props.onPress}
    >
      <Icon
        name = {props.name || ''}
        color={backgroundmode ? white.W002 : black.B002}
        size={30}
      />
    </Pressable>
  )
}

export const LoginButton = (props: Props) => {

  return (
    <View style = {styles.loginbutton}>
    <Pressable
    android_ripple = {{
      borderless: false,
      radius: 125,
      color: backgroundmode ? theme.light : theme.dark
    }}
    onPress={props.onPress}
    >
      <Text style = {styles.loginbuttontitle}>{props.title}</Text>
    </Pressable>
    </View>
)

}

export const TopExit = (props: Props) => {

  return (
  <Pressable
        android_ripple = {{
          borderless: true,
          color: backgroundmode ? theme.accenta : theme.accenta
        }}
        style = {styles.exitbutton}
        onPress={props.onPress}
    >
      <Icon
        name = 'chevron-left'
        color={backgroundmode ? white.W002 : black.B002}
        size={35}
      />
    </Pressable>
  )
}