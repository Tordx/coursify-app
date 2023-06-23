import { View, Text, TextInput, Pressable, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from '../../Assets/Styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { black, mode, theme, transparent, white } from '../../Assets/Colors'
import SelectDropdown from 'react-native-select-dropdown'

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
type DropProps = {
  
  data: any,
  onSelect: (selectedItem: any, index: number) => void,
  buttonTextAfterSelection: (selectedItem: any, index: number) => string,
  rowTextForSelection: (item: any, index: number) => string,
  buttonStyle?: ViewStyle,
  buttonTextStyle?: TextStyle,
  name: string,
  defaultButtonText?: string,
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

export const Dropdown = (props: DropProps) => {



  return (
    <View>
    <SelectDropdown
      data={props.data}
      defaultButtonText = {props.defaultButtonText}
      onSelect={props.onSelect}
      buttonTextAfterSelection={props.buttonTextAfterSelection}
      rowTextForSelection={props.rowTextForSelection}
      buttonStyle = {[styles.logininputcontainer, {backgroundColor: '#00000000', justifyContent: 'center', height: 35}]}
      buttonTextStyle = {[styles.logininput, {alignSelf: 'flex-start', textAlign: 'left',color: mode ? white.W001 : black.B005, fontSize: 18}]}
      renderDropdownIcon = {() => (
        <View style = {{justifyContent: 'center', alignItems: 'center',}}>
            <Icon
            name = {props.name || 'blank'}
            size = {25}
            color = {mode ? theme.accenta : theme.accentb}
            style = {{top: -5, left: -5}}
          />
          </View>
      )}

    />
    </View>
  )

}