import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import mainImg from '../assets/aboutImage.png';

export default function AboutPage({ navigation }) {

    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#1F266A',
                shadowColor: "#1F266A"
            },
            headerTintColor: 'white'
        })
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleText}>Hi! 스파르타코딩 앱개발 반에 오신 것을 환영합니다</Text>
            <View style={styles.contentContainer}>
                <Image style={styles.mainImg} source={mainImg} />
                <Text style={styles.descTitleText}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.descContentsText}>꼭 완주하셔서 꼭 여러분 것으로 만들어 가시길 바랍니다.</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>인스타계정</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#1F266A', padding: 30 }}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#1F266A',
        padding: 30,
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: "center",
        marginTop: 20
    },
    contentContainer: {
        width: '100%',
        backgroundColor: 'white',
        height: 450,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    mainImg: {
        width: '100%',
        height: 200,
        resizeMode: "contain"
    },
    descTitleText: {
        fontWeight: 'bold',
        fontSize: 20,
        width: 250,
        textAlign: "center",
        marginTop: 20
    },
    descContentsText: {
        marginBottom: 20,
        width: 250,
        textAlign: "center",
        fontSize: 16,
        marginTop: 10
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
        padding: 20
    }

})