import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  base: {
    width: '90%',
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 47,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 0,

  },
  foto: {
    width: 32,
    height: 32,
  },
  center: {
    width: '90%',
  },
  center2: {
    width: '60%',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImg: {
    width: 127,
    height: 113,
    marginBottom: 17,
  },
  txt: {
    fontSize: 17,
    fontFamily: 'Open Sans',
    color: colors.secundary,
    textAlign: 'center',
  },
  footer:{
    flex: 1,
    width: '100%',
    padding: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonAdd: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    width: 21,
    height: 21,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  modalContainer: {
    backgroundColor: colors.white,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderColor: 'rgba(237, 237, 237, 1)',
  },
  iconList:{
    width: 21,
    height: 21,
    marginRight: 20,
  },
  titModal: {
    fontSize: 11,
    marginBottom: 10,
    color: '#9a9ca6',
    marginLeft: 20,
  }
});

export default styles;
