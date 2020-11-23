import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';

export default function App() {

  console.disableYellowBox = true;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.maintitle}>나만의 꿀팁</Text>
      </View>
      <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c' }}
        style={styles.topImageStyle} />
      <ScrollView style={styles.navi} horizontal>
        <TouchableOpacity style={styles.buttonStyle1}>
          <Text style={styles.textStyle} >생활</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle2}>
          <Text style={styles.textStyle}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle3}>
          <Text style={styles.textStyle}>반려견</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle4}>
          <Text style={styles.textStyle}>꿀팁 찜</Text>
        </TouchableOpacity>
        {/* <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle1}><Button title='생활' color='white' /></View>
          <View style={styles.buttonStyle2}><Button title='재테크' color='white' /></View>
          <View style={styles.buttonStyle3}><Button title='반려견' color='white' /></View>
          <View style={styles.buttonStyle4}><Button title='꿀팁 찜' color='white' /></View>
        </View> */}
      </ScrollView>
      <View style={styles.bottom}>
        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3' }}
          style={styles.bottomImageStyle} />
        <View>
          <Text style={styles.bottomTitleStyle}>먹다 남은 피자를 촉촉하게!</Text>
          <Text style={styles.bottomContetnStyle} ellipsizeMode numberOfLines={4}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
          <Text style={styles.bottomDateStyle}>2020.11.12</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50
  },
  titleContainer: {
    marginBottom: 20
  },
  maintitle: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: -2,
  },
  topImageStyle: {
    width: "100%",
    height: "40%",
    borderRadius: 20,
    alignSelf: "center"
  },
  navi: {
    width: '100%',
    marginTop: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  buttonStyle1: {
    width: 100,
    height: 50,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: '#F6CC71',
    justifyContent: "center"
  },
  buttonStyle2: {
    width: 100,
    height: 50,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: '#F19C83',
    justifyContent: "center"
  },
  buttonStyle3: {
    width: 100,
    height: 50,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: '#B2DFD0',
    justifyContent: "center"
  },
  buttonStyle4: {
    width: 100,
    height: 50,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: '#ED95B4',
    justifyContent: "center"
  },
  bottom: {
    flexDirection: 'row'
  },
  bottomImageStyle: {
    width: "35%",
    height: '100%',
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10
  },
  bottomTitleStyle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  bottomContetnStyle: {
    width: 240
  },
  bottomDateStyle: {
    color: '#aaa'
  },
  textStyle: {
    color: 'white',
    textAlign: 'center'
  }
});