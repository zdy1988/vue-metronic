<row>
  <column :md=12>

  ### 使用

  <checkbox>复选框</checkbox>
  <checkbox outline style="margin-left: 20px;">复选框</checkbox>

  ```html
  <checkbox>复选框</checkbox>
  <checkbox outline>复选框</checkbox>
  ```

  ### 复选框组

  <checkbox-group>
    <checkbox outline>复选框</checkbox>
    <checkbox outline>复选框</checkbox>
    <checkbox outline disabled>禁用</checkbox>
  </checkbox-group>

  <checkbox-group inline>
    <checkbox outline>复选框</checkbox>
    <checkbox outline>复选框</checkbox>
    <checkbox outline disabled>禁用</checkbox>
  </checkbox-group>

  ```html
  <checkbox-group>
    <checkbox outline>复选框</checkbox>
    <checkbox outline>复选框</checkbox>
    <checkbox outline disabled>禁用</checkbox>
  </checkbox-group>

  <checkbox-group inline>
    <checkbox outline>复选框</checkbox>
    <checkbox outline>复选框</checkbox>
    <checkbox outline disabled>禁用</checkbox>
  </checkbox-group>
  ```

  ### 例子

  <p>
    <checkbox v-model="checkboxStatus">复选框</checkbox>
  </p>
  <p>
    值： {{checkboxStatus}}
    <btn @click="checkboxStatus = !checkboxStatus" state="success">
      <fa name="arrow-left"></fa>
      改变
    </btn>
  </p>
  <p>
    <checkbox-group inline v-model="checkboxGroupStatus">
      <checkbox :value="item.value" v-for="item in checkboxGroup" :key="item.value">{{item.name}}</checkbox>
    </checkbox-group>
  </p>
  <p>
    值：{{checkboxGroupStatus}}
    <btn @click="checkboxGroupStatus = ['green']" state="success">
      <fa name="arrow-left"></fa>
      改变
    </btn>
  </p>

  <script>
  export default {
    data () {
      return {
        checkboxStatus: true,
        checkboxGroup: [
          {name: 'Red', value: 'red'},
          {name: 'Blue', value: 'blue'},
          {name: 'Green', value: 'green'}
        ],
        checkboxGroupStatus: ['red', 'blue']
      }
    }
  }
  </script>

  ```html
  <p>
    <checkbox v-model="checkboxStatus">Default</checkbox>
  </p>
  <p>
    值： {{checkboxStatus}}
    <btn @click="checkboxStatus = !checkboxStatus" state="success">
      <fa name="arrow-left"></fa>
      改变
    </btn>
  </p>
  <p>
    <checkbox-group inline v-model="checkboxGroupStatus">
      <checkbox :value="item.value" v-for="item in checkboxGroup" :key="item.value">{{item.name}}</checkbox>
    </checkbox-group>
  </p>
  <p>
    值：{{checkboxGroupStatus}}
    <btn @click="checkboxGroupStatus = ['green']" state="success">
      <fa name="arrow-left"></fa>
      改变
    </btn>
  </p>

  <script>
  export default {
    data () {
      return {
        checkboxStatus: true,
        checkboxGroup: [
          {name: 'Red', value: 'red'},
          {name: 'Blue', value: 'blue'},
          {name: 'Green', value: 'green'}
        ],
        checkboxGroupStatus: ['red', 'blue']
      }
    }
  }
  </script>
  ```

  ### API

  <portlet title="Checkbox" icon="map-signs" theme="light" bordered>

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
                  <td> 设置值，单独使用时无意义 </td>
                  <td> - </td>
                  <td> null </td>
              </tr>
              <tr>
                  <td> checked </td>
                  <td> 设置是否选中，设置方式为 v-model="" 或者 checked.sync=""  </td>
                  <td> Boolean </td>
                  <td> false </td>
              </tr>
              <tr>
                  <td> disabled </td>
                  <td> 设置是否禁用 </td>
                  <td> Boolean </td>
                  <td> false </td>
              </tr>
              <tr>
                  <td> outline </td>
                  <td> 设置是否为外边框模式 </td>
                  <td> Boolean </td>
                  <td> - </td>
              </tr>
          </tbody>
      </table>
  </div>

  <br>

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
                  <td> 设置选择框的文字 </td>
              </tr>
          </tbody>
      </table>
  </div>

  </portlet>

  <portlet title="Checkbox Group" icon="map-signs" theme="light" bordered>

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
                  <td> checkedGroup </td>
                  <td> 设置获取选中项，设置方式为 v-model="" 或者 checked-group.sync="" </td>
                  <td> Array </td>
                  <td> [] </td>
              </tr>
              <tr>
                  <td> inline </td>
                  <td> 设置是否在一行显示 </td>
                  <td> Boolean </td>
                  <td> - </td>
              </tr>
          </tbody>
      </table>
  </div>

  <br>

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
                  <td> 设置选择框，只能写入 Checkbox </td>
              </tr>
          </tbody>
      </table>
  </div>

  </portlet>

  </column>
</row>
