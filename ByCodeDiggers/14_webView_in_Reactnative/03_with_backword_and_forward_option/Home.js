import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import ProgressBar from 'react-native-progress/Bar';
import {useState} from 'react';
import Ionicons from "react-native-vector-icons/Ionicons"
import { useRef } from 'react';
export default function Home() {

  const webviewRef = useRef();

  const [progress, setprogress] = useState(0);
  const [isLoaded, setisLoaded] = useState(false);

  const [canGoBack , setcanGoBack] = useState(false)
  const [canGoForward , setcanGoForward] = useState(false)
  const [title , setTitle] = useState("")

  const HandlegoBack = () => {
    webviewRef.current.goBack()
  }
  const HandlegoForward = () => {
    webviewRef.current.goForward()
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection:"row" , justifyContent:"space-between" , padding:10}}>
        <Text>{title}</Text>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity disabled={!canGoBack} onPress={() => HandlegoBack()}>
          <Ionicons name="arrow-back" size={25} style={{marginRight:10}} color={canGoBack ? "#000" : "rgba(0,0,0,0.3)"}/>
          </TouchableOpacity>
          <TouchableOpacity disabled={!canGoForward} onPress={() => HandlegoForward()} >
          <Ionicons name="arrow-forward" size={25} color={canGoForward ? "#000" : "rgba(0,0,0,0.3)"}/>
          </TouchableOpacity>
        </View>
      </View>

      {!isLoaded && <ProgressBar progress={progress} width={null} />}

      <WebView
      ref={webviewRef}
        source={{uri: 'https:www.google.com'}}
        onError={e => alert(`WebView Error : ${e.nativeEvent.description}`)}
        onLoadProgress={e => setprogress(e.nativeEvent.progress)}
        onLoadEnd={() => setisLoaded(true)}
        onNavigationStateChange={state => {
          setcanGoBack(state.canGoBack)
          setcanGoForward(state.canGoForward)
          setTitle(state.title)
        }}
      />
    </View>
  );
}
