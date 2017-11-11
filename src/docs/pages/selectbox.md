<row>
  <column :md=12>
  
  ### 使用
  
  <selectbox placeHolder="请选择">
    <option value="Item 1">Item 1</option>
    <option value="Item 2">Item 2</option>
    <option value="Item 3">Item 3</option>
    <option value="Item 4">Item 4</option>
  </selectbox>
  
  ```html
  <selectbox placeHolder="请选择">
    <option value="Item 1">Item 1</option>
    <option value="Item 2">Item 2</option>
    <option value="Item 3">Item 3</option>
    <option value="Item 4">Item 4</option>
  </selectbox>
  ```
  
  ### 例子
  
  <selectbox :options="dataItems" option-text="name" option-value="value" placeHolder="Please select" v-model="selectValue">
    <option value="yellow">Yellow</option>
  </selectbox>
  <h4>Select Value: {{selectValue}}</h4>
  <br>
  <btn color="red" @click="selectValue='red'">red</btn>
  <btn color="blue" @click="selectValue='blue'">blue</btn>
  <btn color="yellow" @click="selectValue='yellow'">yellow</btn>
  <btn color="green" @click="selectValue='green'">green</btn>
  <hr>
  <selectbox :options="dataItems" option-text="name" option-value="value" placeHolder="Please select" v-model="selectValue2" multiple>
    <option value="yellow">Yellow</option>
  </selectbox>
  <h4>Select Value: {{selectValue2}}</h4>
  <br>
  <btn @click="selectValue2=['red','yellow']">red and yellow</btn>
  
  <script>
    export default{
      data () {
        return {
          dataItems: [
            {name: 'Red', value: 'red'},
            {name: 'Blue', value: 'blue'},
            {name: 'Green', value: 'green'}
          ],
          selectValue: 'red',
          selectValue2: ['red', 'blue']
        }
      }
    }
  </script>
  
  <p></p>
  
  ```html
  <selectbox :options="dataItems" option-text="name" option-value="value" placeHolder="Please select" v-model="selectValue">
    <option value="yellow">Yellow</option>
  </selectbox>
  <h4>Select Value: {{selectValue}}</h4>
  <br>
  <btn color="red" @click="selectValue='red'">red</btn>
  <btn color="blue" @click="selectValue='blue'">blue</btn>
  <btn color="yellow" @click="selectValue='yellow'">yellow</btn>
  <btn color="green" @click="selectValue='green'">green</btn>
  <hr>
  <selectbox :options="dataItems" option-text="name" option-value="value" placeHolder="Please select" v-model="selectValue2" multiple>
    <option value="yellow">Yellow</option>
  </selectbox>
  <h4>Select Value: {{selectValue2}}</h4>
  <br>
  <btn @click="selectValue2=['red','yellow']">red and yellow</btn>
  
  <script>  
    export default{
      data () {
        return {
          dataItems: [
            {name: 'Red', value: 'red'},
            {name: 'Blue', value: 'blue'},
            {name: 'Green', value: 'green'}
          ],
          selectValue: 'red',
          selectValue2: ['red', 'blue']
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
                  <td> selectValue </td>
                  <td> 设置选中值，设置方式为 v-model="" 或者 select-value.sync="" </td>
                  <td> - </td>
                  <td> '' </td>
              </tr>
              <tr>
                  <td> options </td>
                  <td> 设置 option 数据源，基本格式为 [{name:'name1',value:'value1'},{name:'name2',value:'value2'}] </td>
                  <td> Array </td>
                  <td> [] </td>
              </tr>
              <tr>
                  <td> placeHolder </td>
                  <td> 设置默认空值项，在多选时无效  </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> optionText </td>
                  <td> 设置 option text 属性名称 </td>
                  <td> String </td>
                  <td> text </td>
              </tr>
              <tr>
                  <td> optionValue </td>
                  <td> 设置 option value 属性名称 </td>
                  <td> String </td>
                  <td> value </td>
              </tr>
              <tr>
                  <td> multiple </td>
                  <td> 设置是否多选 </td>
                  <td> Boolean </td>
                  <td> false </td>
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
                  <td> 设置 Option </td>
              </tr>
          </tbody>
      </table>
  </div>
  
  </portlet>
  
  </column>
</row>
