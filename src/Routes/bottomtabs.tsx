import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from '../../App'
import Home from '../Screens/Home/Home'
import Assessment from '../Screens/Home/Assessment'
import Results from '../Screens/Home/Results'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { black, errors, mode, theme, white } from '../Assets/Colors'
import { styles } from '../Assets/Styles'
import auth, { firebase } from '@react-native-firebase/auth';

type Props = {}

// const name = 'Juan'

const Bottomtabs = (props: Props) => {

  const user = firebase.auth().currentUser
  const name  = user?.displayName
  console.log('====================================user');
  console.log(user?.displayName);
  console.log('====================================user');


  return (
   <>
   <View style = {{height: 75, width: '100%', backgroundColor:'#248BB8', justifyContent: 'center', alignItems: 'center',}}>
    <View style = {{width: '95%', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row'}}>
      <Text style = {styles.headername}>Hello {name}! </Text>
      <View style = {styles.headerprofilecontainer}>
      <Image source={require('../Assets/Images/12.jpg')} style = {styles.headerprofile}/>
      </View>
    </View>
   </View>
   <Tabs.Navigator

   screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: { backgroundColor:  mode ? theme.dark : theme.light, borderColor: theme.accenta, height: 70 },
    tabBarIconStyle: { height: 25, justifyContent: 'center', alignItems: 'center',},
   }}
   >
        <Tabs.Screen
            name = 'Home'
            component={Home}
            options={{
              
              tabBarIcon: ({focused}) => (
                <View style = {styles.tabicon}>
                  <Icon
                    name = {focused ? 'book-open-page-variant' : 'book-open-page-variant-outline'}
                    color = {focused ? mode ? errors.main : theme.accenta : mode ? white.W003 : black.B005}
                    size = {focused ? 35 : 30}
                  />
                </View>
              )
            }}
        />
        <Tabs.Screen
            name = 'Assessment'
            component={Assessment}
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <View style = {styles.tabicon}>
                  <Icon
                    name = {focused ? 'notebook-edit' : 'notebook-edit-outline'}
                    color = {focused ? mode ? errors.main : theme.accenta : mode ? white.W003 : black.B005}
                    size = {focused ? 35 : 30}
                  />
                </View>
              )
            }}
        />
        <Tabs.Screen
            name = 'Result'
            component={Results}
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <View style = {styles.tabicon}>
                  <Icon
                    name = {focused ? 'folder-information' : 'folder-information-outline'}
                    color = {focused ? mode ? errors.main : theme.accenta : mode ? white.W003 : black.B005}
                    size = {focused ? 35 : 30}
                  />
                </View>
              )
            }}
        />
   </Tabs.Navigator>
   </>
  )
}

export default Bottomtabs