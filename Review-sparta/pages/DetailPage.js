import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, Share, Shape, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import { firebase_db } from '../firebaseConfig';
import Constants from 'expo-constants';

export default function DetailPage({ navigation, route }) {

    const [tip, setTip] = useState([]);

    useEffect(() => {

        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'black',
                shadowColor: 'black'
            },
            headerTintColor: 'white'
        })

        const { idx } = route.params;
        firebase_db.ref('/tip/' + idx).once('value').then((snapshot) => {
            setTip(snapshot.val());
        })

    }, [])

    const outLink = () => {
        Linking.openURL("https://daum.net")
    }

    const likeLink = () => {
        const userId = Constants.installationId;

        firebase_db.ref('/like/' + userId + '/' + tip.idx).set(tip, (error) => {
            console.log(error)
            Alert.alert("찜 완료")
        });
    }

    const shareLink = () => {
        Share.share({
            message: `${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
        });
    }

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.mainImg} source={{ uri: tip.image }} />
            <View style={styles.contentsContainer}>
                <Text style={styles.titleText}>{tip.title}</Text>
                <Text style={styles.descText}>{tip.desc}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => { outLink() }}>링크</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => { likeLink() }} >찜</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => { shareLink() }}>공유</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: 'black', padding: 25 }}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: 30
    },
    mainImg: {
        width: '90%',
        height: 350,
        resizeMode: "cover",
        borderRadius: 20,
        alignSelf: "center"
    },
    contentsContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        width: '70%',
        textAlign: "center"
    },
    descText: {
        marginTop: 20,
        fontSize: 16,
        width: '80%',
        color: 'white'
    },
    buttonContainer: {
        margin: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        margin: 10,
        borderColor: 'hotpink',
        borderWidth: 1,
        borderRadius: 20,
        width: 90
    },
    buttonText: {
        paddingVertical: 15,
        color: 'white',
        textAlign: "center"
    }
})