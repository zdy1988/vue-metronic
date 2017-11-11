<row>
  <column :md=12>

  ### 使用

  <portlet title="表单" icon="map-signs" theme="light" bordered color="blue">
    <formbox-group>
      <formbox label="姓名" help="请输入姓名" state="error">
        <textbox></textbox>
      </formbox>
      <formbox label="年龄" help="请输入年龄" state="success">
        <textbox></textbox>
      </formbox>
      <formbox label="性别" state="warning">
        <radio-group inline>
          <radio outline>男</radio>
          <radio outline>女</radio>
        </radio-group>
      </formbox>
      <btn slot="bottom" type="submit"  color="green">提交</btn>
    </formbox-group>
  </portlet>

  ```html
  <portlet title="表单" icon="map-signs" theme="light" bordered color="blue">
    <formbox-group>
      <formbox label="姓名" help="请输入姓名" state="error">
        <textbox></textbox>
      </formbox>
      <formbox label="年龄" help="请输入年龄" state="success">
        <textbox></textbox>
      </formbox>
      <formbox label="性别" state="warning">
        <radio-group inline>
          <radio outline>男</radio>
          <radio outline>女</radio>
        </radio-group>
      </formbox>
      <btn slot="bottom" type="submit"  color="green">提交</btn>
    </formbox-group>
  </portlet>
  ```

  <portlet title="表单" icon="map-signs" theme="light" bordered color="green">
    <formbox-group>
      <formbox label="姓名" help="请输入姓名" horizontal>
        <textbox></textbox>
      </formbox>
      <formbox label="年龄" help="请输入年龄" horizontal>
        <textbox></textbox>
      </formbox>
      <formbox label="性别" horizontal>
        <radio-group inline>
          <radio outline>男</radio>
          <radio outline>女</radio>
        </radio-group>
      </formbox>
      <btn slot="bottom" type="submit"  color="green">提交</btn>
    </formbox-group>
  </portlet>

  ```html
  <portlet title="表单" icon="map-signs" theme="light" bordered color="blue">
    <formbox-group>
      <formbox label="姓名" help="请输入姓名" horizontal>
        <textbox></textbox>
      </formbox>
      <formbox label="年龄" help="请输入年龄" horizontal>
        <textbox></textbox>
      </formbox>
      <formbox label="性别" horizontal>
        <radio-group inline>
          <radio outline>男</radio>
          <radio outline>女</radio>
        </radio-group>
      </formbox>
      <btn slot="top" type="submit" color="blue">提交</btn>
      <btn slot="bottom" type="submit"  color="green">提交</btn>
    </formbox-group>
  </portlet>
  ```

  ### 间隔

  <portlet title="表单" icon="map-signs" theme="light" bordered color="green">
    <formbox-group seperated="border" stripped="row">
      <formbox label="姓名" help="请输入姓名" horizontal>
        <textbox></textbox>
      </formbox>
      <formbox label="年龄" help="请输入年龄" horizontal>
        <textbox></textbox>
      </formbox>
      <formbox label="性别" horizontal>
        <radio-group inline>
          <radio outline>男</radio>
          <radio outline>女</radio>
        </radio-group>
      </formbox>
      <btn slot="bottom" type="submit"  color="green">提交</btn>
    </formbox-group>
  </portlet>

  ```html
  <portlet title="表单" icon="map-signs" theme="light" bordered color="green">
    <formbox-group seperated="border" stripped="row">
      <formbox label="姓名" help="请输入姓名" horizontal>
        <textbox></textbox>
      </formbox>
      <formbox label="年龄" help="请输入年龄" horizontal>
        <textbox></textbox>
      </formbox>
      <formbox label="性别" horizontal>
        <radio-group inline>
          <radio outline>男</radio>
          <radio outline>女</radio>
        </radio-group>
      </formbox>
      <btn slot="bottom" type="submit"  color="green">提交</btn>
    </formbox-group>
  </portlet>
  ```

  ### API

  <portlet title="Formbox" icon="map-signs" theme="light" bordered>

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
                  <td> label </td>
                  <td> 设置文字 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> help </td>
                  <td> 设置帮助文字 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> horizontal </td>
                  <td> 设置是否水平显示 </td>
                  <td> Boolean </td>
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
                  <td> 设置表单控件 </td>
              </tr>
          </tbody>
      </table>
  </div>

  </portlet>

  <portlet title="Formbox Group" icon="map-signs" theme="light" bordered>

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
                  <td> seperated </td>
                  <td> 设置文字与空间间间隔，可选值 row, border </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> stripped </td>
                  <td> 设置斑马纹，可选值 row, label </td>
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
                  <td> 设置表单控件容器，只能设置 Frombox </td>
              </tr>
          </tbody>
      </table>
  </div>

  </portlet>

  </column>
</row>
