import { connect } from 'react-redux'
import { addBlog, removeBlog } from '../actions'
import BlogList from '../components/BlogList'

const blogList:Array<any> = [
  {
    blogId: 1,
    title: 'Carol Blog',
    url: 'http://blog.kyaroru.com/'
  },
  {
    blogId: 2,
    title: 'AngularJs',
    url: 'http://angularjs.blogspot.my/'
  }
];

const mapStateToProps = (state) => {
  return {
    blogs: blogList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogClick: (blogId) => {
      dispatch(removeBlog(blogId))
    }
  }
}

const BlogListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList)

export default BlogListContainer
