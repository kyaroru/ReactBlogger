// @flow
let nextBlogId = 0
export const addBlog = (blog:any) => {
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
