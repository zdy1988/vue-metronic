<row>
<column :md=12>

### 使用

<alert :show="true" content="提示成功！"></alert>

```html
<alert :show="true" content="提示成功！"></alert>
```

### 状态色

<alert :show="true" state="success">提示成功！</alert>
<alert :show="true" state="info">提示信息！</alert>
<alert :show="true" state="warning">提示警告！</alert>
<alert :show="true" state="danger">提示错误！</alert>

```html
<alert :show="true" state="success">提示成功！</alert>
<alert :show="true" state="info">提示信息！</alert>
<alert :show="true" state="warning">提示警告！</alert>
<alert :show="true" state="danger">提示错误！</alert>
```

### 例子

<alert v-model="show" content="提示成功！"></alert>
<btn @click="show = !show">切换显示</btn>
<script>
  export default {
    data () {
      return {
        show: true
      }
    }
  }
</script>

```html
<alert v-model="show" content="提示成功！"></alert>
<btn @click="show = !show">切换显示</btn>
<script>
  export default {
    data () {
      return {
        show: true
      }
    }
  }
</script>
```

### API

<portlet title="Alert" icon="map-signs" theme="light" bordered> 
  
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
                  <td> state </td>
                  <td> 设置状态色，可选值 default, primary, success, info, warning, danger </td>
                  <td> String </td>
                  <td> success </td>
              </tr>
              <tr>
                  <td> color </td>
                  <td> 设置背景色，将覆盖状态色，可选值参考 <router-link to="/main/color">Color</router-link> </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> show </td>
                  <td> 设置是否显示，必选项 </td>
                  <td> Boolean </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> content </td>
                  <td> 设置内容 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> klass </td>
                  <td> 设置附加样式class </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
          </tbody>
      </table>      
  </div>
  
  <br>
  
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
                  <td> 设置内容，将覆盖 Props 中的 content 属性！ </td>
              </tr>
          </tbody>
      </table>      
  </div>
  
</portlet>

</column>
</row>
