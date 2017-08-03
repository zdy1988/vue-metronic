<row>
<column :md=12>

### 使用

<portlet icon="pencil" title="标签页" theme="light" color="green-sharp" bordered>
  <tabs>
    <tab-pane name='标签页 1' cur>
      <p>内容页 1</p>
    </tab-pane>
    <tab-pane name='标签页 2'>
      <p>内容页 2</p>
    </tab-pane>
    <tab-pane name='标签页 3'>
      <p>内容页 3</p>
    </tab-pane>
  </tabs>
</portlet>

```html
<tabs>
  <tab-pane name='标签页 1' cur>
    <p>内容页 1</p>
  </tab-pane>
  <tab-pane name='标签页 2'>
    <p>内容页 2</p>
  </tab-pane>
  <tab-pane name='标签页 3'>
    <p>内容页 3</p>
  </tab-pane>
</tabs>
```

### 例子

<row>
<column :md=6>
<portlet icon="pencil" title="卡片" theme="light" color="green-sharp" bordered :tools="false">
  <span slot="actions">切换显示卡片：</span>
  <select v-model="activeIndex" slot="actions">
    <option :value="0">0</option>
    <option :value="1">1</option>
    <option :value="2">2</option>
  </select>
  <tabs mode="pills" :active-index.sync="activeIndex">
    <tab-pane name='标签页 1' cur>
      <p>内容页 1</p>
    </tab-pane>
    <tab-pane name='标签页 2'>
      <p>内容页 2</p>
    </tab-pane>
    <tab-pane name='标签页 3'>
      <p>内容页 3</p>
    </tab-pane>
  </tabs>
</portlet>
</column>
<column :md=6>
<portlet icon="pencil" title="卡片方向" theme="light" color="grey-salsa" bordered :tools="false">
  <span slot="actions">切换显示位置：</span>
  <select v-model="position" slot="actions" @change="change">
    <option value="top">top</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="bottom">bottom</option>
  </select>
  <tabs mode="pills" :position="position">
    <tab-pane name='标签页 1' cur>
      <p>内容页 1</p>
    </tab-pane>
    <tab-pane name='标签页 2'>
      <p>内容页 2</p>
    </tab-pane>
    <tab-pane name='标签页 3'>
      <p>内容页 3</p>
    </tab-pane>
  </tabs>
</portlet>
</column>
</row>

```html
<row>
<column :md=6>
<portlet icon="pencil" title="卡片" theme="light" color="green-sharp" bordered :tools="false">
  <span slot="actions">切换显示卡片：</span>
  <select v-model="activeIndex" slot="actions">
    <option :value="0">0</option>
    <option :value="1">1</option>
    <option :value="2">2</option>
  </select>
  <tabs mode="pills" :active-index.sync="activeIndex">
    <tab-pane name='标签页 1' cur>
      <p>内容页 1</p>
    </tab-pane>
    <tab-pane name='标签页 2'>
      <p>内容页 2</p>
    </tab-pane>
    <tab-pane name='标签页 3'>
      <p>内容页 3</p>
    </tab-pane>
  </tabs>
</portlet>
</column>
<column :md=6>
<portlet icon="pencil" title="卡片方向" theme="light" color="grey-salsa" bordered :tools="false">
  <span slot="actions">切换显示位置：</span>
  <select v-model="position" slot="actions" @change="change">
    <option value="top">top</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="bottom">bottom</option>
  </select>
  <tabs mode="pills" :position="position">
    <tab-pane name='标签页 1' cur>
      <p>内容页 1</p>
    </tab-pane>
    <tab-pane name='标签页 2'>
      <p>内容页 2</p>
    </tab-pane>
    <tab-pane name='标签页 3'>
      <p>内容页 3</p>
    </tab-pane>
  </tabs>
</portlet>
</column>
</row>

<script>
  export default{
    data () {
      return {
        position: 'top',
        activeIndex: 1
      }
    },
    methods: {
      change () {
        console.log(this.position)
      }
    }
  }
</script>
```
<script>
  export default{
    data () {
      return {
        position: 'top',
        activeIndex: 1
      }
    },
    methods: {
      change () {
        console.log(this.position)
      }
    }
  }
