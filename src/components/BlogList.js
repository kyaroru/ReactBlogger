// @flow
import React, {PropTypes} from 'react'
import Blog from './Blog'

type props = {
  onBlogClick: Function,
  blogs: Array<any>
};

export default ({ blogs, onBlogClick }: props) => (
  <ul>
    {blogs.map(blog =>
      <Blog
        blogId={blog.blogId}
        title={blog.title}
        url={blog.url}
        {...blog}
        onClick={() => onBlogClick(blog.blogId)}
      />
    )}
  </ul>
)
