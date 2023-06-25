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
import { getAllData , getSpecificData } from '../../Library/Firebase'
import { LoadingModal } from '../../Partials/Global/modals'
type Props = {}

interface Data{

}
const Assessment = (props: Props) => {

  const navigation = useNavigation()
  const [loading, setloading] = useState(false)
  const [taken, settaken] = useState<boolean>(false);
  // const [data, setdata] = useState<Data[]>([]);
  const uid = firebase.auth().currentUser?.uid

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true)
        const currentuserdata: Data[] = await getSpecificData('assessment','userid', uid as string);
        if(currentuserdata.length !== 0){
          settaken(true)
        }
        console.log('====================================currentuserdata');
        console.log(currentuserdata.length);
        console.log('====================================currentuserdata');
        // setdata(currentuserdata);
        // settaken(currentuserdata.length === 0);
        setloading(false)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <View style = {styles.container}>
     {taken ?  <>
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