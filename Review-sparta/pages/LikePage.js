import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import LikeCard from '../components/LikeCard';
import { firebase_db } from '../firebaseConfig';
import Constants from 'expo-constants';

export default function LikePage({ navigation }) {

    const [tip, setTip] = useState([])

    useEffect(() => {

        const userId = Constants.installationId;

        firebase_db.ref('/like/' + userId).once('value').then((snapshot) => {
            let tip = snapshot.val();
            let tip_values = Object.values(tip);
            if (tip_values.length > 0) {
                setTip(tip_values);
            }
        })
    }, [])

    const reload = () => {
        const userId = Constants.installationId;
        firebase_db.ref('/like/' + userId).once('value').then((snapshot) => {
            let tip = snapshot.val();
            let tip_list = Object.values(tip);
            if (tip_list.length > 0) {
                setTip(tip_list);
            }
        })
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                {
                    tip.map((content, i) => {
                        return (<LikeCard reload={reload} content={content} navigation={navigation} />)
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    }
})