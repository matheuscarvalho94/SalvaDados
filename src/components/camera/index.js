import React from 'react'
import { RNCamera } from 'react-native-camera';
import { View, TouchableOpacity, Text, Modal, Image } from 'react-native';
import styles from './styles';

class CameraView extends React.Component {

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      console.log('Path to image: ' + data.uri);
    } catch (err) {
      // console.log('err: ', err);
    }
  };

  render() {
    const { visible, openCamera} = this.props;
    if(!visible) return (<View/>)
    return (
      <View>
      <Modal>
      
      <View style={styles.container}>
        <View style={styles.headerCamera}>
          <TouchableOpacity onPress={() => { openCamera(false) }}>
            <Text style={styles.txtCancel}> Cancelar </Text>
          </TouchableOpacity>
        </View>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
        >
          <View style={styles.containerImagem}>
            <Image source={require("../../../img/group4.png")} style={styles.imagemRg} />
          </View>
          <View style={styles.captureContainer}>
            <TouchableOpacity   onPress={this.takePicture}>
              <Image source={require("../../../img/group5.png")} style={styles.captureImg} />
            </TouchableOpacity>
          </View>
        </RNCamera>

        <View style={styles.space} />
        </View>
      </Modal>

      </View>
    );
  }
}

export default CameraView;