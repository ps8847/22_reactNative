import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function Home() {

  const js = `window.alert("Hello World")`
  return (
    // <WebView source={{uri:"https://www.google.com/"}} /> // simple 
    // <WebView source={{uri:"https://www.google.com/"}} style={{marginTop:20}} onError={e => alert(`WebView Error : ${e.nativeEvent.description}`)}/> // give styling 
    // <WebView source={{uri:"https://www.google.com/"}} style={{marginTop:20}} onError={e => alert(`WebView Error : ${e.nativeEvent.description}`)}/> // if site is wrong means its wwww.gooooooogle.com then show error 
    // <WebView source={{uri:"https://www.google.com/"}} style={{marginTop:20}} onError={e => alert(`WebView Error : ${e.nativeEvent.description}`)} injectedJavaScriptBeforeContentLoaded={js}/> // inject your javascript code to the web view   
       <WebView source={{html:"<h1>Hello World</h1>"}} style={{marginTop:20}} onError={e => alert(`WebView Error : ${e.nativeEvent.description}`)} /> // inject your html code to the web view   
  )
}