<row>
<column :md=12>

### 使用

<list>
  <list-item>列 1</list-item>
  <list-item>列 2</list-item>
  <list-item>列 3</list-item>
</list>

```html
<list>
  <list-item>列 1</list-item>
  <list-item>列 2</list-item>
  <list-item>列 3</list-item>
</list>
```

### 状态色

<list>
  <list-item state="default">默认</list-item>
  <list-item state="success">成功</list-item>
  <list-item state="info">信息</list-item>
  <list-item state="warning">警告</list-item>
  <list-item state="danger">错误</list-item>
</list>

```html
<list>
  <list-item state="default">默认</list-item>
  <list-item state="success">成功</list-item>
  <list-item state="info">信息</list-item>
  <list-item state="warning">警告</list-item>
  <list-item state="danger">错误</list-item>
</list>
```

### API

<portlet title="List" icon="map-signs" theme="light" bordered>

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
                  <td> klass </td>
                  <td> 设置附加样式class </td>
                  <td> String </td>
                  <td> - </td>
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
                  <td> 设置列表列，只能设置 List Item </td>
              </tr>
          </tbody>
      </table>
  </div>

</portlet>

<portlet title="List Item" icon="map-signs" theme="light" bordered>

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
                  <td> 设置状态色，可选值 default, success, info, warning, danger </td>
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
                  <td> 设置列表列，只能设置 List Item </td>
              </tr>
          </tbody>
      </table>
  </div>

</portlet>

</column>
</row>
