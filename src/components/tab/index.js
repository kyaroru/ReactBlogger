import { TabNavigator as tabNavigator } from 'react-navigation';
import Blogs from '../blogs/Blogs';
import Settings from '../settings';
import { getTabNavigatorConfig } from '../../themes/appStyles';

const Tab = tabNavigator({
  BlogList: { screen: Blogs },
  Settings: { screen: Settings },
}, getTabNavigatorConfig());

export default Tab;
