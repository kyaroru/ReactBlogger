import { StackNavigator } from 'react-navigation';
// import Tab from './Tab';
import Blogs from '../blogs/Blogs';
import Posts from '../posts/Posts';
import PostDetail from '../posts/PostDetail';
import Comments from '../comments/Comments';

const AppNavigator = StackNavigator({
  // Tab: { screen: Tab },
  BlogList: { screen: Blogs },
  BlogPosts: { screen: Posts },
  PostDetail: { screen: PostDetail },
  Comments: { screen: Comments },
});

export default AppNavigator;
