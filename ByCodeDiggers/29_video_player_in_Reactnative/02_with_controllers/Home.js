import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-controls';

export default function Home() {
  return (
    <View style={{flex: 1}}>
 
      <VideoPlayer
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        // navigator={this.props.navigator} // on click of the back button in video where it should go we can pass it here
      />
    </View>
  );
}
