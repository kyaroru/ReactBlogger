import { TabNavigator as tabNavigator } from 'react-navigation';
import Blogs from '../blogs/Blogs';
import Settings from '../settings';
import * as Colors from 'themes/colors';
import { getTabNavigationOptions } from 'themes/appStyles';

const blogOptions = getTabNavigationOptions('Blog List', 'list-ul', Colors.white, Colors.primary);
const settingOptions = getTabNavigationOptions('Settings', 'cog', Colors.white, Colors.primary);

const Tab = tabNavigator({
  BlogList: { screen: Blogs, navigationOptions: blogOptions },
  Settings: { screen: Settings, navigationOptions: settingOptions },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: Colors.primary,
    inactiveTintColor: Colors.secondary,
    showIcon: true,
    // showLabel: false,
    upperCaseLabel: false,
    style: {
      backgroundColor: 'white',
    },
    tabStyle: {
      padding: 0,
    },
    indicatorStyle: {
      backgroundColor: 'transparent',
    },
    labelStyle: {
      fontSize: 10,
      margin: 0,
      marginBottom: 5,
    },
  },
});

export default Tab;
