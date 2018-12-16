import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
// import Tab from './Tab';
import Blogs from '../blogs/Blogs';
import Posts from '../posts/Posts';
import PostDetail from '../posts/PostDetail';
import Comments from '../comments/Comments';

const routeConfiguration = {
  // Tab: { screen: Tab },
  BlogList: { screen: Blogs },
  BlogPosts: { screen: Posts },
  PostDetail: { screen: PostDetail },
  Comments: { screen: Comments },
};

const AppNavigator = createStackNavigator(routeConfiguration);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;