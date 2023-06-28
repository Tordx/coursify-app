import { ActivityIndicator, Pressable, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../Assets/Styles'
import { getSpecificData, getAllData, Data } from '../../Library/Firebase'
import { FlatList } from 'react-native-gesture-handler'
import { firebase } from '@react-native-firebase/auth'
import { errors, theme, white } from '../../Assets/Colors'
import { useNavigation } from '@react-navigation/native'
import { LoadingModal } from '../../Partials/Global/modals'
import { useDispatch } from 'react-redux'
import { setschooltitle } from '../../Library/Redux-actions/courseslice'

type Props = {}

const Results = (props: Props) => {

  const [loading, setloading] = useState(false);
  const [refreshing, setrfreshing] = useState(false)
  const [taken, settaken] = useState(false)
  const [data, setdata] = useState<Data[]>([]);
  const [userdata, setuserdata] = useState<Data[]>();
  const uid = firebase.auth().currentUser?.uid
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  const fetchData = async () => {
    console.log(uid);
    
    try {
      setloading(true)
      const currentuserdata: Data[] = await getSpecificData('assessment','userid', uid as string);
      setdata(currentuserdata);
      if(currentuserdata.length !== 0){
        settaken(true)
      }
      console.log(currentuserdata);
      setloading(false)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData();
    console.log(userdata);
    
  }, []);

  const refreshdata = () => {
    setrfreshing(true)
    fetchData()
    setrfreshing(false)
  }

  const handleItemClick = async (item: string) => {
    // Execute your desired function or code when an item is clicked
    console.log(item);
    dispatch(setschooltitle(item))
    navigation.navigate('AssessmentCourseOverview' as never)

  };

  const renderedItem = ({item}: {item: Data}) => {
    return(
      <>
      
              {
              Object.entries(data[0].schools).map(([key, [string, number]], index) => {
                const keyString = key;
                const numberValue = string;
                return (
                  <Pressable style = {{justifyContent: 'center', alignItems: 'center', width: '100%'}} onPress={() => handleItemClick(numberValue)}>
                  <Text
                    key={index}
                    style={styles.resulttext}
                  >{numberValue}
                  </Text>
                  </Pressable>
                );
              })}
    
      </>

    )
  }
  return (
    <View style = {styles.container}>
        <View style = {{width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: theme.secondary}}>
      <Text style = {[styles.assessmenttext, {color: errors.main}]}>ASSESSMENT RESULTS</Text>
      <Text style = {styles.descriptiontext}>Base on the result of your assessment, Here are the top 2 choice of course to enroll to.</Text>
    </View>
      <FlatList
      style = {{width: '100%'}}
      data = {data}
      renderItem={renderedItem}
      keyExtractor={(item) => item.uid}
      refreshControl={
        <RefreshControl
          onRefresh={refreshdata}
          refreshing = {refreshing}
        />
      }

      />
       {taken ? <Pressable style = {[styles.getstarted, {marginBottom: 30}]} onPress={() => {navigation.navigate('Questionaires' as never)}}>
          <Text style = {[styles.alertmodaltext, {fontFamily: 'monthe'}]}>RETAKE</Text>
        </Pressable> : 
        <>
         <Text style = {[styles.assessmenttext, {color: white.W001}]}>NO RESULTS: YOU HAVE NOT TAKEN THE ASSESSMENT YET</Text>
        <Pressable style = {[styles.getstarted, {marginBottom: 30}]} onPress={() => {navigation.navigate('Questionaires' as never)}}>
        <Text style = {[styles.alertmodaltext, {fontFamily: 'monthe'}]}>GET STARTED</Text>
        </Pressable> 
      </>
      }
        <LoadingModal
        visible = {loading}
        title = 'Checking Results'
     />
    </View>
  )
}

export default Results