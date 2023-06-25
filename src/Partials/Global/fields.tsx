import { View, Text, TextInput, Pressable, ViewStyle, TextStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../Assets/Styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { black, mode, theme, transparent, white } from '../../Assets/Colors'
import SelectDropdown from 'react-native-select-dropdown'
import { Radio } from './buttons'

type Props = {

    onChangeText?: (value: string) => void,
    value?: string,
    placeholder?: string,
    placeholderTextColor: string,
    name?: string,
    secureTextEntry: boolean,
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

type QuestionsProps = {

  onValueChange?: (newValue: string) => void,
  question?: string,
  courseIndex?: number,


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
      buttonTextStyle = {[styles.logininput, {alignSelf: 'flex-start', textAlign: 'left',color: white.W001, fontSize: 18}]}
      renderDropdownIcon = {() => (
        <View style = {{justifyContent: 'center', alignItems: 'center',}}>
            <Icon
            name = {props.name || 'blank'}
            size = {25}
            color = {theme.accenta }
            style = {{top: -5, left: -5}}
          />
          </View>
      )}

    />
    </View>
  )

};

export const Questions = (props: QuestionsProps) => {

  
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const [fourth, setfourth] = useState(false);
  const [fifth, setfifth] = useState(false);
  const [value, setvalue] = useState('');

  const handleValueChange = (selectedOption: string) => {
    setvalue(selectedOption);
    setfirst(selectedOption === "1");
    setsecond(selectedOption === "2");
    setthird(selectedOption === "3");
    setfourth(selectedOption === "4");
    setfifth(selectedOption === "5");
    props.onValueChange ? props.onValueChange(selectedOption) : null;
  };


  return (
    <View style = {{justifyContent: 'center', alignItems: 'center', width: '100%'}}>
    <View style = {{justifyContent: 'flex-start', alignItems: 'flex-start', width: '95%'}}>
    <Text style = {[styles.alertmodaltext, {textAlign: 'left', marginVertical: 10, marginHorizontal: 10}]}>{props.question}</Text>
    </View>
    <View style = {{
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      marginBottom: 20,
      paddingBottom: 10,
      borderBottomWidth: .5,
      borderColor: theme.accentd

    }} >
      <Radio

          pressed = {first}
          onPress={() => { handleValueChange("1")}}
          tag='1'
      
      />
      <Radio 
      
          pressed = {second}
          onPress={() => { handleValueChange("2")}}
          tag='2'
      
      />
      <Radio 
      
      pressed = {third}
          onPress={() => { handleValueChange("3")}}
          tag='3'
      
      />
      <Radio 
      
          pressed = {fourth}
          onPress={() => { handleValueChange("4")}}
          tag='4'
      
      />
      <Radio 
      
      pressed = {fifth}
          onPress={() => { handleValueChange('5')}}
          tag='5'
      
      />
    </View>
    </View>
  )
}