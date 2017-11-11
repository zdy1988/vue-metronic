<row>
  <column :md=12>

  ### 使用

  <radio>单选框</radio>
  <radio outline style="margin-left: 20px;">单选框</radio>

  ```html
  <radio>单选框</radio>
  <radio outline>单选框</radio>
  ```

  ### 单选框组

  <radio-group>
    <radio outline>单选框</radio>
    <radio outline>单选框</radio>
    <radio outline disabled>禁用</radio>
  </radio-group>

  <radio-group inline>
    <radio>单选框</radio>
    <radio>单选框</radio>
    <radio disabled>禁用</radio>
  </radio-group>

  ```html
  <radio-group>
    <radio outline>单选框</radio>
    <radio outline>单选框</radio>
    <radio outline disabled>禁用</radio>
  </radio-group>

  <radio-group inline>
    <radio>单选框</radio>
    <radio>单选框</radio>
    <radio disabled>禁用</radio>
  </radio-group>
  ```

  ### 例子

  <p>
    <radio v-model="radioStatus">单选框</radio>
  </p>
  <p>
    值： {{radioStatus}}
    <btn @click="radioStatus = !radioStatus" state="success">
      <fa name="arrow-left"></fa>
      改变
    </btn>
  </p>
  <p>
    <radio-group inline v-model="radioGroupStatus">
      <radio :value="item.value" v-for="item in radioGroup" :key="item.value">{{item.name}}</radio>
    </radio-group>
  </p>
  <p>
    值：{{radioGroupStatus}}
    <btn @click="radioGroupStatus = 'green'" state="success">
      <fa name="arrow-left"></fa>
      改变
    </btn>
  </p>

  <script>
  export default {
    data () {
      return {
        radioStatus: false,
        radioGroup: [
          {name: 'Red', value: 'red'},
          {name: 'Blue', value: 'blue'},
          {name: 'Green', value: 'green'}
        ],
        radioGroupStatus: 'red'
      }
    }
  }
  </script>

  ```html
  <p>
    <radio v-model="radioStatus">单选框</radio>
  </p>
  <p>
    值： {{radioStatus}}
    <btn @click="radioStatus = !radioStatus" state="success">
      <fa name="arrow-left"></fa>
      改变
    </btn>
  </p>
  <p>
    <radio-group inline v-model="radioGroupStatus">
      <radio :value="item.value" v-for="item in radioGroup" :key="item.value">{{item.name}}</radio>
    </radio-group>
  </p>
  <p>
    值：{{radioGroupStatus}}
    <btn @click="radioGroupStatus = 'green'" state="success">
      <fa name="arrow-left"></fa>
      改变
    </btn>
  </p>

  <script>
  export default {
    data () {
      return {
        radioStatus: false,
        radioGroup: [
          {name: 'Red', value: 'red'},
          {name: 'Blue', value: 'blue'},
          {name: 'Green', value: 'green'}
        ],
        radioGroupStatus: 'red'
      }
    }
  }
  </script>
  ```

  ### API

  <portlet title="Radio" icon="map-signs" theme="light" bordered>

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
                  <td> name </td>
                  <td> 设置name值，单独使用时无意义 </td>
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

  <portlet title="Radio Group" icon="map-signs" theme="light" bordered>

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
                  <td> 设置获取选中项，设置方式为 v-model="" 或者 value.sync="" </td>
                  <td> - </td>
                  <td> null </td>
              </tr>
              <tr>
                  <td> name </td>
                  <td> 设置组内所有 radio 的 name 值 </td>
                  <td> String </td>
                  <td> - </td>
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
                  <td> 设置选择框，只能写入 Radio </td>
              </tr>
          </tbody>
      </table>
  </div>

  </portlet>

  </column>
</row>
