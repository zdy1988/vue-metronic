<row>
<column :md=12>

### 使用

<badge>1</badge>

```html
<badge>1</badge>
```

### 状态色

<badge state="default">1</badge>
<badge state="primary">2</badge>
<badge state="success">3</badge>
<badge state="info">4</badge>
<badge state="warning">5</badge>
<badge state="danger">6</badge>

```html
<badge state="default">1</badge>
<badge state="primary">2</badge>
<badge state="success">3</badge>
<badge state="info">4</badge>
<badge state="warning">5</badge>
<badge state="danger">6</badge>
```

### 环境

<p>
  <btn-dropdown text="点击">
    <btn>按钮 1 <badge class="float-right">2</badge></btn>
    <btn state="success">按钮 2 <badge class="float-right">3</badge></btn>
    <btn state="danger">按钮 3 <badge class="float-right">4</badge></btn>
  </btn-dropdown>
</p>

```html
<btn-dropdown text="点击">
  <btn>按钮 1 <badge class="float-right">2</badge></btn>
  <btn state="success">按钮 2 <badge class="float-right">3</badge></btn>
  <btn state="danger">按钮 3 <badge class="float-right">4</badge></btn>
</btn-dropdown>
```

<p>
  <list>
    <list-item>Item 1 <badge>1</badge></list-item>
    <list-item>Item 2 <badge color="red">5</badge></list-item>
    <list-item>Item 3 <badge color="green">2</badge></list-item>
    <list-item>Item 4 <badge color="blue">3</badge></list-item>
  </list>
</p>

```html
<list>
  <list-item>Item 1 <badge>1</badge></list-item>
  <list-item>Item 2 <badge color="red">5</badge></list-item>
  <list-item>Item 3 <badge color="green">2</badge></list-item>
  <list-item>Item 4 <badge color="blue">3</badge></list-item>
</list>
```

### API

<portlet title="Badge" icon="map-signs" theme="light" bordered>     
  
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
                  <td> shape </td>
                  <td> 设置标记形状，可选值 circle, square </td>
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
