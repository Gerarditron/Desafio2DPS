import React from 'react';
import {View,Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

export default function Peliculas({navigation}){
    
    const dataCOMEDIA = [
        {
            titleMovie: 'The Hangover',
            picture: require('../imgs/movies/comedia1.jpg'),
            idyoutube: 'tlize92ffnY',
        },
        {
            titleMovie: 'The Longest Yard',
            picture: require('../imgs/movies/comedia2.jpg'),
            idyoutube: 'l1BF53bXP8I',
        },
        {
            titleMovie: 'Superbad',
            picture: require('../imgs/movies/comedia3.jpg'),
            idyoutube: '4eaZ_48ZYog',
        },
        {
            titleMovie: 'Airplane',
            picture: require('../imgs/movies/comedia4.jpg'),
            idyoutube: '07pPmCfKi3U',
        },
        {
            titleMovie: 'Thropic Thunder',
            picture: require('../imgs/movies/comedia5.jpg'),
            idyoutube: '9Pl4JNnqNaE',
        },
        {
            titleMovie: 'Paranormal Movie',
            picture: require('../imgs/movies/comedia6.jpg'),
            idyoutube: 'J50vA5VLR6k',
        },
    ];
    const dataROMANCE = [
        {
            titleMovie: 'Comming to America',
            picture: require('../imgs/movies/romance1.jpg'),
            idyoutube: 'KFroCRDXw5E',
        },
        {
            titleMovie: 'Just Go With It',
            picture: require('../imgs/movies/romance2.jpg'),
            idyoutube: 'GA0zBMy6uVk',
        },
        {
            titleMovie: 'La La Land',
            picture: require('../imgs/movies/romance3.jpg'),
            idyoutube: '0pdqf4P9MB8',
        },
        {
            titleMovie: 'Pride & Prejudice',
            picture: require('../imgs/movies/romance4.jpg'),
            idyoutube: 'cTZAzVzFShw',
        },
        {
            titleMovie: 'The Wedding Singer',
            picture: require('../imgs/movies/romance5.jpg'),
            idyoutube: 'Yy-TwYB1UQw',
        },
        {
            titleMovie: 'Grease',
            picture: require('../imgs/movies/romance6.jpg'),
            idyoutube: 'qDKo8DNpwOw',
        },
        
    ];
    const dataACCION =[
        {
            titleMovie: 'Lethal Weapon',
            picture: require('../imgs/movies/accion1.jpg'),
            idyoutube: 'bKeW-MGu-qQ',
        },
        {
            titleMovie: 'Con Air',
            picture: require('../imgs/movies/accion2.jpg'),
            idyoutube: 'vYFU0H1I1i0',
        },
        {
            titleMovie: 'Die Hard',
            picture: require('../imgs/movies/accion3.jpg'),
            idyoutube: 'jaJuwKCmJbY',
        },
        {
            titleMovie: 'Rocky IV',
            picture: require('../imgs/movies/accion4.jpg'),
            idyoutube: '4qjV0bB2V0Q',
        },
        {
            titleMovie: 'Tango & Cash',
            picture: require('../imgs/movies/accion5.jpg'),
            idyoutube: 'qwzkxI6b9Go',
        },
        {
            titleMovie: 'Terminator',
            picture: require('../imgs/movies/accion6.jpg'),
            idyoutube: 'k64P4l2Wmeg',
        },
    ]
    
    const Item = ({ category }) => {
        
        const {titleMovie,picture,idyoutube} = category;

        return(
            <TouchableOpacity style={styles.movieBox} activeOpacity={0.8} onPress={()=>navigation.push('Youtube',category.idyoutube)}>
                <View>
                    <Image 
                        style={styles.imageMovie}
                        source={picture}
                    />
                </View>
                <View>
                    <Text style={styles.imageText}>{titleMovie}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
    const renderItem = ({item}) => (
        <Item category={item} />
    );

    return(
        <>
        <View style={{flexDirection:'row'}}>
            <View style={[styles.headerBanner, {flexDirection:'row'}]}>
                <Image 
                    style={styles.bannerImg}
                    source={require('../imgs/banners/bannerPeliculas.jpg')}
                />
                <Text style={styles.bannerText}>Peliculas</Text>
            </View>
        </View>
        <View style={[styles.contentBox, {marginTop:46}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View>
                        <Text style={styles.categoryText}>Comedia</Text>
                    </View>
                    <View>
                        <FlatList
                        horizontal
                        data={dataCOMEDIA}
                        renderItem={renderItem}
                        keyExtractor={item=>item.titleMovie}
                        showsHorizontalScrollIndicator = {false}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.categoryText}>Romance</Text>
                    </View>
                    <View>
                        <FlatList
                        horizontal
                        data={dataROMANCE}
                        renderItem={renderItem}
                        keyExtractor={item=>item.titleMovie}
                        showsHorizontalScrollIndicator = {false}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.categoryText}>Accion</Text>
                    </View>
                    <View>
                        <FlatList
                        horizontal
                        data={dataACCION}
                        renderItem={renderItem}
                        keyExtractor={item=>item.titleMovie}
                        showsHorizontalScrollIndicator = {false}
                        />
                    </View>
                </View>
            </ScrollView>
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
        color:'#fff',
        fontSize: 50,
        textAlign:'center',
        marginTop: 70,
        marginLeft: 170,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textShadowOffset: {width:8, height:8},
        textShadowRadius: 10,
    },
    contentBox:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#005292',
    },
    categoryBox:{
        marginBottom: 10,
    },
    categoryText:{
        fontSize:25,
        color:'#fff',
        fontWeight:'bold',
        marginBottom:10,
        textDecorationLine:'underline',
        backgroundColor: '#083A61',
        paddingLeft:12,
        paddingVertical:2,
    },
    movieBox:{
        justifyContent: 'center',
        alignItems:'center',
        marginHorizontal:16,
        marginVertical:8,
    },
    imageMovie:{
        height: 180,
        width: 110,
    },
    imageText:{
        color:'#fff',
        textAlign:'center',
        fontSize:18,
    }
});