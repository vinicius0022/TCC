import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions} from 'react-native';

export default class Splash extends Component {

    componentDidMount = () =>{
      setTimeout(
        () => { this.props.navigation.navigate('Login')},
        2000
      )
    }

    render(){

      return(

        <View style={styles.container}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../../assets/images/Gradient_BlSPiJo.png")}>
          <View style={styles.imageLogo}>
          <Image source={require('../../assets/images/icon.png')} style={styles.image}/>
          <View style={styles.text3Column}>
          <Text style={styles.text3}>Doctor App</Text>
          <View style={styles.rect7}></View>
          </View>
          </View>
          </ImageBackground>
        </View>
      )
    }
}


const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    flex: 1
  },
  imageLogo:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  image:{
    height: 100,
    width:100,
    resizeMode: 'contain',
    justifyContent:'center',
    alignItems:'center'
  },
  header:{
    fontSize:25,
    fontFamily:'shelter'
  },
  rect: {
    flex: 1,
    width: Dimensions.get('window').width
  },
  rect_imageStyle: {
    resizeMode: 'cover'
  },
  text3Column: {
    marginBottom: 6,
    marginLeft: 2,
    marginRight: -1
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginBottom: 4
  },
  rect7: {
    height: 8,
    backgroundColor: "white",
    marginRight: 4
  },
})