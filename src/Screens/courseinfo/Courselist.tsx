import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../../Assets/Styles';
import { Data } from '../../Library/Firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setschooltitle } from '../../Library/Redux-actions/courseslice';


const Courselist = () => {


    const course = useSelector((action: Data) => action._course.course);
    const schooltitle = useSelector((action: Data) => action._course.schooltitle);

    const dispatch = useDispatch()

    const navigation = useNavigation()
    
  const handleItemClick = async (item: Data) => {
    // Execute your desired function or code when an item is clicked
    console.log('====================================item');
    console.log(item);
    dispatch(setschooltitle(item))
    console.log('====================================item');
    navigation.navigate('CourseOverview' as never)

  };

const renderItem = ({ item }: { item: Data }) => (
    <View>
      <TouchableOpacity onPress={() => handleItemClick(item)}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' , textAlign: 'center' , marginTop: 10, color: 'white' }}>{item.course}</Text>
        <Text style={{ fontSize: 16 , textAlign: 'center' , color: 'white' }}>{item.description}</Text>
      </TouchableOpacity>

    </View>
  );
  
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' , textAlign: 'center' , margin: 10, color: 'white' }}>Definition</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' , textAlign: 'center' , margin: 10, color: 'white' }}>{schooltitle.school}</Text>
      <FlatList
        data={course}
        renderItem={renderItem}
        keyExtractor={(item) => item.course}
      />
    </View>
  );
};

export default Courselist;
