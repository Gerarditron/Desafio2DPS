import React from 'react';
import {View,Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Proximamente({navigation}){
    
    const Data = [
        {
            titleTrailer: 'Spiderman - No Way Home',
            picture: require('../imgs/trailers/trailer1.jpg'),
            idyoutube: 'PtH__LUfbtY',
            description: 'En esta tercera entrega, el hombre araña\ndebe enfrentarse a los seis siniestros\njunto con la ayuda del Dr. Strange',
            fechaEstreno: '17 de Diciembre del 2021'
        },
        {
            titleTrailer: 'Venom - Let There Be Carnage',
            picture: require('../imgs/trailers/trailer2.jpg'),
            idyoutube: '-FmWuCgJmxo',
            description: 'La aclamada secuela de Venom, finalmente\nnos trae por fin al muy deseado villano\n Carnage, pero en esta ocasion hara su\naparcicion junto con la villana Shriek',
            fechaEstreno: '1 de Octubre del 2021'
        },
        {
            titleTrailer: 'Doom Patrol - Temporada 3',
            picture: require('../imgs/trailers/trailer3.jpg'),
            idyoutube: 'kuUFOmvyKo4',
            description: 'Luego de mucho tiempo ocultandose de\n los peligros del mundo la patrulla esta\nde regreso, para enfrentar a todo una agrupacion de villanos conocidos\ncomo La Hermandad del Mal',
            fechaEstreno: '23 de Septiembre del 2021'
        },
        {
            titleTrailer: 'Titanes - Temporada 3',
            picture: require('../imgs/trailers/trailer4.jpg'),
            idyoutube: '6ttU1iKSpdA',
            description: 'Tras derrotar a Deathstroke y su familia, uno de los titanes se encargara de ir en contra de los titanes transformandose\nen el nuevo villano Red Hood',
            fechaEstreno: '12 de Agosto del 2021'
        },
    ];

    const Item = ({ category }) => {
        
        const {titleTrailer, picture, idyoutube, description, fechaEstreno} = category;

        return(
            <TouchableOpacity style={styles.trailerBox} activeOpacity={0.8} onPress={()=>navigation.push('Youtube',category.idyoutube)}>
                <View>
                    <Image 
                        style={styles.imageTrailer}
                        source={picture}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.imageText}>{titleTrailer}</Text>
                    <Text style={styles.textDescription}>{description}</Text>
                    <Text style={{color:'#fff', textDecorationLine:'underline',marginTop:10, fontSize:18}}>Disponible:</Text>
                    <Text style={styles.textFecha}>{fechaEstreno}</Text>
                </View> 
            </TouchableOpacity>
        );
    }
    
    const renderItem = ({item}) => (
        <Item category={item}/>
    );


    return(
        <>
        <View style={{flexDirection:'row'}}>
            <View style={[styles.headerBanner, {flexDirection:'row'}]}>
                <Image 
                    style={styles.bannerImg}
                    source={require('../imgs/banners/bannerProximamente.jpg')}
                />
                <Text style={styles.bannerText}>Proximamente</Text>
            </View>
        </View>
        <View style={[styles.contentBox, {marginTop:13}]}>
            <FlatList
                vertical
                data={Data}
                renderItem={renderItem}
                keyExtractor={item=>item.titleTrailer}
                showsHorizontalScrollIndicator = {false}
            />
        </View>
        </>
    );
}

const styles = new StyleSheet.create({
    headerBanner:{
        flex:1,
    },
    bannerImg:{
        height: 200,
        width: '100%',
        position: 'absolute',
    },
    bannerText:{
        color:'#FF2020',
        fontSize: 35,
        textAlign:'center',
        marginTop: 140,
        marginLeft: 170,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textShadowOffset: {width:6, height:6},
        textShadowRadius: 10,
    },
    contentBox:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#D35400',
        borderTopWidth:8,
        borderColor:'#FF2020',
        width: '100%',
    },
    trailerBox:{
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
        marginHorizontal:12,
        marginVertical:10,
        backgroundColor:'#B00B0B',
        borderRadius:30,
        paddingVertical:10,
        paddingHorizontal:20,
    },
    imageTrailer:{
        height: 240,
        width: 350,
        marginTop:8,
        borderRadius:10,
    },
    imageText:{
        marginTop:4,
        color:'#fff',
        fontSize:25,
        fontWeight: 'bold',
    },
    textContainer:{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
    textDescription:{
        paddingVertical:8,
        fontSize:18,
        color:'#fff',
        textAlign:'center',
    },
    textFecha:{
        color:'#fff',
        fontStyle:'italic',
        marginBottom:10,
        fontSize:18,
    }
});