import React, { useState , useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../Assets/Styles';
import { Data } from '../../Library/Firebase';
import { useSelector } from 'react-redux';
import { getSpecificData } from '../../Library/Firebase';

const AssessmentCourseOverview = () => {

    const [data, setdata] = useState<Data[]>([]);


    const schooltitle = useSelector((action: Data) => action._course.schooltitle);
    console.log('====================================schooltitle');
    console.log(schooltitle);
    console.log('====================================schooltitle');

    useEffect(() => {
        const fetchData = async () => {
          try {
            // setloading(true)
            const currentuserdata: Data[] = await getSpecificData('realcourse','course', schooltitle as string);
            // if(currentuserdata.length !== 0){
            //   settaken(true)
            // }
            setdata(currentuserdata)
            console.log('====================================currentuserdata');
            console.log(currentuserdata);
            console.log('====================================currentuserdata');
            // setdata(currentuserdata);
            // settaken(currentuserdata.length === 0);
            // setloading(false)
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

//  console.log('====================================data');
//  console.log(data[0].description);
//  console.log('====================================data');
    
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' , textAlign: 'center' , margin: 13 , color: 'white' }}>Assessment Course Overview</Text>
        <Text style={{ fontSize: 20, fontWeight: 'normal' , textAlign: 'center' , margin: 5 , color: 'white' }}>{data.length > 0 ? data[0].school : ''}</Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold' , textAlign: 'center' , margin: 6 , color: 'white' }}>{schooltitle}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'normal' , textAlign: 'center' , margin: 5 , color: 'white' }}>{data.length > 0 ? data[0].description : ''}</Text>

    </View>
  );
};

export default AssessmentCourseOverview;
