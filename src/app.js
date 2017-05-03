import { StackNavigator as stackNavigator } from 'react-navigation';
import Tab from './components/tab';
import Posts from './components/posts/Posts';
import PostDetail from './components/posts/PostDetail';
import Comments from './components/comments/Comments';

const App = stackNavigator({
  Tab: { screen: Tab },
  BlogPosts: { screen: Posts },
  PostDetail: { screen: PostDetail },
  Comments: { screen: Comments },
});

export default App;
