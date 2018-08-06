import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 18,
  },
  closed: {
    width: 25,
    height: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  closedImg: {
    width: 15,
    height: 15,
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
    marginBottom: 15,
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
  thumbnail: {
    width: '100%',
    height: 250,
    position: 'relative'
  },

  descriptiontext: {
    color: colors.darker,
    fontSize: 17,
  },

  thumbnailContent: {
    flex: 1,
    paddingLeft: Platform.OS === 'ios' ? 0 : 22,
    backgroundColor: colors.darkTransparent,
    position: 'absolute',
    left: 20,
    bottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
