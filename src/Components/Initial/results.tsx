import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Numpad from './numpad'
import { useSelector } from 'react-redux'
import {mode, theme} from '../../Assets/Colors'

type Props = {


}

interface data {

    calcu: {
        result : string
    }
}

const Results = (props: Props) => {

    const {result} = useSelector((action: data) => action.calcu)

    

  return (
    <View style = {{ position: 'absolute', top: 100, right: 10}}>
      <Text style = {{fontSize: 75, color: mode ? theme.light : theme.dark }}>{result}</Text>
    </View>
  )
}

export default Results