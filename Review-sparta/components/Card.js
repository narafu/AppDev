import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function Card({ content, navigation }) {

    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('DetailPage', { idx: content.idx }) }}>
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