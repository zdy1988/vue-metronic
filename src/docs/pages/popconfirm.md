<row>
<column :md=12>
  
### 使用
  
<p>
  <popconfirm @ok="_ok" @cancel="_cancel" title="确认提示">
    <btn color="red" outline>视图演示</btn>
  </popconfirm>
</p>

<script>
  export default{
    methods: {
      _ok () {
        console.log('确认!')
      },
      _cancel () {
        console.log('取消!')
      }
    }
  }
</script>

```html
<popconfirm @ok="_ok" @cancel="_cancel" title="确认提示">
  <btn color="red" outline>视图演示</btn>
</popconfirm>

<script>
  export default{
    methods: {
      _ok () {
        console.log('确认!')
      },
      _cancel () {
        console.log('取消!')
      }
    }
  }
</script>
```

  ### API
  
  <portlet title="Popover" icon="map-signs" theme="light" bordered>
  
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
                  <td> title </td>
                  <td> 设置标题 </td>
                  <td> String </td>
                  <td> 请确认 </td>
              </tr>
              <tr>
                  <td> okText </td>
                  <td> 设置确认文字 </td>
                  <td> String </td>
                  <td> 确认 </td>
              </tr>
              <tr>
                  <td> cancelText </td>
                  <td> 设置取消文字 </td>
                  <td> String </td>
                  <td> 取消 </td>
              </tr>
              <tr>
                  <td> placement </td>
                  <td> 设置显示位置 </td>
                  <td> top, bottom, left, right </td>
                  <td> top </td>
              </tr>
          </tbody>
      </table>
  </div>

  #### Slots

  <div class="table-scrollable table-scrollable-borderless">
      <table class="table table-hover table-bordered">
          <thead>
              <tr class="uppercase">
                  <th> 名称 </th>
                  <th> 说明 </th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td> default </td>
                  <td> 设置触发目标 </td>
              </tr>
          </tbody>
      </table>
  </div>
  
  #### Events
  
  <div class="table-scrollable table-scrollable-borderless">
      <table class="table table-hover table-bordered">
          <thead>
              <tr class="uppercase">
                  <th> 名称 </th>
                  <th> 说明 </th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td> ok </td>
                  <td> 设置点击确认时触发 </td>
              </tr>
              <tr>
                  <td> cancel </td>
                  <td> 设置点击取消时触发  </td>
              </tr>
          </tbody>
      </table>
  </div>
  
  </portlet>

</column>
</row>
