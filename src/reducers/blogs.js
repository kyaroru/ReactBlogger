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
  },
  {
    blogId: 3,
    title: 'AngularJs',
    url: 'http://angularjs.blogspot.my/'
  },
  // {
  //   blogId: 4,
  //   title: 'AngularJs',
  //   url: 'http://angularjs.blogspot.my/'
  // },
  // {
  //   blogId: 5,
  //   title: 'AngularJs',
  //   url: 'http://angularjs.blogspot.my/'
  // },
  // {
  //   blogId: 6,
  //   title: 'AngularJs',
  //   url: 'http://angularjs.blogspot.my/'
  // },
  // {
  //   blogId: 7,
  //   title: 'AngularJs',
  //   url: 'http://angularjs.blogspot.my/'
  // },
  // {
  //   blogId: 8,
  //   title: 'AngularJs',
  //   url: 'http://angularjs.blogspot.my/'
  // },
  // {
  //   blogId: 9,
  //   title: 'AngularJs',
  //   url: 'http://angularjs.blogspot.my/'
  // },
  // {
  //   blogId: 10,
  //   title: 'AngularJs',
  //   url: 'http://angularjs.blogspot.my/'
  // }
];

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
    default:
      return blogList
  }
}

export default blogs
