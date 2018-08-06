import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../styles';
const styles = StyleSheet.create({

container: {
    flex: 1,
  },
  topButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
  },
  bottomButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    width: '100%',
    height: '100%',

  },
  flipButton: {
    flex: 1,
    marginTop: 20,
    right: 20,
    alignSelf: 'flex-end',
  },
  recordingButton: {
    marginBottom: 10,
  },
  containerImagem: {
    flex: 1,
    paddingLeft: 26,
    paddingRight: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemRg: {
    width: '100%',
    resizeMode: 'contain',
  },
  headerCamera: {
      width: '100%',
      backgroundColor: colors.black,
      paddingTop: Platform.OS === 'ios' ? 25 : 0,
      paddingBottom: 0,
  },
  txtCancel: {
      color: colors.white,
      fontWeight: 'normal',
      fontSize: 15,
      padding: 18,
      textAlign: 'right'
  },
  captureContainer: {
    width: '100%',
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  captureImg: {
    width: 60,
    height: 60,
  }

})


export default styles;