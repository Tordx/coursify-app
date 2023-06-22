import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Stacks from "./src/Routes/stacks";
import { StatusBar } from "react-native";
import { mode, theme } from "./src/Assets/Colors";
import { Provider } from "react-redux";
import store from "./src/Library/Redux-actions/store";

export const Stack = createStackNavigator();
export const Tabs = createBottomTabNavigator();

function App (){

  return (
    <Provider store  = {store}>
    <NavigationContainer>
      <StatusBar backgroundColor={mode ? theme.dark : theme.light} barStyle={mode ? 'light-content' : 'dark-content'} />
      <Stacks/>
    </NavigationContainer>
    </Provider>
  )

}

export default App;