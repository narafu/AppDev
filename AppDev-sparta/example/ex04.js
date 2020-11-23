import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function DetailPages() {

    const tip = {
        "idx": 9,
        "category": "재테크",
        "title": "렌탈 서비스 금액 비교해보기",
        "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
        "desc": "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        "date": "2020.09.09"
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: tip.image }} style={styles.mainImg} />
            <View style={styles.contentsContainer}>
                {/* <Text style={styles.textStyle}> */}
                <Text style={styles.titleText}>{tip.title}</Text>
                <Text style={styles.contexsText}>{tip.desc}</Text>
                {/* </Text> */}
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>팁 찜하기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        paddingTop: 50
    },
    mainImg: {
        width: '95%',
        height: '50%',
        borderRadius: 20
    },
    contentsContainer: {
        alignItems: 'center',
        margin: 20
    },
    titleText: {
        fontSize: 20,
        color: 'white'
    },
    contexsText: {
        margin: 10,
        color: 'white'
    },
    buttonStyle: {
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: 'red',
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 20
    },
    buttonText: {
        color: 'white'
    }
})