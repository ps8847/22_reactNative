import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

const Home = () => {
  const [visible, setVisisble] = useState(false);

  let [data,setdata] = useState([
    {name:"option1" , number : 1},
    {name:"option2" , number : 2},
    {name:"option3" , number : 3},
    {name:"option4" , number : 4},
    {name:"option5" , number : 5},
  ])
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => setVisisble(true)}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,

          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 35, fontWeight: 700, color: '#fff'}}>+</Text>
      </TouchableOpacity>

      <Modal
      animationIn={'slideInUp'}
      animationOut={'slideInDown'}
        onBackButtonPress={() => setVisisble(false)}
        style={{width: '100%', marginLeft: 0, marginBottom: 0}}
        isVisible={visible}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
            backgroundColor: 'white',
            width: '100%',
          }}>
            {
              data.map((item , index) => {
                return <Text key={index} style={{marginBottom:10, marginLeft:5 , marginTop:5}}>{item.name}</Text>
              })
            }

          </View>
      </Modal>
    </View>
  );
};

export default Home;
