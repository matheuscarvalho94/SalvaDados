import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../styles';
const styles = StyleSheet.create({

// container: {
//     flex: 1,
//   },
//   topButtons: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     alignItems: 'flex-start',
//   },
//   bottomButtons: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   preview: {
//     flex: 1,
//     width: '100%',
//     height: '100%',

//   },
//   flipButton: {
//     flex: 1,
//     marginTop: 20,
//     right: 20,
//     alignSelf: 'flex-end',
//   },
//   recordingButton: {
//     marginBottom: 10,
//   },
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
  },
container: {
  flex: 1,
  flexDirection: 'column',
},
preview: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center'
},
capture: {
  flex: 0,
  borderRadius: 50,
  padding: 0,
  marginBottom: 50,
  height: 60,
  width: 60,
},
loadingMsg: {
  position: 'absolute',
  top: '50%',
  left: '50%'
},
loadingText: {
  fontSize: 18,
  padding: 5,
  borderRadius: 20,
  backgroundColor: 'white',
  marginBottom:  50
},
spinner: {
  marginBottom: 50
}
})


export default styles;