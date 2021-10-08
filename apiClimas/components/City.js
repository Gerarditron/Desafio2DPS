import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';


const City = ({resultCity}) =>{
    const [info, setInfo] = useState([]);
    const [name, setName] = useState();
    const [temperature, setTemperature] = useState();
    const [category, setCategory] = useState();
    const [mintemperature,setMintemperature] = useState();
    const [maxtemperature, setMaxtemperature] = useState();
    const [humidity, setHumidity] = useState();
    const [windforce, setWindforce] = useState();
    const [id, setID] = useState([]);

    useEffect(()=>{
        setInfo(resultCity);
        id.length = 0;
        Object.values(info).map(e =>{
            setName(e.name);
            setTemperature(e.main.temp);
            setCategory(e.weather.main);
            setMintemperature(e.main.temp_min);
            setMaxtemperature(e.main.temp_max);
            setHumidity(e.main.humidity);
            setWindforce(e.wind.speed);
            Object.values(e.id).map(l=>{
                id.push(l.name)
            })
        });
    })

    return(
        <>
        <View style={styles.cityBox}>
        <Text style={styles.cityLogo}>Logo Ciudad</Text>
        <Text style={styles.cityText}>{name}</Text>
      </View>
      <Image
        style={styles.imgCity}
        source={pictureCity}
      />
      <View style={styles.temperatureBox}>
        <Text style={styles.temperatureLogo}>Logo Temperatura</Text>
        <Text style={styles.temperatureText}>{temperature}°</Text>
      </View>
      <View style={styles.temperatureBox}>
        <Text style={[styles.temperatureLogo, {fontWeight:'bold', fontSize:24, color:'#fff'}]}>Tipo Clima:</Text>
        <Text style={styles.temperatureText}>{category}</Text>
      </View>
      <View style={styles.detailsBox}>
        <View style={styles.detailTemp}>
          <Text style={styles.detailText}>Minimo:</Text>
          <Text style={styles.detailText}>{mintemperature} °</Text>
        </View>
        <View style={styles.detailTemp}>
          <Text style={styles.detailText}>Maximo:</Text>
          <Text style={styles.detailText}>{maxtemperature} °</Text>
        </View>
      </View>
      <View style={styles.detailsBox}>
        <View style={styles.detailTemp}>
          <Text style={styles.detailText}>Humedad:</Text>
          <Text style={styles.detailText}>{humidity} °</Text>
        </View>
        <View style={styles.detailTemp}>
          <Text style={styles.detailText}>Viento:</Text>
          <Text style={styles.detailText}>{wind} °</Text>
        </View>
      </View>
      <TouchableWithoutFeedback>
        <View style={styles.btnBuscar}>
          <Text style={styles.textoBuscar}>Buscar Ciudad</Text>
        </View>
      </TouchableWithoutFeedback>
      </>
    );
};
export default City;

const styles = StyleSheet.create({
    cityBox:{
        flexDirection:'row',
        marginVertical:6,
        alignItems:'center',
      },
      cityLogo:{
    
      },
      cityText:{
        marginLeft:10,
        fontSize:26,
        color:'#fff',
      },
      imgCity:{
        height:180,
        width: 260,
        borderRadius:30,
      },
      temperatureBox:{
        flexDirection:'row',
        marginVertical:5,
        alignItems:'center',
      },
      temperatureLogo:{
    
      },
      temperatureText:{
        marginLeft:10,
        fontSize:28,
        color:'#fff',
      },
      detailsBox:{
        marginVertical: 8,
        paddingVertical:5,
        flexDirection:'row',
      },
      detailTemp:{
        marginHorizontal:15,
        alignItems:'center',
      },
      detailText:{
        fontSize:18,
        color:'#fff',
      },
      btnBuscar:{
        marginTop:5,
        height: 50,
        backgroundColor:'#000',
        fontSize:20,
        marginBottom:20,
        textAlign:'center',
      },
      textoBuscar:{
        color:'#fff',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
        fontSize:18,
      }
})