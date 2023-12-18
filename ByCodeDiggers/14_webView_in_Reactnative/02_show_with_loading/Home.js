import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import ProgressBar from 'react-native-progress/Bar';
import {useState} from 'react';

export default function Home() {
  const [progress, setprogress] = useState(0);
  const [isLoaded, setisLoaded] = useState(false);
  return (
    <View style={{flex: 1}}>
      {!isLoaded && <ProgressBar progress={progress} width={null} />}

      <WebView
        source={{uri: 'https:www.amazon.com'}}
        onError={e => alert(`WebView Error : ${e.nativeEvent.description}`)}
        onLoadProgress={e => setprogress(e.nativeEvent.progress)}
        onLoadEnd={() => setisLoaded(true)}
      />
    </View>
  );
}
