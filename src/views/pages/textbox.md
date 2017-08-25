<row>
<column :md=12>

###  使用

<p>
  <textbox placeholder="请输入" icon="pencil"></textbox>
</p>

```html
<textbox placeholder="请输入" icon="pencil"></textbox>
```

### 容器

<p>
  <textbox placeholder="请输入">
    <fa name="pencil" slot="before"></fa>
    <btn state="success" slot="after">
      <fa name="arrow-left"></fa> Go!
    </btn>
  </textbox>
</p>

```html
<textbox placeholder="请输入">
  <fa name="pencil" slot="before"></fa>
  <btn state="success" slot="after">
    <fa name="arrow-left"></fa> Go!
  </btn>
</textbox>
```

### API

<portlet title="Textbox" icon="map-signs" theme="light" bordered>    
 
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
                  <td> value </td>
                  <td> 设置值 </td>
                  <td> - </td>
                  <td> null </td>
              </tr>
              <tr>
                  <td> type </td>
                  <td> 设置类型，可选值 text, textarea</td>
                  <td> String </td>
                  <td> text </td>
              </tr>
              <tr>
                  <td> formatter </td>
                  <td> 设置值转换器 </td>
                  <td> Function </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> icon </td>
                  <td> 设置文本框图标 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> iconPosition </td>
                  <td> 设置文本框图标位置，可选值 left, right </td>
                  <td> String </td>
                  <td> left </td>
              </tr>
              <tr>
                  <td> iconColor </td>
                  <td> 设置文本框图标颜色 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> iconSpin </td>
                  <td> 设置文本框图标是否转动 </td>
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
  
</portlet>

</column>
</row>
