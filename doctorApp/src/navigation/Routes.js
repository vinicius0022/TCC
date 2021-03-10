import React, { Component, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack'
import {connect} from 'react-redux'
import user from './../store/reducers/User'

class Routes extends Component{

  render(){

    return (
    <NavigationContainer>
      {this.props.isAuthentic ? <HomeStack /> : <AuthStack/>}
    </NavigationContainer>
    );
  }
}


const mapStateToProps = ({user}) =>{
    
  return{
    isAuthentic: user.isAuthentic
  }
}

// const mapDispatchToProps = dispatch => {
  
//   return {
//       onGetUser: () => dispatch(getUser())
//   }
// }

export default connect(mapStateToProps)(Routes);