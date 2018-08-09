import React, { Component } from 'react';
import { View, Image, } from 'react-native';
import { NavigationActions } from "react-navigation";

export default class Splash extends Component {
  componentDidMount(){
    setTimeout(this.doRouting, 2000);
  }
  doRouting = async () => {
    routeName = "NavigatorMain";
    this.props.navigation.push(routeName)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#ccc'}}>
        <Image source={require("../../../img/icon.png")} style={{width: 250, height: 250 }} />
      </View>
    );
  }
} 
