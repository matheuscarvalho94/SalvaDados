import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 25,
    width: '100%',
    borderRadius: 6,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  info: {
    flex: 1,
    marginLeft: 15,
  },

  icoRg: {
    width: 36,
    height: 25,
  },

  description: {
    marginTop: 3,
    color: colors.darker,
    fontSize: 1,
  },

});

export default styles;
