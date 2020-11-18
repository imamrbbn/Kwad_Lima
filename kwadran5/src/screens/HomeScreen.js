import React, {useState} from 'react'
import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Picker } from '@react-native-picker/picker';

import { SET_NUMBER } from '../stores/actions/setNumber'
import { SOLVE_NUMBER } from '../stores/actions/solveNumber'

export default function Homescreen({navigation}) {
    const dispatch = useDispatch()
    const [bases, setBases] = useState('2')
    const number = useSelector(state => state.numberReducers.number)
    const result = useSelector(state => state.numberReducers.result)

    function handleSolveBase() {
      if (!number) {
        alert('please insert number to convert!')
      } else {
        if (number.includes(' ')) alert('cannot input space!')
        else {
          let input = `${number} ${bases}`
          dispatch(SOLVE_NUMBER(input))
        }
      }
    }

    return (
        <View style= {styles.container}>
          <Text style={styles.title}>BASES CONVERTER </Text>
          
          <View style={styles.content}>

            <TextInput
              style={styles.input}
              keyboardType="number-pad" 
              onChangeText={(number => {
                dispatch(SET_NUMBER(number))
              })}
              placeholder="input your number" />

            <View style={styles.basesOption}>
              <Text style={{color:'white', fontSize: 24, alignSelf: 'center' }}
                > To Bases:</Text>
              <Picker
                  selectedValue={bases}
                  style={styles.picker}
                  onValueChange={(itemValue) => setBases(itemValue)}>
                  <Picker.Item label="Binary" value="2" />
                  <Picker.Item label="Octal" value="8" />
                  <Picker.Item label="Decimal" value="10" />
                  <Picker.Item label="Hexadecimal" value="16" />
              </Picker>
            </View>

              <View style={{ width: 200, height: 50, marginLeft:'auto', marginRight:'auto'}}>
                <Button
                  title="Convert"
                  color="#31326f"
                  onPress={handleSolveBase}
                />
              </View>

                <View style={styles.resultContent}>
                  <Text style={{color:'#31326f', fontSize:18}}>Result: </Text>
                  <Text style={{color:'#31326f', fontSize:18, fontWeight:'bold'}} >{result} </Text>
                </View>
          </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  input : {
    color: '#31326f',
    fontWeight: 'bold',
    textAlign:'center',
    minHeight: 60,
    fontSize: 25,
    marginVertical: 20,
    backgroundColor: '#f4f4f2'
  },
  picker: { 
    height: 50, 
    width: 150,
    backgroundColor: '#f4f4f2',
    marginLeft: 10,
    color: '#31326f'
  },
  title: {
    textAlign: "center",
    fontSize:  30,
    color: '#31326f',
    fontWeight: 'bold'
  },
  content: {
    marginTop: 20,
    height: 400,
    padding: 10,
    backgroundColor: '#495464',
    top: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  basesOption: {
    marginBottom: 25,
    marginTop: 15,
    flexDirection: "row",
    marginHorizontal: 'auto'
  },
  resultContent: {
    marginTop: 20,
    height: 100,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#f4f4f2'
  }
});
