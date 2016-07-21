// @flow
let nextBlogId = 3
export const addBlog = (blog:Object) => {
  return {
    type: 'ADD_BLOG',
    blogId: nextBlogId++,
    blog
  }
}

export const removeBlog = (blogId:string) => {
  return {
    type: 'REMOVE_BLOG',
    blogId
  }
}
