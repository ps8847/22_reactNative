import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import ContentLoader, {
  Facebook,
  Rect,
  Circle,
} from 'react-content-loader/native';
const Home = () => {
  const {height, width} = Dimensions.get('screen');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      {/* <Facebook /> // normal  */}
      {/* <Facebook height={300} width={300}/> */}
      {/* <Facebook height={300} width={width}/> // dinemic width */}

      {/* // make our manuall loader  */}
      <ContentLoader viewBox="0 0 380 70">
        <Circle cx="30" cy="30" r="30" />
        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>

      {/* // rest examples at : https://skeletonreact.com/ */}
    </View>
  );
};

export default Home;
