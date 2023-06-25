import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../Assets/Styles'
import { errors, mode, theme } from '../../Assets/Colors'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setschooling } from '../../Library/Redux-actions/schoolingslice'
import { school } from '../../Assets/Constants'
import firestore from '@react-native-firebase/firestore'
import { firebase } from '@react-native-firebase/auth'
import { getAllData } from '../../Library/Firebase'
import { LoadingModal } from '../../Partials/Global/modals'
type Props = {}

interface Data{

}
const Assessment = (props: Props) => {

  const navigation = useNavigation()
  const [loading, setloading] = useState(false)
  const [data, setdata] = useState<Data[]>([]);
  const id = firebase.auth().currentUser

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true)
        const retrievedData: Data[] = await getAllData('assessment');
        setdata(retrievedData);
        setloading(false)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <View style = {styles.container}>
     {data ?  <>
     <Text style = {styles.assessmenttext}>You already took the assessment
     </Text>
     <View style = {{width: '90%', paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
     <Pressable style = {styles.getstarted} onPress={() => { navigation.navigate('Result' as never)}}>
        <Text style = {[styles.alertmodaltext, {fontFamily: 'monthe'}]}>VIEW RESULT</Text>
     </Pressable>
     <Pressable style = {styles.getstarted} onPress={() => {navigation.navigate('Questionaires' as never)}}>
        <Text style = {[styles.alertmodaltext, {fontFamily: 'monthe'}]}>RETAKE</Text>
     </Pressable>
     </View>
     </>
     :  
     <><Text style = {styles.assessmenttext}>
      Ready to take the Assessment?
     </Text>
     <Pressable style = {styles.getstarted} onPress={() => {navigation.navigate('Questionaires' as never)}}>
        <Text style = {[styles.alertmodaltext, {fontFamily: 'monthe'}]}>GET STARTED</Text>
     </Pressable></>}
     <LoadingModal
        visible = {loading}
        title = 'Checking Assessment status'
     />
    </View>
  )
}

export default Assessment