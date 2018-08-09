import React from 'react'
import {View, TouchableOpacity, Text, Modal, Image } from 'react-native';
import Camera from 'react-native-camera';

import styles from './styles';

export default class CameraView extends React.Component {
  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => {
        this.props.openCamera(false)
        console.log(this.props.navigation.state.params, 'paramestros')
        if(this.props.navigation.state.params.verificarFotoFrente==true){
          this.props.navigation.setParams({ fotofrente: data.mediaUri})
          this.props.openFotoFrente(this.props.navigation.state.params.fotofrente)
        }else{
          this.props.navigation.setParams({ fotoverso: data.mediaUri})
          this.props.openFotoVerso(this.props.navigation.state.params.fotoverso)
        }
      })
      .catch(err => console.error(err));
  }  

  render() {
    const { visible, openCamera, navigation, openFotoFrente, openFotoVerso } = this.props;
    if(!visible) return (<View/>)
    return (
        
      <Modal onRequestClose={() => {
            alert('Modal has been closed.');
        }}>
      
      <View style={styles.container}>
        <View style={styles.headerCamera}>
          <TouchableOpacity onPress={() => { openCamera(false) }}>
            <Text style={styles.txtCancel}> Cancelar </Text>
          </TouchableOpacity>
        </View>
        <Camera
          ref={(cam) => {
              this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          >
            <TouchableOpacity
              style={styles.capture}
              onPress={this.takePicture.bind(this)}>
                  <Image source={require("../../../img/group5.png")} style={styles.captureImg} />
            </TouchableOpacity>
        </Camera>

        </View>
      </Modal>
    );
  }
}

