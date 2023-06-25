import React, { useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { styles } from '../../Assets/Styles';
import { Data } from '../../Library/Firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setschooltitle } from '../../Library/Redux-actions/courseslice';
import { imageset, school } from '../../Assets/Constants';
import { errors, theme, white } from '../../Assets/Colors';
import { TopExit } from '../../Partials/Global/buttons';


const Courselist = () => {

  
    const course = useSelector((action: Data) => action._course.course);
    const schooltitle = useSelector((action: Data) => action._course.schooltitle);

    const dispatch = useDispatch()

    const navigation = useNavigation()
    
  const handleItemClick = async (item: Data) => {

    dispatch(setschooltitle(item))
    navigation.navigate('CourseOverview' as never)

  };

  // const renderItem = ({ item }: { item: Data }) =>  {
    
  //   const imagesource = imageset[item.course]
  //     return (
 
  //   )};
    

const renderItem = ({ item }: { item: Data }) => {

  const imagesource = imageset[item.course]
  return(
  
    <View>
          <Pressable onPress={() => handleItemClick(item)}  style = {styles.homecontent}>
          <Image source={imagesource} style = {styles.imagecontainer} resizeMode='cover'/>
          <Text style={{ textShadowRadius: 5, textShadowColor: theme.accentd, position: 'absolute', fontSize: 20, fontFamily: 'monthe' , textAlign: 'center' , paddingHorizontal: 30 , color: white.main }}>{item.course}</Text>
        </Pressable>

    </View>
  );}
  
  return (
    <View style={styles.container}>
    <Text style={{ fontSize: 50, fontFamily: 'monthe', textAlign: 'center' , margin: 10 , color: errors.W001 }}>SCHOOLS</Text>
    <Text style={{ fontSize: 20, fontFamily: 'monthe', textAlign: 'center' , margin: 10 , color: 'white' }}>{schooltitle.school}</Text>
    <FlatList
    style = {{width: '100%', height: '100%'}}
      data={course}
      renderItem={renderItem}
      keyExtractor={(item) => item.school}
    />
    <TopExit
        onPress={() => navigation.goBack()}
      />
  </View>
  );
};

export default Courselist;
