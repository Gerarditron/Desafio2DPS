import React from 'react';
import {View,Text, StyleSheet, Image, ScrollView, SectionList, TouchableOpacity} from 'react-native';

export default function Series({navigation}){

    const DATA = [
      {
        category: 'Comedia',
        data: [
          {
            titleSerie: 'The Office',
            seasons: 9,
            picture: require('../imgs/series/comedia1.jpg'),
            idyoutube: 'LHOtME2DL4g',
          },
          {
            titleSerie: 'That 70s Show',
            seasons: 8,
            picture: require('../imgs/series/comedia2.jpg'),
            idyoutube: 'b1za7d3KvHw',
          },
          {
            titleSerie: 'Scrubs',
            seasons: 9,
            picture: require('../imgs/series/comedia3.jpg'),
            idyoutube: 'zOgb3KIJDY8',
          },
          {
            titleSerie: 'The Middle',
            seasons: 9,
            picture: require('../imgs/series/comedia4.jpg'),
            idyoutube: '_j2po1y6tvE',
          },
        ],
      },
      {
        category: 'Aventura',
        data: [
          {
            titleSerie: 'Arrow',
            seasons: 8,
            picture: require('../imgs/series/aventura1.jpg'),
            idyoutube: 'zelD6vcSgkw',
          },
          {
            titleSerie: 'Invincible',
            seasons: 1,
            picture: require('../imgs/series/aventura2.jpg'),
            idyoutube: '-bfAVpuko5o',
          },
          {
            titleSerie: 'The Boys',
            seasons: 2,
            picture: require('../imgs/series/aventura3.jpg'),
            idyoutube: 'tcrNsIaQkb4',
          },
          {
            titleSerie: 'Cobra Kai',
            seasons: 3,
            picture: require('../imgs/series/aventura4.jpg'),
            idyoutube: 'xCwwxNbtK6Y',
          },
        ],
      },
      {
        category: 'Fantasia',
        data: [
          {
            titleSerie: 'Lucifer',
            seasons: 6,
            picture: require('../imgs/series/fantasia1.jpg'),
            idyoutube: 'X4bF_quwNtw',
          },
          {
            titleSerie: 'The Witcher',
            seasons: 1,
            picture: require('../imgs/series/fantasia2.jpg'),
            idyoutube: 'ETY44yszyNc',
          },
          {
            titleSerie: 'Miraculous',
            seasons: 4,
            picture: require('../imgs/series/fantasia3.jpg'),
            idyoutube: 'WpM5BDRRlJg',
          },
          {
            titleSerie: 'Loki',
            seasons: 1,
            picture: require('../imgs/series/fantasia4.jpg'),
            idyoutube: 'PlpjPCssEXE',
          },
        ],
      },
    ];
  
    const Item = ({ category }) => {
        
        const {titleSerie,seasons,picture,idyoutube} = category;

        return(
            <TouchableOpacity style={styles.movieBox} activeOpacity={0.8} onPress={()=>navigation.push('Youtube',category.idyoutube)}>
                <View>
                    <Image 
                        style={styles.imageSerie}
                        source={picture}
                    />
                </View>
                <View>
                    <Text style={styles.titleSerie}>{titleSerie}</Text>
                    <Text style={styles.seasonSerie}>- {seasons} Temporadas</Text>
                </View>
            </TouchableOpacity>
        );
    }
    

    return(
        <>
        <View style={{flexDirection:'row'}}>
            <View style={[styles.headerBanner, {flexDirection:'row'}]}>
                <Image 
                    style={styles.bannerImg}
                    source={require('../imgs/banners/bannerSeries.jpg')}
                />
                <Text style={styles.bannerText}>Series</Text>
            </View>
        </View>
        <View style={[styles.contentBox, {marginTop:46}]}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item category={item} />}
                renderSectionHeader={({ section: { category } }) => (
                    <Text style={styles.categoryText}>{category}</Text>
                )}
                showsVerticalScrollIndicator={false}
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
        color:'#FF3F06',
        fontSize: 70,
        textAlign:'center',
        marginTop: 60,
        marginLeft:15,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textShadowOffset: {width:6, height:6},
        textShadowRadius: 10,
    },
    contentBox:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#E67E22',
    },
    movieBox: {
        borderTopWidth:4,
        borderBottomWidth:4,
        borderColor:'#F39C12',
        padding: 20,
        flexDirection:'row',
        alignItems: 'center',
    },
    categoryText: {
        fontSize:25,
        color:'#fff',
        fontWeight:'bold',
        marginVertical:5,
        textDecorationLine:'underline',
        backgroundColor: '#BA4A00',
        paddingLeft:12,
        paddingVertical:2,
    },
    titleSerie: {
        fontSize: 24,
        paddingLeft: 18,
        fontWeight:'bold',
    },
    seasonSerie:{
        fontSize: 18,
        paddingLeft: 25,
    },
    imageSerie:{
        height: 140,
        width: 80,
    },

});