import { ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../Assets/Styles'
import { getSpecificData, getAllData, Data } from '../../Library/Firebase'
import { FlatList } from 'react-native-gesture-handler'
import { firebase } from '@react-native-firebase/auth'
import { errors, theme, white } from '../../Assets/Colors'
import { useNavigation } from '@react-navigation/native'
import { LoadingModal } from '../../Partials/Global/modals'

type Props = {}

const Results = (props: Props) => {

  const [loading, setloading] = useState(false);
  const [data, setdata] = useState<Data[]>([]);
  const [userdata, setuserdata] = useState<Data[]>();
  const uid = firebase.auth().currentUser?.uid
  const navigation = useNavigation()
  
  const fetchData = async () => {
    console.log(uid);
    
    try {
      setloading(true)
      const retrievedData: Data[] = await getAllData('assessment');
      const currentuserdata: Data[] = await getSpecificData('Users','userid', uid as string);
      setdata(retrievedData);
      setuserdata(currentuserdata)
      console.log(currentuserdata);
      
      setloading(false)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const handlePRess = (item: Data) => {

  }

  const renderedItem = ({item}: {item: Data}) => {
    return(
      <>
      {data ? 
      <View>
              {
              Object.entries(data[0].schools).map(([key, [string, number]], index) => {
                const keyString = key;
                const numberValue = string;
                return (
                  <Text
                    key={index}
                    style={styles.resulttext}
                  >{numberValue}
                  </Text>
                );
              })}
      </View>
      : <View><ActivityIndicator size={100} color={white.W001} /></View>
      }
      </>

    )
  }
  return (
    <View style = {styles.container}>
        <View style = {{width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: theme.secondary}}>
      <Text style = {[styles.assessmenttext, {color: errors.main}]}>ASSESSMENT RESULTS</Text>
      <Text style = {styles.descriptiontext}>Here are the top 2 choice of course to enroll to based on the result of your assessment</Text>
    </View>
      <FlatList
      style = {{marginTop: 25}}
      data = {data}
      renderItem={renderedItem}
      keyExtractor={(item) => item.userid}

      />
    <Pressable style = {[styles.getstarted, {marginBottom: 30}]} onPress={() => {navigation.navigate('Questionaires' as never)}}>
          <Text style = {[styles.alertmodaltext, {fontFamily: 'monthe'}]}>RETAKE</Text>
        </Pressable>
        <LoadingModal
        visible = {loading}
        title = 'Checking Results'
     />
    </View>
  )
}

export default Results