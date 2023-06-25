import React, { useState , useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../../Assets/Styles';
import { Data } from '../../Library/Firebase';
import { useSelector } from 'react-redux';
import { getSpecificData } from '../../Library/Firebase';
import { imageset } from '../../Assets/Constants';
import { useNavigation } from '@react-navigation/native';
import { errors, white } from '../../Assets/Colors';
import { TopExit } from '../../Partials/Global/buttons';

const AssessmentCourseOverview = () => {

    const [data, setdata] = useState<Data[]>([]);
    const navigation = useNavigation()

    const schooltitle = useSelector((action: Data) => action._course.schooltitle);
    console.log(schooltitle);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const currentuserdata: Data[] = await getSpecificData('realcourse','course', schooltitle as string);
            setdata(currentuserdata)
            console.log(currentuserdata);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    const imagesource = imageset[schooltitle]
    
  return (
    <View style={styles.container}>
       <ScrollView style = {{width: '100%', height: '100%',}}>
        <View style = {{width: '100%'}}>
        <Image source = {imagesource} style = {{ width: '100%', height: 300}} resizeMode='cover' />
        <Text style={{ fontSize: 50, fontFamily: 'monthe' , textAlign: 'center' , marginTop: 8 , color: errors.main, textDecorationLine: 'underline'}}>OVERVIEW</Text>
        <Text style={{ fontSize: 20, fontFamily: 'monthe' , textAlign: 'center' , marginBottom: 8 , color: white.main }}>{data.length > 0 ? data[0].school : ''}</Text>
        <Text style={{ fontSize: 50, fontFamily: 'monthe' , textAlign: 'left' , margin: 6 , color: 'white', paddingLeft: 10 }}>{schooltitle}</Text>
        <Text style={{ fontSize: 30, fontFamily: 'montel' , textAlign: 'left' , margin: 5 , marginHorizontal: 10, color: 'white' }}>{data.length > 0 ? data[0].description : ''}</Text>
        </View>
        </ScrollView>
        <TopExit
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};


export default AssessmentCourseOverview;
