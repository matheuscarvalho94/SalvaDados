import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../styles';
const styles = StyleSheet.create({

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
    marginBottom:  50
  }
})


export default styles;