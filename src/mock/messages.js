import Mock from 'mockjs'

Mock.mock('/api/GetMessages', 'post', {
  'status': 200,
  'data|200': [{
    'id': '@guid',
    'senderId|1-10': 1,
    'receiverId|1-10': 2,
    'datetime': '@datetime("yyyy/MM/dd HH:mm:ss")',
    'content': '@csentence',
    'read|1-2': true
  }]
})
