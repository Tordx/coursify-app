import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from '../../App'
import Splash from '../Screens/Initial/splash'
import Login from '../Screens/Initial/login'
import Create from '../Screens/Signup/verify'
import { CardStyleInterpolators } from '@react-navigation/stack';
import Verify from '../Screens/Signup/verify'
import Signup from '../Screens/Signup/signup'
import Bottomtabs from './bottomtabs'
import Reset from '../Screens/Initial/reset'
import Questionaires from '../Screens/questionaires'

type Props = {}

const Stacks = (props: Props) => {



  return (
    <Stack.Navigator>
      <Stack.Screen
        name = 'Splash'
        component = {Splash}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name = 'Login'
        component = {Login}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name = 'Verify'
        component = {Verify}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name = 'Signup'
        component = {Signup}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name = 'Bottomtabs'
        component = {Bottomtabs}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name = 'Reset'
        component = {Reset}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name = 'Questionaires'
        component = {Questionaires}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  )
}

export default Stacks