</script>

<row>
<column :md=6>
<portlet icon="pencil" title="其他样式" theme="light" color="yellow" bordered>
  <h3>Line</h3>
  <tabs mode="line">
    <tab-pane name='标签页 1' cur>
      <p>内容页 1</p>
    </tab-pane>
    <tab-pane name='标签页 2'>
      <p>内容页 2</p>
    </tab-pane>
    <tab-pane name='标签页 3'>
      <p>内容页 3</p>
    </tab-pane>
  </tabs>
</portlet>
</column>
<column :md=6>
<portlet icon="pencil" title="其他样式" theme="light" color="yellow" bordered>
  <h3>Custom</h3>
  <tabs justified mode="custom">
    <tab-pane name='标签页 1' cur>
      <p>内容页 1</p>
    </tab-pane>
    <tab-pane name='标签页 2'>
      <p>内容页 2</p>
    </tab-pane>
    <tab-pane name='标签页 3'>
      <p>内容页 3</p>
    </tab-pane>
  </tabs>
</portlet>
</column>
</row>

```html
<row>
<column :md=6>
<portlet icon="pencil" title="其他样式" theme="light" color="yellow" bordered>
  <h3>Line</h3>
  <tabs mode="line">
    <tab-pane name='标签页 1' cur>
      <p>内容页 1</p>
    </tab-pane>
    <tab-pane name='标签页 2'>
      <p>内容页 2</p>
    </tab-pane>
    <tab-pane name='标签页 3'>
      <p>内容页 3</p>
    </tab-pane>
  </tabs>
</portlet>
</column>
<column :md=6>
<portlet icon="pencil" title="其他样式" theme="light" color="yellow" bordered>
  <h3>Custom</h3>
  <tabs justified mode="custom">
    <tab-pane name='标签页 1' cur>
      <p>内容页 1</p>
    </tab-pane>
    <tab-pane name='标签页 2'>
      <p>内容页 2</p>
    </tab-pane>
    <tab-pane name='标签页 3'>
      <p>内容页 3</p>
    </tab-pane>
  </tabs>
</portlet>
</column>
</row>
```

### API

<portlet title="Tabs" icon="map-signs" theme="light" bordered>    
 
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
                  <td> mode </td>
                  <td> 设置模式，可选值 default, pills, line, custom </td>
                  <td> String </td>
                  <td> default </td>
              </tr>
              <tr>
                  <td> position </td>
                  <td> 设置卡片位置，可选值 top, left, right, bottom </td>
                  <td> String </td>
                  <td> top </td>
              </tr>
              <tr>
                  <td> reversed </td>
                  <td> 设置是否使卡片位置在另一边，只有 position 为 top, bottom 时生效 </td>
                  <td> Boolean </td>
                  <td> false </td>
              </tr>
              <tr>
                  <td> justified </td>
                  <td> 设置卡片是否两端对齐，只有 position 为 top, bottom 时生效 </td>
                  <td> Boolean </td>
                  <td> false </td>
              </tr>
              <tr>
                  <td> activeIndex </td>
                  <td> 设置卡片的活动页索引 </td>
                  <td> Number </td>
                  <td> 0 </td>
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
                  <td> 设置选项卡页，只能写入 Tab Pane </td>
              </tr>
          </tbody>
      </table>
  </div>
  
</portlet>

<portlet title="Tab Pane" icon="map-signs" theme="light" bordered>    
 
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
                  <td> name </td>
                  <td> 设置名称 </td>
                  <td> String </td>
                  <td> 标签页 </td>
              </tr>
              <tr>
                  <td> cur </td>
                  <td> 设置是否为当前活动页 </td>
                  <td> Boolean </td>
                  <td> false </td>
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
                  <td> 设置选项卡页内容 </td>
              </tr>
          </tbody>
      </table>
  </div>
  
</portlet>

</column>
</row>
