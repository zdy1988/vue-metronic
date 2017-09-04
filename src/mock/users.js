import Mock from 'mockjs'

const users = [
  {
    id: 1,
    username: 'xiaozhang',
    password: '123456',
    name: '小张',
    post: 'CEO',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar3.jpg',
    type: 1
  },
  {
    id: 2,
    name: '小王',
    username: 'xiaowang',
    password: '123456',
    post: 'CTO',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar1.jpg',
    type: 1
  },
  {
    id: 3,
    name: '小李',
    username: 'xiaoli',
    password: '123456',
    post: 'CFO',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar4.jpg',
    type: 1
  },
  {
    id: 4,
    name: '小戴',
    username: 'xiaodai',
    password: '123456',
    post: '项目经理',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar2.jpg',
    type: 1
  },
  {
    id: 5,
    name: '小明',
    username: 'xiaoming',
    password: '123456',
    post: 'CEO',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar3.jpg',
    type: 2
  },
  {
    id: 6,
    name: '小菊花',
    username: 'xiaojuhua',
    password: '123456',
    post: 'CTO',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar1.jpg',
    type: 2
  },
  {
    id: 7,
    name: '小华',
    username: 'xiaohua',
    password: '123456',
    post: 'CFO',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar4.jpg',
    type: 2
  },
  {
    id: 8,
    name: '寒梅',
    username: 'hanmei',
    password: '123456',
    post: '项目经理',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar2.jpg',
    type: 2
  },
  {
    id: 9,
    name: '陪陪',
    username: 'peipei',
    password: '123456',
    post: 'CEO',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar3.jpg',
    type: 2
  },
  {
    id: 10,
    name: '老王',
    username: 'laowang',
    password: '123456',
    post: 'CTO',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar1.jpg',
    type: 2
  },
  {
    id: 11,
    name: '老李',
    username: 'laoli',
    password: '123456',
    post: 'CFO',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar4.jpg',
    type: 2
  },
  {
    id: 12,
    name: '老戴',
    username: 'laodai',
    password: '123456',
    post: '项目经理',
    avatar: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar2.jpg',
    type: 2
  }
]

Mock.mock('/api/Login', 'post', config => {
  const { username, password } = JSON.parse(config.body)
  const user = users.find(user => {
    return user.username === username && user.password === password
  })
  if (user) {
    return {
      'status': 200,
      'data': user
    }
  } else {
    return {
      'status': 404
    }
  }
})

Mock.mock('/api/GetUsers', 'post', {
  'status': 200,
  'data': users
})
