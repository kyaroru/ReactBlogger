
const blog = (item, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return {
        blogId: action.blogId,
        title: action.title,
        url: action.url
      }
    default:
      return item
  }
}

const blogArray:any = [
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

const blogs = (blogList : any = blogArray, action : any) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [
        ...blogList,
        blog(undefined, action)
      ]
    case 'REMOVE_BLOG':
      let index = blogList.findIndex((x) => x.blogId === action.blogId);
      return [
        ...blogList.slice(0, index),
        ...blogList.slice(index + 1)
      ]
      // blogList.filter((item) => { return item.name !== n })
    default:
      return blogList
  }
}

export default blogs
