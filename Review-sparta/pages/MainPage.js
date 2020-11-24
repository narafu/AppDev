import React, { useState, useEffect } from 'react';
import mainImg from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import Card from '../components/Card';
import Loading from '../components/Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import { firebase_db } from '../firebaseConfig';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';

export default function MainPage({ navigation }) {

    const [state, setState] = useState()
    const [ready, setReadyState] = useState(true)
    const [cateState, setCateState] = useState([])
    const [weather, setweather] = useState({
        temp: 0,
        condition: ''
    })

    useEffect(() => {

        navigation.setOptions({
            title: '나만의 꿀팁'
        })

        firebase_db.ref('/tip').once('value').then((snapshot) => { // firebase 양식
            setState(snapshot.val())
            setCateState(snapshot.val())
            getLocation();
        })
        setReadyState(false)

    }, [])

    const category = (cate) => {
        if (cate == '전체보기') {
            setCateState(state)
        }
        else {
            setCateState(state.filter(function (d) {
                return d.category == cate // 조건식
            }))
        }
    }

    const getLocation = async () => { // 순서대로 진행하도록(동기) async - await
        try {
            // 함수 선언부 앞에 async, 사용함수 앞에 await
            await Location.requestPermissionsAsync();
            const locationData = await Location.getCurrentPositionAsync();

            const latitude = locationData['coords']['latitude']
            const longitude = locationData['coords']['longitude']
            const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
            const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)

            const temp = result.data.main.temp;
            const condition = result.data.weather[0].main

            setweather({ /* temp:temp, condition:condition */
                temp, condition
            })
        }
        catch (error) {
            Alert.alert("위치를 찾는 데 실패하였습니다.")
        }
    }

    return ready ? <Loading /> : (
        <ScrollView style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.introButton} onPress={() => { navigation.navigate('AboutPage') }}>
                    <Text style={styles.introButtonText}>소개 페이지</Text>
                </TouchableOpacity>
                <Text>{'오늘의 날씨 ' + weather.temp + '°C ' + weather.condition}</Text>
            </View>
            <Image source={mainImg} style={styles.mainImg} />
            <ScrollView style={styles.buttonContainer} horizontal>
                <TouchableOpacity style={styles.buttonAll} onPress={() => { category('전체보기') }} >
                    <Text style={styles.buttonText}>전체보기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLife} onPress={() => { category('생활') }}>
                    <Text style={styles.buttonText}>생활</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFinancial} onPress={() => { category('재테크') }}>
                    <Text style={styles.buttonText}>재테크</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPet} onPress={() => { category('반려견') }}>
                    <Text style={styles.buttonText}>반려견</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFavorite} onPress={() => { navigation.navigate('LikePage') }}>
                    <Text style={styles.buttonText}>찜</Text>
                </TouchableOpacity>
            </ScrollView>
            <View>{
                cateState.map(function (content, i) {
                    return (<Card content={content} navigation={navigation} />)
                })
            }
            </View>
            <View style={{ padding: 20 }}></View>
            {
                Platform.OS === 'ios' ? (
                    <AdMobBanner
                        bannerSize="smartBannerLandscape"
                        servePersonalizedAds={true}
                        adUnitID='ca-app-pub-4190998958076636/2679985143' />
                ) : (
                        <AdMobBanner
                            bannerSize="fullBanner"
                            servePersonalizedAds={true}
                            adUnitID='ca-app-pub-4190998958076636/1358314555' />
                    )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    introButton: {
        backgroundColor: 'pink',
        borderRadius: 20,
        padding: 10,
        width: 125
    },
    introButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center"
    },
    mainImg: {
        marginTop: 10,
        borderRadius: 20,
        resizeMode: 'cover',
        width: '100%',
        height: 200
    },
    buttonContainer: {
        marginTop: 10
    },
    buttonAll: {
        backgroundColor: '#20b2aa',
        margin: 5,
        borderRadius: 20,
        padding: 20
    },
    buttonLife: {
        backgroundColor: '#fdc453',
        margin: 5,
        borderRadius: 20,
        padding: 20
    },
    buttonFinancial: {
        backgroundColor: '#fe8d6f',
        margin: 5,
        borderRadius: 20,
        padding: 20
    },
    buttonPet: {
        backgroundColor: '#9adbc5',
        margin: 5,
        borderRadius: 20,
        padding: 20
    },
    buttonFavorite: {
        backgroundColor: '#f886a8',
        margin: 5,
        borderRadius: 20,
        padding: 20
    },
    buttonText: {
        width: 65,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center"
    }
});
