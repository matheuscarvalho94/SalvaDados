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
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    marginBottom: 32,
    color: 'rgba(54, 61, 79, 1)'
  },
  txt2: {
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 12,
    fontFamily: 'Open Sans',
    color: 'rgba(54, 61, 79, 1)'
  },
  txt3: {
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 12,
    fontFamily: 'Open Sans',
    marginTop: 32,
    paddingLeft: 16,
    color: 'rgba(54, 61, 79, 1)'
  },
  form:{
    backgroundColor: colors.white,
    width: '100%',
    paddingTop: 26,
  },
  formFotos:{
    backgroundColor: colors.white,
    width: '100%',
  },
  rowFlex:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(237, 237, 237, 1)',
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconFoto: {
    width: 20,
    height: 20,
    marginLeft: 16,
    marginRight: 15,
  },
  row:{
    width: '100%',
    marginBottom: 15,
    paddingLeft: 16,
    fontFamily: 'Open Sans',
    paddingRight: 16,
  },
  label: {
    fontSize: 12,
    color: colors.darker2,
    fontWeight: '600',
    fontFamily: 'Open Sans',
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: colors.bluelight,
    borderRadius: 6,
    color: colors.dark,
    fontFamily: 'Open Sans',
    fontSize: 18,
    paddingHorizontal: 15,
  },
  areaButton: {
    padding: 16,
  },
  buttonSave: {
    width: '100%',
    height: 60,
    backgroundColor: colors.bluelight2,
    borderRadius: 6,
    marginTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: colors.white,
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '600'
  },
  icoRg: {
    width: 36,
    height: 25,
    marginLeft: 16,
    marginRight: 15,
  },
});

export default styles;
