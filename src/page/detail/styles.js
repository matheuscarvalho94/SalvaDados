import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 18,
  },
  header: {
    paddingTop: 50,
  },
  arrow: {
    width: 14,
    height: 22,
  },
  subsTitle: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
  },
  txt: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.darker,
  },
  form:{
    backgroundColor: colors.white,
    width: '100%',
    paddingTop: 30  ,
    paddingBottom: 26,
    marginTop: 9,
  },
  row:{
    width: '100%',
    marginBottom: 26,
    paddingLeft: 16,
    paddingRight: 16,
  },
  label: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: colors.darker2,
    fontWeight: '600',
    marginBottom: 5,
  },
  label2: {
    fontSize: 17,
    textTransform: 'uppercase',
    color: colors.darker,
    fontWeight: '400',
    marginBottom: 5,
  },
  formFotos:{
    backgroundColor: colors.white,
    width: '100%',
    marginTop: 9,
  },
  rowFlex:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(237, 237, 237, 1)',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 5,
    paddingLeft: 5,
  },
  iconFoto: {
    width: 20,
    height: 20,
    marginLeft: 16,
    marginRight: 15,
  },
  editarFont: {
    fontSize: 14,
    color: colors.blue,
    fontWeight: '600'
  },
  imagemModal: {
    width: '100%'
  }
});

export default styles;
