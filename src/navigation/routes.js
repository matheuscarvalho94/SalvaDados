import { StackNavigator } from 'react-navigation';
import colors from  '../styles/colors'

//page
import Home from '../page/home';
import Form from '../page/form';
import DetailItem from '../page/detail';

const navigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: colors.white,
    height: 60,
    paddingTop: 10,
   },
   headerBackTitle: null,
   headerLeft: null,
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  Form: {
    screen: Form
  },
  DetailItem: {
    screen: DetailItem
  }
},{
  initialRouteName: "Home",
  navigationOptions,
}
);

export default MainNavigator;
