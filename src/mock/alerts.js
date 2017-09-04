/**
 * Created by virus_zhh on 2017/9/4.
 */
import Mock from 'mockjs'

Mock.mock('/api/GetAlerts', 'post', {
  'status': 200,
  'data|50': [{
    'id': '@guid',
    'senderId|1-10': 1,
    'receiverId|1-10': 2,
    'datetime': '@datetime("yyyy/MM/dd HH:mm:ss")',
    'content': '@csentence',
    'read|1-2': true,
    'icon': '@pick(["check", "bar-chart-o", "user", "bell-o"])',
    'status': '@pick(["danger", "success", "warning", "info"])',
    'desc': '提醒：@csentence 需要完成。',
    'time': '@datetime("yyyy/MM/dd A HH:mm:ss")',
    'type|1-2': 1
  }]
})
