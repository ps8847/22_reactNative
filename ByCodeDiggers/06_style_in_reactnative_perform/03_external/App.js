import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

import { customStyle } from './Style'

const App = () => {
  return (
    <View style={customStyle.mainContainer}>
      <StatusBar backgroundColor={"yellow"} />
      <View style={customStyle.shape}/>
    </View>
  )
}

export default App