import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, StyleSheet, Image } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
/*import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";*/


export default function Youtube({route}){
    
    const [playing, setPlaying] = useState(false);
    let zelda = route.params;

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("The Video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);
    
    return(
        <>
        <View style={styles.header}>
            <Image
                style={styles.header}
                source={require('../imgs/youtubeLogo.jpg')}
            />
        </View>
        <View style={styles.playerBox}>
            <View style={styles.player}>
            <YoutubePlayer
                height={300}
                play={playing}  
                videoId={zelda}
                onChangeState={onStateChange}
                volume={100}
            />
            </View>
            <View style={styles.btnPlay}>
                <Button title={playing ? "pause" : "play"} onPress={togglePlaying}/>
            </View>
        </View>
        </>
    );
}

const styles = new StyleSheet.create({
    header:{
        width: '100%',
        height: 150,
    },
    playerBox:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#922B21',
    },
    player:{
        marginVertical: 60,
    },
    btnPlay:{
        marginHorizontal:30,
    }
})