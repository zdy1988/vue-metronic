<row>
<column :md=12>

### 使用

<portlet title="内容标题" summary="内容简介" icon="pencil">
  这是一个默认容器
</portlet>

```html
<portlet title="内容标题" summary="内容简介" icon="pencil">
  这是一个默认容器
</portlet>
```

### 例子

<portlet theme='box' color='green-sharp'>
  这是一个默认容器
</portlet>
<portlet theme='box' color='blue-hoki' title='内容标题' summary='内容简介...' icon='pencil' :tools='false'>
  <btn color='red' slot='actions'>按钮</btn>
  这是一个默认容器
</portlet>
<portlet theme='solid' color='blue-hoki' title='内容标题' icon='pencil'>
  这是一个默认容器
</portlet>
<portlet theme='light' color='red' icon='pencil'>
  这是一个默认容器
</portlet>
<portlet theme='light' color='red' title='内容标题' icon='pencil'>
  这是一个默认容器
</portlet>
<portlet theme='light' color='red' bordered title='内容标题' icon='pencil'>
  这是一个默认容器
</portlet>

### API

<portlet title="Portlet" icon="map-signs" theme="light" bordered>    
 
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
                  <td> theme </td>
                  <td> 设置主题样式，可选值 box, solid, light </td>
                  <td> String </td>
                  <td> box </td>
              </tr>
              <tr>
                  <td> title </td>
                  <td> 设置标题 </td>
                  <td> String </td>
                  <td> 标题 </td>
              </tr>
              <tr>
                  <td> summary </td>
                  <td> 设置说明文字 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> icon </td>
                  <td> 设置图标，图标来源Font-A-wesome </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> color </td>
                  <td> 设置背景色，将覆盖状态色，可选值参考 <router-link to="/main/color">Color</router-link> </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> bordered </td>
                  <td> 设置是否显示边框,在 state 为 light 的模式下生效 </td>
                  <td> Boolean </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> tools </td>
                  <td> 设置是否显示工具 </td>
                  <td> Boolean </td>
                  <td> true </td>
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
                  <td> actions </td>
                  <td> 设置一些行为按钮 </td>
              </tr>
          </tbody>
      </table>
  </div>
  
</portlet>

</column>
</row>
