import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Platform } from 'react-native';
import { AdMobInterstitial } from 'expo-ads-admob';

export default function Card({ content, navigation }) {

    useEffect(() => {
        Platform.OS === 'ios' ? AdMobInterstitial.setAdUnitID('ca-app-pub-4190998958076636/4590982550') : AdMobInterstitial.setAdUnitID('ca-app-pub-4190998958076636/7740740134');
    }, [])

    const goDetail = async () => {
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
        await AdMobInterstitial.showAdAsync();
        await navigation.navigate('DetailPage', { idx: content.idx });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => { goDetail() }}>
            <Image source={{ uri: content.image }} style={styles.cardImage} />
            <View style={styles.cardContainer}>
                <Text numberOfLines={1} style={styles.cardTitleText}>{content.title}</Text>
                <Text numberOfLines={3} style={styles.cardDescTitle}>{content.desc}</Text>
                <Text style={styles.cardDateTitle}>{content.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    cardImage: {
        width: '30%',
        height: 100,
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
    }
})