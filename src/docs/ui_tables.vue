<template>
  <row>
    <column :md="12">
      <easy-table
        is-horizontal-resize
        column-width-drag
        style='width:100%'
        :columns='columns'
        :table-data='tableData'
        row-hover-color='#eee'
        row-click-color='#edf7ff'
      ></easy-table>

      <h2>selection 多选</h2>

      <easy-table
        is-horizontal-resize
        column-width-drag
        style='width:100%'
        :columns='columns2'
        :table-data='tableData2'
        row-hover-color='#eee'
        row-click-color='#edf7ff'
        :select-all='selectALL'
        :select-change='selectChange'
        :select-group-change='selectGroupChange'
      ></easy-table>
      <br>
      <easy-pagination @page-change="pageChange" @page-size-change="pageSizeChange" :total="data.length" :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"></easy-pagination>
    </column>
  </row>
</template>
<script>
  import {ajax} from '@/untils'

  export default{
    data () {
      return {
        pageIndex: 1,
        pageSize: 10,
        tableData: [
          {'name': '赵伟', 'tel': '156*****1987', 'hobby': '钢琴、书法、唱歌', 'address': '上海市黄浦区金陵东路569号17楼'},
          {'name': '李伟', 'tel': '182*****1538', 'hobby': '钢琴、书法、唱歌', 'address': '上海市奉贤区南桥镇立新路12号2楼'},
          {'name': '孙伟', 'tel': '161*****0097', 'hobby': '钢琴、书法、唱歌', 'address': '上海市崇明县城桥镇八一路739号'},
          {'name': '周伟', 'tel': '197*****1123', 'hobby': '钢琴、书法、唱歌', 'address': '上海市青浦区青浦镇章浜路24号'},
          {'name': '吴伟', 'tel': '183*****6678', 'hobby': '钢琴、书法、唱歌', 'address': '上海市松江区乐都西路867-871号'}
        ],
        columns: [
          {field: 'name', title: '姓名', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'address', title: '地址', width: 280, titleAlign: 'center', columnAlign: 'left', isResize: true}
        ],
        data: [],
        tableData2: [],
        columns2: [
          {width: 60, titleAlign: 'center', columnAlign: 'center', type: 'selection'},
          {field: 'content', title: '内容', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'status', title: '狀態', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'desc', title: '介紹', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'time', title: '時間', width: 280, titleAlign: 'center', columnAlign: 'left', isResize: true}
        ]
      }
    },
    methods: {
      selectALL (selection) {
        console.log('select-aLL', selection)
      },
      selectChange (selection, rowData) {
        console.log('select-change', selection, rowData)
      },
      selectGroupChange (selection) {
        console.log('select-group-change', selection)
      },
      getTableData () {
        this.tableData2 = this.data.slice((this.pageIndex - 1) * this.pageSize, (this.pageIndex) * this.pageSize)
      },
      pageChange (pageIndex) {
        this.pageIndex = pageIndex
        this.getTableData()
        console.log(pageIndex)
      },
      pageSizeChange (pageSize) {
        this.pageIndex = 1
        this.pageSize = pageSize
        this.getTableData()
      }
    },
    mounted () {
      var self = this
      ajax.post('GetAlerts').done((rst) => {
        if (rst.status === 200) {
          self.data = rst.data
        }
        self.getTableData()
      })
    }
  }
</script>
