<row>
<column :md=12>

### 使用

<lable>标签<lable>

```html
<lable>标签<lable>
```

### 状态色

<lable state="default">默认</lable>
<lable state="primary">基本</lable>
<lable state="success">成功</lable>
<lable state="info">信息</lable>
<lable state="warning">警告</lable>
<lable state="danger">错误</lable>

```html
<lable state="default">默认</lable>
<lable state="primary">基本</lable>
<lable state="success">成功</lable>
<lable state="info">信息</lable>
<lable state="warning">警告</lable>
<lable state="danger">错误</lable>
```

### API

<portlet title="Lable" icon="map-signs" theme="light" bordered>

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
                  <td> default </td>
              </tr>
              <tr>
                  <td> color </td>
                  <td> 设置背景色，将覆盖状态色，可选值参考 <router-link to="/main/color">Color</router-link> </td>
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
</portlet>

</column>
</row>
