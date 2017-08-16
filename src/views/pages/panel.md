<row>
<column :md=12>

### 使用

<panel title="面板标题">
  面板内容
</panel>

<panel>
  <div slot="header">
    面板头部
  </div>
  面板内容
  <div slot="footer">
    面板尾部
  </div>
</panel>

```html
<panel title="面板标题">
  面板内容
</panel>

<panel>
  <div slot="header">
    面板头部
  </div>
  面板内容
  <div slot="footer">
    面板尾部
  </div>
</panel>
```

### 状态色

<panel state="default" title="面板标题">面板内容</panel>
<panel state="primary" title="面板标题">面板内容</panel>
<panel state="success" title="面板标题">面板内容</panel>
<panel state="info" title="面板标题">面板内容</panel>
<panel state="warning" title="面板标题">面板内容</panel>
<panel state="danger" title="面板标题">面板内容</panel>

```html
<panel state="default" title="面板标题">面板内容</panel>
<panel state="primary" title="面板标题">面板内容</panel>
<panel state="success" title="面板标题">面板内容</panel>
<panel state="info" title="面板标题">面板内容</panel>
<panel state="warning" title="面板标题">面板内容</panel>
<panel state="danger" title="面板标题">面板内容</panel>
```

### 面板中的表格

<panel state="info" title="Panel Title">
  <p> 一些默认的面板内容。 </p>
  <table class="table" slot="table">
    <thead>
    <tr>
      <th> # </th>
      <th> First Name </th>
      <th> Last Name </th>
      <th> Username </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td> 1 </td>
      <td> Mark </td>
      <td> Otto </td>
      <td> @mdo </td>
    </tr>
    <tr>
      <td> 2 </td>
      <td> Jacob </td>
      <td> Thornton </td>
      <td> @fat </td>
    </tr>
    <tr>
      <td> 3 </td>
      <td> Larry </td>
      <td> the Bird </td>
      <td> @twitter </td>
    </tr>
    </tbody>
  </table>
</panel>

```html
<panel state="info" title="面板标题">
  <p> 一些默认的面板内容。 </p>
  <table class="table" slot="table">
    <thead>
    <tr>
      <th> # </th>
      <th> First Name </th>
      <th> Last Name </th>
      <th> Username </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td> 1 </td>
      <td> Mark </td>
      <td> Otto </td>
      <td> @mdo </td>
    </tr>
    <tr>
      <td> 2 </td>
      <td> Jacob </td>
      <td> Thornton </td>
      <td> @fat </td>
    </tr>
    <tr>
      <td> 3 </td>
      <td> Larry </td>
      <td> the Bird </td>
      <td> @twitter </td>
    </tr>
    </tbody>
  </table>
</panel>
```

### 面板中的列表

<panel state="warning" title="Panel Title">
  <p> 一些默认的面板内容。 </p>
  <list slot="list">
    <list-item>Item 1 <badge>1</badge></list-item>
    <list-item>Item 2 <badge color="red">5</badge></list-item>
    <list-item>Item 3 <badge color="green">2</badge></list-item>
    <list-item>Item 4 <badge color="blue">3</badge></list-item>
  </list>
</panel>

```html
<panel state="warning" title="Panel Title">
  <p> 一些默认的面板内容。 </p>
  <list slot="list">
    <list-item>Item 1 <badge>1</badge></list-item>
    <list-item>Item 2 <badge color="red">5</badge></list-item>
    <list-item>Item 3 <badge color="green">2</badge></list-item>
    <list-item>Item 4 <badge color="blue">3</badge></list-item>
  </list>
</panel>
```

  ### API
  
  <portlet title="Panel" icon="map-signs" theme="light" bordered>
  
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
                  <td> title </td>
                  <td> 设置标题 </td>
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
                  <td> 设置内容 </td>
              </tr>
              <tr>
                  <td> header </td>
                  <td> 设置面板头部内容 </td>
              </tr>
              <tr>
                  <td> footer </td>
                  <td> 设置面板尾部内容 </td>
              </tr>
          </tbody>
      </table>
  </div>
  
  </portlet>

</column>
</row>
