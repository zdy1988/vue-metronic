<row>
<column :md=12>

### 使用

<p>
  <tooltip placement="top" title="卡片标题" content="提示">
    <btn color="red" outline>视图演示</btn>
  </tooltip>
</p>

```html
<tooltip placement="top" title="卡片标题" content="提示">
  <btn color="red" outline>视图演示</btn>
</tooltip>
```

### 位置

<tooltip placement="top" title="卡片标题">
  <btn color="red" outline>上</btn>
  <div slot="content">
    <p>卡片中的一些内容</p>
  </div>
</tooltip>
<tooltip placement="left" title="卡片标题">
  <btn color="green" outline>左</btn>
  <div slot="content">
    <p>卡片中的一些内容</p>
  </div>
</tooltip>
<tooltip placement="right" title="卡片标题">
  <btn color="blue" outline>右</btn>
  <div slot="content">
    <p>卡片中的一些内容</p>
  </div>
</tooltip>
<tooltip placement="bottom" title="卡片标题">
  <btn color="purple" outline>下</btn>
  <div slot="content">
    <p>卡片中的一些内容</p>
  </div>
</tooltip>

### 触发

<tooltip content="卡片中的一些内容" placement="top" triggers="click">
  <btn>click</btn>
</tooltip>
<tooltip content="卡片中的一些内容" placement="top" triggers="focus">
  <btn>focus</btn>
</tooltip>
<tooltip content="卡片中的一些内容" placement="top" triggers="hover">
  <btn>hover</btn>
</tooltip>
<tooltip content="卡片中的一些内容" placement="top" :triggers="['click','focus']">
  <btn>click + focus</btn>
</tooltip>
<tooltip content="卡片中的一些内容" placement="top" :triggers="['click','hover']">
 <btn>click + hover</btn>
</tooltip>
<tooltip content="卡片中的一些内容" placement="top" :triggers="['hover','focus']">
  <btn>focus + hover</btn>
</tooltip>

### API
  
  <portlet title="Tooltip" icon="map-signs" theme="light" bordered>
  
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
                  <td> content </td>
                  <td> 设置内容</td>
                  <td> Boolean </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> show </td>
                  <td> 设置是否显示 </td>
                  <td> Boolean </td>
                  <td> false </td>
              </tr>
              <tr>
                  <td> delay </td>
                  <td> 设置显示和关系的延时时间 </td>
                  <td> Number, Object </td>
                  <td> 0 或者 { show: 0, hide: 0 } </td>
              </tr>
              <tr>
                  <td> offset </td>
                  <td> 设置偏移量 </td>
                  <td> String </td>
                  <td> '0 0' </td>
              </tr>
              <tr>
                  <td> targetOffset </td>
                  <td> 设置触发目标偏移量 </td>
                  <td> String </td>
                  <td> '0 0' </td>
              </tr>
              <tr>
                  <td> placement </td>
                  <td> 设置显示位置 </td>
                  <td> top, bottom, left, right </td>
                  <td> top </td>
              </tr>
              <tr>
                  <td> triggers </td>
                  <td> 设置显示触发方式，hover, click, focus, ['click','focus'], ['click','hover'], ['hover','focus'] </td>
                  <td> [String, Array] </td>
                  <td> hover </td>
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
              <tr>
                  <td> content </td>
                  <td> 设置提示内容 </td>
              </tr>
          </tbody>
      </table>
  </div>
  
  </portlet>

</column>
</row>
