<row>
<column :md=12>

### 使用

<well>第 {{currentPage}} 页</well>
<pagination :total-rows="100" v-model="currentPage" :per-page="10"></pagination>

<script>
  export default {
    data () {
      return {
        currentPage: 2
      }
    },
  }
</script>

```html
<pagination :total-rows="100" v-model="currentPage" :per-page="10"></pagination>

<script>
  export default {
    data () {
      return {
        currentPage: 2
      }
    },
  }
</script>  
```

### 尺寸

<div>
  <pagination size="lg" :total-rows="100" v-model="currentPage" :per-page="10"></pagination>
</div>
<div>
  <pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10"></pagination>
</div>
<div>
  <pagination size="sm" :total-rows="100" v-model="currentPage" :per-page="10"></pagination>
</div>

```html
<pagination size="lg" :total-rows="100" v-model="currentPage" :per-page="10"></pagination>
<pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10"></pagination>
<pagination size="sm" :total-rows="100" v-model="currentPage" :per-page="10"></pagination>
```
### API

<portlet title="Pagination" icon="map-signs" theme="light" bordered>

#### Props

<div class="table-scrollable table-scrollable-borderless">
    <table class="table table-hover table-bordered">
        <thead>
            <tr class="uppercase">
                <th> 属性 </th>
                <th> 说明 </th>
                <th> 类型 </th>
                <th> 默认值 </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> value </td>
                <td> 设置值，也就是当前页码，设置方式为 v-model="" 或者 value.sync="" </td>
                <td> Number </td>
                <td> 1 </td>
            </tr>
            <tr>
                <td> disabled </td>
                <td> 设置是否禁用 </td>
                <td> Boolean </td>
                <td> false </td>
            </tr>
            <tr>
                <td> limit </td>
                <td> 设置最多显示几个按钮 </td>
                <td> Number </td>
                <td> 5 </td>
            </tr>
            <tr>
                <td> perPage </td>
                <td> 设置每页显示记录数 </td>
                <td> Number </td>
                <td> 20 </td>
            </tr>
            <tr>
                <td> totalRows </td>
                <td> 设置总记录数 </td>
                <td> Number </td>
                <td> 20 </td>
            </tr>
            <tr>
                <td> size </td>
                <td> 设置尺寸，可选值 lg, md, sm </td>
                <td> String </td>
                <td> md </td>
            </tr>
            <tr>
                <td> hideGotoEndButtons </td>
                <td> 设置是否隐藏导航到最后一页的按钮 </td>
                <td> Boolean </td>
                <td> false </td>
            </tr>
            <tr>
                <td> labelFirstPage </td>
                <td> 设置第一页跳转按钮提示 </td>
                <td> String </td>
                <td> 第一页 </td>
            </tr>
            <tr>
                <td> firstText </td>
                <td> 设置第一页按钮文字 </td>
                <td> String </td>
                <td> '&laquo;' </td>
            </tr>
            <tr>
                <td> labelPrevPage </td>
                <td> 设置上一页跳转按钮提示 </td>
                <td> String </td>
                <td> '上一页' </td>
            </tr>
            <tr>
                <td> prevText </td>
                <td> 设置上一页按钮文字 </td>
                <td> String </td>
                <td> '&lsaquo;' </td>
            </tr>
            <tr>
                <td> labelNextPage </td>
                <td> 设置下一页跳转按钮提示 </td>
                <td> String </td>
                <td> '下一页' </td>
            </tr>
            <tr>
                <td> nextText </td>
                <td> 设置下一页按钮文字 </td>
                <td> String </td>
                <td> '&rsaquo;' </td>
            </tr>
            <tr>
                <td> labelLastPage </td>
                <td> 设置最后一页跳转按钮提示 </td>
                <td> String </td>
                <td> '最后一页' </td>
            </tr>
            <tr>
                <td> lastText </td>
                <td> 设置最后一页按钮文字 </td>
                <td> String </td>
                <td> '&raquo;' </td>
            </tr>
            <tr>
                <td> labelPage </td>
                <td> 设置跳转按钮提示，页码将替换 {0}  </td>
                <td> String </td>
                <td> '第{0}页' </td>
            </tr>
            <tr>
                <td> hideEllipsis </td>
                <td> 设置是否显示省略提示 </td>
                <td> String </td>
                <td> false </td>
            </tr>
            <tr>
                <td> ellipsisText </td>
                <td> 设置省略提示符 </td>
                <td> Boolean </td>
                <td> '&hellip;' </td>
            </tr>
        </tbody>
    </table>
</div>

</portlet>

</column>
</row>
