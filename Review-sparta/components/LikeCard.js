import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { firebase_db } from '../firebaseConfig';
import Constants from 'expo-constants';

export default function LikeCard({ content, navigation, reload }) {

    const detail = () => {
        navigation.navigate('DetailPage', { idx: content.idx });
    }

    const remove = () => {
        let userId = Constants.installationId;
        firebase_db.ref('/like/' + userId + '/' + content.idx).remove().then(() => {
            Alert.alert('찜 해제');
            reload();
        })
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: content.image }} style={styles.cardImage} />
            <View style={styles.cardContainer}>
                <Text numberOfLines={1} style={styles.cardTitleText}>{content.title}</Text>
                <Text numberOfLines={3} style={styles.cardDescTitle}>{content.desc}</Text>
                <Text style={styles.cardDateTitle}>{content.date}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => { detail() }} >자세히 보기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => { remove() }}>찜 해제</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    cardImage: {
        width: '30%',
        height: 145,
        borderRadius: 10
    },
    cardContainer: {
        width: '65%',
        marginLeft: 15
    },
    cardTitleText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    cardDescTitle: {
    },
    cardDateTitle: {
        color: '#aaa'
    },
    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        margin: 10,
        borderColor: 'hotpink',
        borderWidth: 2,
        borderRadius: 15,
        width: 90
    },
    buttonText: {
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: "center",
        color: 'hotpink'
    }
})