import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../../Assets/Styles';
import { getAllData , Data } from '../../Library/Firebase';
import { useEffect } from 'react';




type Props = {};

interface Item {
  id: string;
  title: string;
}

const Home = (props: Props) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Data[] = await getAllData();
        // Use the retrieved data as needed
        console.log('Data:', data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.passcodetitle}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
