import { View, Text, Image, BackHandler, TouchableOpacity } from 'react-native'
import React from 'react'
import { Tabs } from '../../App'
import Home from '../Screens/Home/Home'
import Assessment from '../Screens/Home/assessment'
import Results from '../Screens/Home/results'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { black, errors, mode, theme, white } from '../Assets/Colors'
import { styles } from '../Assets/Styles'
import auth, { firebase } from '@react-native-firebase/auth';
import { useFocusEffect } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

type Props = {}

// const name = 'Juan'

const Bottomtabs = (props: Props) => {

  const navigation = useNavigation()

  const user = firebase.auth().currentUser
  const name  = user?.displayName

  useFocusEffect(() => {
    const Back = () => {
      BackHandler.exitApp();
      return true
    };
    const handler = BackHandler.addEventListener('hardwareBackPress', Back);
    return () => handler.remove();
  })
  const logout = async() => {

    try {
      await auth().signOut();
      navigation.navigate('Login' as never)
      console.log('User logged out successfully');
      // Perform any additional logout logic or navigation here
    } catch (error) {
      console.log('Error logging out:', error);
    }
  }


  return (
   <>
   <View style = {{height: 75, width: '100%', backgroundColor: theme.dark, justifyContent: 'center', alignItems: 'center',}}>
    <View style = {{width: '95%', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row'}}>
      <Text style = {styles.headername}>Hello {name}! </Text>
      <View style = {styles.headerprofilecontainer}>
      <TouchableOpacity onPress={logout}  style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon name="logout" size={30} color="white" style={{ marginRight: 8 }} />
      {/* <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Logout</Text> */}
    </TouchableOpacity>
      </View>
    </View>
   </View>
   <Tabs.Navigator

   screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: { backgroundColor:theme.dark, borderColor: theme.accenta, height: 70 },
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
                    color = {focused ? errors.main : theme.accenta}
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
                    color = {focused ? errors.main : theme.accenta}
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
                    color = {focused ? errors.main : theme.accenta}
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