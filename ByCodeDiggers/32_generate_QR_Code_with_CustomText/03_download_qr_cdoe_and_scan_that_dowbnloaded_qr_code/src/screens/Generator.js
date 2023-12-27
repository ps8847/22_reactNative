import {View, Text, TextInput, Button , Platform} from 'react-native';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import RNFetchBlob from 'rn-fetch-blob';

const Generator = () => {
  const [qrCodeText, setqrCodeText] = useState('');
  const [qrCodeRef, setqrCodeRef] = useState(null);

  const downloadQrCode = () => {
    try {
      qrCodeRef.toDataURL(async data => {
      const timestamp = new Date().toISOString().replace(/[-T:]/g, '_');
      const extension = Platform.OS === 'android' ? 'png' : 'jpg';
      const path = `${RNFetchBlob.fs.dirs.DownloadDir}/${timestamp}.${extension}`;

      await RNFetchBlob.fs.writeFile(path , data , 'base64')

      alert("Download Successful")
      console.log(path);
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TextInput
          placeholder="Enter your data"
          style={{
            borderWidth: 1,
            borderColor: 'white',
            width: '80%',
            padding: 10,
            color: 'white',
          }}
          placeholderTextColor="white"
          onChangeText={text => setqrCodeText(text)}
          value={qrCodeText}
        />
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <QRCode
          value={qrCodeText ? qrCodeText : 'https://www.google.com/'}
          logo={require('../../assets/img/logo.jpg')}
          size={300}
          getRef={ref => setqrCodeRef(ref)}
        />
      </View>

      <Button title="Download QrCode" onPress={() => downloadQrCode()} />
    </View>
  );
};

export default Generator;
