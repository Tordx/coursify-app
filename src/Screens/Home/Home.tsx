import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../../Assets/Styles';
import { getAllData , Data } from '../../Library/Firebase';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAllCourse } from '../../Library/Firebase';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setcourse } from '../../Library/Redux-actions/courseslice';
import { setschooltitle } from '../../Library/Redux-actions/courseslice';

const Home = () => {

  const [data, setData] = useState<Data[]>([]);
  const navigation = useNavigation()
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const retrievedData: Data[] = await getAllData();
        setData(retrievedData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleItemClick = async (item: Data) => {
    // Execute your desired function or code when an item is clicked
    try {
      const data: Data[] = await getAllCourse(item.school);
      dispatch(setcourse(data))
      dispatch(setschooltitle(item))
      navigation.navigate('Courselist' as never)
      console.log('Data:', data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
    

  };

  const renderItem = ({ item }: { item: Data }) => (
    <View>
       <TouchableOpacity onPress={() => handleItemClick(item)}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' , textAlign: 'center' , margin: 10 , color: 'white' }}>{item.school}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' , textAlign: 'center' , margin: 10 , color: 'white' }}>Courses</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.school}
      />
    </View>
  );
};

export default Home;
