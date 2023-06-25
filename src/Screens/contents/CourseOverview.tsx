import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../Assets/Styles';
import { Data } from '../../Library/Firebase';
import { useSelector } from 'react-redux';
import { TopExit } from '../../Partials/Global/buttons';
import { useNavigation } from '@react-navigation/native';
import { imageset } from '../../Assets/Constants';
import { errors, theme, white } from '../../Assets/Colors';

const CourseOverView = () => {

    const schooltitle = useSelector((action: Data) => action._course.schooltitle);
    const navigation = useNavigation()
    const imagesource = imageset[schooltitle.course]
  return (
    <View style={styles.container}>
        <View style = {{position: 'absolute', top: 0, width: '100%'}}>
        <Image source = {imagesource} style = {{ width: '100%', height: 300}} resizeMode='cover' />
        <Text style={{ fontSize: 50, fontFamily: 'monthe' , textAlign: 'center' , marginTop: 8 , color: errors.main, textDecorationLine: 'underline'}}>OVERVIEW</Text>
        <Text style={{ fontSize: 20, fontFamily: 'monthe' , textAlign: 'center' , marginBottom: 8 , color: 'white' }}>{schooltitle.school}</Text>
        <Text style={{ fontSize: 50, fontFamily: 'monthe' , textAlign: 'left' , margin: 6 , color: 'white', paddingLeft: 10 }}>{schooltitle.course}</Text>
        <Text style={{ fontSize: 30, fontFamily: 'montel' , textAlign: 'left' , margin: 5 , color: 'white' }}>{schooltitle.description}</Text>
        </View>
        <TopExit
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default CourseOverView;
