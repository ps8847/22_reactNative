import {View, Text, Button, Vibration} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text>Home</Text>

      <Button
        title="Click here for Vibration"

                      // its has two parametrs ( duration , repeat )
        onPress={() => Vibration.vibrate(1000)}
      />
      <Button
        title="Click here To Stop Vibration"

                      //to cancel the vibration
        onPress={() => Vibration.cancel()}
      />
    </View>
  );
}
