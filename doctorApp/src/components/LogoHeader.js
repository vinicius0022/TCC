import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

class LogoHeader extends Component {

  render() {

    return (
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/images/icon.png")} />
        <View style={styles.flexFiller}></View>
        <View style={styles.text3Column}>
          <Text style={styles.text3}>Doctor App</Text>
          <View style={styles.rect7}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    width: '100%',
    height:'25%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  logo: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    alignSelf: "center"
  },
  text3: {
    color: "rgba(255,255,255,255)",
    fontSize: 20,
  },
});

export default LogoHeader;
