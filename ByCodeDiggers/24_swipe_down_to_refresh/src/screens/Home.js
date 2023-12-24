import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function Home() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dataList, setdataList] = useState([]);
  const [pageNo, setpageNo] = useState(1);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setpageNo(pageNo + 1);
    await fetchApiData();
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${pageNo}/todos`,
      );
      setdataList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView
        style={{height: '100%', width: '100%'}}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => handleRefresh()}
          />
        }>
        {dataList.map((ls, i) => {
          return (
            <Text key={i} style={{marginHorizontal: 7, marginVertical: 10}}>
              {' '}
              Id = {ls.id} , Title = {ls.title}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
}
