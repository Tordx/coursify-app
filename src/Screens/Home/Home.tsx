import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../../Assets/Styles';
import { getAllData } from '../../Library/Firebase';
import { useEffect } from 'react';




type Props = {};

interface Item {
  id: string;
  title: string;
}

const Home = (props: Props) => {

  useEffect(() => {
  
    getAllData
  }, [])

  const [data, setData] = useState<Item[]>([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ]);

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
