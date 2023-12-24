import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from 'react-native-reanimated';
import {useState} from 'react';

const App = () => {
  const [textvalue, setTextValue] = useState();

  const changetextvalue = text => {
    setTextValue(textvalue + text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <View style={styles.uppeInnerView}>
          <Text style={{color: 'white', fontSize: 30}}>{textvalue}</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'grey', height: 2}}></View>
      <View style={styles.bottomview}>
        <View style={styles.bottomInnerView}>
          <View style={styles.columnContainer}>
            <TouchableOpacity onPress={() => setTextValue('')}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('7')}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('4')}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('1')}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('.')}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.columnContainer}>
            <TouchableOpacity onPress={() => changetextvalue('^')}>
              <Text style={styles.buttonText}>^</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('8')}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('5')}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('2')}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('0')}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.columnContainer}>
            <TouchableOpacity onPress={() => changetextvalue('%')}>
              <Text style={styles.buttonText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('9')}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('6')}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('3')}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('00')}>
              <Text style={styles.buttonText}>00</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.columnContainer,
              {backgroundColor: '#363636', borderRadius: 50},
            ]}>
            <TouchableOpacity onPress={() => changetextvalue('/')}>
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('*')}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('-')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changetextvalue('+')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              console.log(textvalue);
              let compute = eval(textvalue)
              setTextValue(compute.toString())
            }}>
            <View
              style={{
                backgroundColor: '#f8f5c0',
                height: 60,
                width: 60,
                borderRadius: 60,
                alignItems: 'center',
                justifyContent: 'center', // Fix the typo in this line
              }}>
              <Text style={[styles.buttonText, {color: 'black'}]}>=</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperview: {
    backgroundColor: '#3e403f',
    flex: 1,
  },
  bottomview: {
    backgroundColor: '#3e403f',
    flex: 1,
  },
  bottomInnerView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  columnContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  uppeInnerView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
});

export default App;
