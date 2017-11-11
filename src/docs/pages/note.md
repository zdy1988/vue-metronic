<row>
<column :md=12>

### 使用

<note>
  这是一段文字.
</note>

```html
<note>
  这是一段文字
</note>
```

### 状态色

<note title="成功! " state="success">
  这是一段文字.
</note>
<note title="信息! " state="info">
  这是一段文字.
</note>
<note title="错误! " state="danger">
  这是一段文字.
</note>
<note title="警告! " state="warning">
  这是一段文字.
</note>

```html
<note title="成功! " state="success">
  这是一段文字.
</note>
<note title="信息! " state="info">
  这是一段文字.
</note>
<note title="错误! " state="danger">
  这是一段文字.
</note>
<note title="警告! " state="warning">
  这是一段文字.
</note>
```

  ### API
  
  <portlet title="Note" icon="map-signs" theme="light" bordered>
  
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
                  <td> 设置状态色，可选值 success, info, warning, danger </td>
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
                  <td> title </td>
                  <td> 设置标题 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> content </td>
                  <td> 设置内容</td>
                  <td> Boolean </td>
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
                  <td> 设置内容 </td>
              </tr>
          </tbody>
      </table>
  </div>
  
  </portlet>

</column>
</row>
