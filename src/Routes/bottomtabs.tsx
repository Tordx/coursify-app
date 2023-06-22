import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from '../../App'
import Home from '../Screens/Home/Home'

type Props = {}

const Bottomtabs = (props: Props) => {
  return (
   <>
   <Tabs.Navigator>
        <Tabs.Screen
            name = 'Home'
            component={Home}
        />
   </Tabs.Navigator>
   </>
  )
}

export default Bottomtabs