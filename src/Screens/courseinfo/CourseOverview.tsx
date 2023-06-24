import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../Assets/Styles';
import { Data } from '../../Library/Firebase';
import { useSelector } from 'react-redux';

const CourseOverView = () => {

    const schooltitle = useSelector((action: Data) => action._course.schooltitle);
    
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' , textAlign: 'center' , margin: 13 , color: 'white' }}>Course Overview</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' , textAlign: 'center' , margin: 8 , color: 'white' }}>{schooltitle.school}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' , textAlign: 'center' , margin: 6 , color: 'white' }}>{schooltitle.course}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'normal' , textAlign: 'center' , margin: 5 , color: 'white' }}>{schooltitle.description}</Text>
    </View>
  );
};

export default CourseOverView;
