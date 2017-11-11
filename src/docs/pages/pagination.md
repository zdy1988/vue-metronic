<row>
<column :md=12>

### 使用

<well>第 {{currentPage}} 页</well>
<pagination :total="total" :page-index="currentPage" @page-change="pageChange" @page-size-change="pageSizeChange"></pagination>

```html
<pagination :total="total" @page-change="pageChange" @page-size-change="pageSizeChange"></pagination>

<script>
  export default {
    data () {
      return {
        total: 100,
        currentPage: 2
      }
    },
    methods: {
      pageChange (pageIndex) {
        this.currentPage = pageIndex
      },
      pageSizeChange (pageSize) {
        console.log(pageSize)
      }
    }
  }
</script>  
```


> 更多帮助 [vue-easy-table](http://doc.huangsw.com/vue-easytable/app.html#/pagination)
