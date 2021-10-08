import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, Alert, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import City from './components/City';

const App = () => {
  
  const APIkey = '43ff62a0a74533edba34b9676ed2dd0a';
  const pictureCity = require('./src/imgs/city.jpg'); 

  
  const [searchCity, setSearchCity] = useState({})
  const [consultCity, setConsultCity] = useState(false);
  const [resultCity, setResultCity] = useState({});
  const {city} = searchCity;

  
  const verifytCity = () =>{
    if(city.trim()===''){
      showAlert();
      return;
    }
  }
  //Consultar API
  setConsultCity(true);

  useEffect(()=>{
    
    const consultCity = async () =>{
      if(verifytCity){
        const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
        try{
          const answer =  await ferch(url);
          const resultCity = await answer.json();
          setResultCity(resultCity);
          setConsultCity(false);
        } catch(error){
          showAlert();
        }
      }
    };
    consultCity();
  },[consultCity]);

  const showAlert = () => {
    Alert.alert('Error', 'No hay resultado, intenta con otra ciudad'), [{Text:'Ok'}];
  };

  


  return(
    <>
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={pictureCity}
      />
      <Text style={styles.logoText}>El Clima Figueroa</Text>
    </View>
    <View style={styles.contentBox}>
      <Picker
        selectedValue={city}
        onValueChange={city=>setSearchCity({...searchCity,city})}
        style={[styles.picker,{ height: 60, width: 250 }]}
        onPress={()=>consultCity()}
      >
        <Picker.Item label="San Salvador" value="San Salvador" />
        <Picker.Item label="Aguilares" value="Aguilares" />
        <Picker.Item label="Apopa" value="Apopa" />
        <Picker.Item label="Ayutuxtepeque" value="Ayutuxtepeque" />
        <Picker.Item label="Ciudad Delgado" value="Ciudad Delgado" />
        <Picker.Item label="Cuscatancingo" value="Cuscatancingo" />
        <Picker.Item label="El Paisnal" value="El Paisnal" />
        <Picker.Item label="Guazapa" value="Guazapa" />
        <Picker.Item label="Ilopango" value="Ilopango" />
        <Picker.Item label="Mejicanos" value="Mejicanos" />
        <Picker.Item label="Nejapa" value="Nejapa" />
        <Picker.Item label="Panchimalco" value="Panchimalco" />
        <Picker.Item label="Rosario de Mora" value="Rosario de Mora" />
        <Picker.Item label="San Marcos" value="San Marcos" />
        <Picker.Item label="San Martin" value="San Martin" />
        <Picker.Item label="Santiago Texacuangos" value="Santiago Texacuangos" />
        <Picker.Item label="Soyapango" value="Soyapango" />
        <Picker.Item label="Tonacatepeque" value="Tonacatepeque" />
      </Picker>
      <City resultCity={resultCity}/>
    </View>
    </>
  );

}
export default App;

const styles = StyleSheet.create({
  header:{  
    textAlign: 'center',
    height: 240,
  },
  logo:{
    height: 190,
    width: '100%',
  },
  logoText:{
    position: 'absolute',
    color: '#fff',
    marginTop:185,
    paddingHorizontal:15,
    paddingBottom:5,
    fontSize:38,
    fontFamily:'Roboto',
    fontWeight:'bold',
    backgroundColor: '#854C0A',
    justifyContent:'center',
    textAlign:'center',
    width: '100%',
  },
  contentBox:{
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#7F8C8D',
    alignItems:'center',
    paddingVertical:10,
  },
  picker:{
    flex: 1,
    alignItems: "center",
    color:'#fff',
    fontSize:18,
  },
})