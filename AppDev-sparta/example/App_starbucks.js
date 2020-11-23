import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  console.disableYellowBox = true;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.top_menu}>
          <View style={styles.top_menu_inner_side}></View>
          <View style={styles.top_menu_inner_center}><Text>STARBUCKS</Text></View>
          <View style={styles.top_menu_inner_side}></View>
        </View>
        <View style={styles.top_welcome}><Text>안녕하세요. 스타벅스입니다.</Text></View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottom_menu}>
          <View style={styles.bottom_menu_inner}><Text>Level</Text></View>
          <View style={styles.bottom_menu_inner}><Text>Card</Text></View>
        </View>
        <View style={styles.bottom_menu}>
          <View style={styles.bottom_menu_inner}><Text>Siren Order</Text></View>
          <View style={styles.bottom_menu_inner}><Text>Gift Shop</Text></View>
        </View>
        <View style={styles.bottom_menu}>
          <View style={styles.bottom_menu_inner}><Text>e-Coupon</Text></View>
          <View style={styles.bottom_menu_inner}><Text style={styles.textStyle}>What's New</Text></View>
        </View>
        <View style={styles.bottom_menu}><Text>e-Frequency</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 2
  },
  top_menu: {
    flex: 1,
    flexDirection:"row"
  },
  top_menu_inner_side: {
    width: 50
  },
  top_menu_inner_center: {
    flex: 1
  },
  top_welcome: {
    flex: 1
  },
  bottom: {
    flex: 8
  },
  bottom_menu: {
    flex: 1,
    flexDirection:"row"
  },
  bottom_menu_inner: {
    flex: 1,
    backgroundColor:'black'
  },
  textStyle: {
    textAlign:"center"
  }
});