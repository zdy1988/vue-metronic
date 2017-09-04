import Mock from 'mockjs'

Mock.mock('/api/GetTasks', 'post', {
  'status': 200,
  'data|20': [{
    'id': '@guid',
    'name': '任务：@cword("零一二三四五六七八九十", 3)',
    'state': '@pick(["danger", "success", "warning", "info"])',
    'progress|1-99': 99
  }]
})
