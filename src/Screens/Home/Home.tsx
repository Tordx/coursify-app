import React, { useState } from 'react';
import { View, Text, FlatList, ImageBackground, Pressable, Image } from 'react-native';
import { styles } from '../../Assets/Styles';
import { getAllData , Data } from '../../Library/Firebase';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getSpecificData } from '../../Library/Firebase';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setcourse } from '../../Library/Redux-actions/courseslice';
import { setschooltitle } from '../../Library/Redux-actions/courseslice';
import { imageset } from '../../Assets/Constants';
import { errors, theme, white } from '../../Assets/Colors';
const Home = () => {

  const [data, setData] = useState<Data[]>([]);
  const navigation = useNavigation()
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const retrievedData: Data[] = await getAllData('course');
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
      const data: Data[] = await getSpecificData('realcourse', 'school', item.school);
      dispatch(setcourse(data))
      dispatch(setschooltitle(item))
      navigation.navigate('Courselist' as never)
      console.log('Data:', data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
    

  };

  const renderItem = ({ item }: { item: Data }) => {
    
  const imagesource = imageset[item.school]
    return (
       <Pressable onPress={() => handleItemClick(item)}  style = {styles.homecontent}>
        <Image source={imagesource} style = {styles.imagecontainer} resizeMode='cover'/>
        <Text style={{ textShadowRadius: 5, textShadowColor: theme.accentd, position: 'absolute', fontSize: 20, fontFamily: 'monthe' , textAlign: 'center' , padding: 10 , color: white.main }}>{item.school}</Text>
      </Pressable>
  )};

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontFamily: 'monthe', textAlign: 'center' , marginBottom: 10 , color: errors.main }}>SCHOOL LIST</Text>
      <FlatList
      style = {{width: '100%', height: '100%'}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.school}
      />
    </View>
  );
};

export default Home;
