import { StackNavigator } from 'react-navigation';
import colors from  '../styles/colors'

//page
import Splash from '../page/splash'
import Home from '../page/home';
import Form from '../page/form';
import DetailItem from '../page/detail';

const navigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: colors.white,
    height: 60,
    paddingTop: 10,
  },
  titleStyle: {
    fontFamily: 'OpenSansSemiBold',
  },
  headerBackTitle: null,
  headerLeft: null,
})

const NavigatorMain = StackNavigator({
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
  navigationOptions,
}
);

const MainNavigator = StackNavigator({
  Splash: {
    screen: Splash
  },
  NavigatorMain: {
    screen: NavigatorMain,
  }
},{
  initialRouteName: "Splash",
  headerMode: "none",
}
);

export default MainNavigator;
