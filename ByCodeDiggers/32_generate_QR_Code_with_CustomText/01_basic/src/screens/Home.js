import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';

const Home = () => {
  const [qrCodeText, setqrCodeText] = useState("");
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
       <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TextInput
          placeholder="Enter your data"
          style={{
            borderWidth: 1,
            borderColor: 'white',
            width: '80%',
            padding: 10,
            color:'white'
          }}
          placeholderTextColor="white"
          onChangeText={(text) => setqrCodeText(text)}
          value={qrCodeText}
        />
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        {/* <QRCode value="https://www.google.com/" size={300} /> // simple basic  */}

        {/* <QRCode value="https://www.google.com/" logo={require('../../assets/img/logo.jpg')} size={300} /> // with logo in center */}

        <QRCode
          value={qrCodeText ? qrCodeText : "https://www.google.com/"}
          logo={require('../../assets/img/logo.jpg')}
          size={300}
        />
      </View>
    </View>
  );
};

export default Home;
