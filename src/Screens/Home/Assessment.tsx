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
type Props = {}

interface Collection {
  Time: object;
  displayName: string;
  schools: object;
  totalscores: number;
  userid: string;
}

const Assessment = (props: Props) => {

  const navigation = useNavigation()
  const [checkdata, setcheckdata] = useState(false);
  const id = firebase.auth().currentUser
  const [collections, setCollections] = useState<Collection[]>([]);

  const getdata = async() => {
    const data = await firestore().collection('assessment').where('userid', '==', id?.uid).get()

    const collections: Collection[] = [];
    data.forEach((doc: any) => {
      const collection = doc.data();
      collections.push(collection);
    });
    setCollections(collections)
    
  }

  useEffect(() => {
    getdata()
    if (collections) {
      setcheckdata(true)
    } else {
      setcheckdata(false)
    }
    
  },[])
  return (
    <View style = {styles.container}>
     {checkdata ?  <><Text> {collections[0]?.userid} </Text></> :  <><Text style = {styles.assessmenttext}>
      Ready to take the Assessment?
     </Text>
     <Pressable style = {styles.getstarted} onPress={() => {navigation.navigate('Questionaires' as never)}}>
        <Text style = {styles.alertmodaltext}>GET STARTED</Text>
     </Pressable></>}
    </View>
  )
}

export default Assessment