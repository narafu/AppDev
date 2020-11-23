import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import aboutImage from '../assets/aboutImage.png';

export default function AboutPage() {

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Hi! 스파르타코딩 앱개발 반에 오신 것을 환영합니다</Text>
            <View style={styles.contents}>
                <Image source={aboutImage} style={styles.imgStyle} />
                <Text style={styles.titleText}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.contentsText}>꼭 완주하셔서 꼭 여러분 것으로 만들어 가시길 바랍니다</Text>
                <TouchableOpacity style={styles.instaButton}>
                    <Text style={styles.buttonText}>여러분의 인스타계정</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#262C74'
    },
    textStyle: {
        color: 'white',
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 100,
        width: '80%'
    },
    contents: {
        marginTop: 50,
        backgroundColor: 'white',
        width: '80%',
        height: '60%',
        borderRadius: 20,
        alignItems: 'center'
    },
    imgStyle: {
        resizeMode: 'contain',
        width: '100%',
        height: 200,
        marginTop: 70
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 25,
        width: '80%'
    },
    contentsText: {
        fontWeight: 'bold',
        width: '80%',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 30
    },
    instaButton: {
        backgroundColor: '#F3B13E',
        padding: 20,
        borderRadius: 15
    },
    buttonText: {
        color: 'white'
    }
})
