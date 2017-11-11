<row>
<column :md=12>

  ### 使用
  
  <btn color="red" outline @click="show = true"> 视图演示 </btn>
  <modal v-model="show">
    弹出窗内容
  </modal>
  
  ```html
  <btn color="red" outline @click="show = true"> 视图演示 </btn>
  <modal v-model="show">
    弹出窗内容
  </modal>
  ```

  ### 例子

  <table class="table table-hover table-striped table-bordered">
    <tbody>
      <tr>
        <td> 基本 </td>
        <td>
          <btn color="red" outline @click="show = true"> 视图演示 </btn>
          <modal v-model="show">
            弹出窗内容
          </modal>
        </td>
      </tr>
      <tr>
        <td> 增大宽度 </td>
        <td>
          <btn color="purple" outline @click="show2 = true"> 视图演示 </btn>
          <modal v-model="show2" size="lg">
            弹出窗内容
          </modal>
        </td>
      </tr>
      <tr>
        <td> 缩小宽度 </td>
        <td>
          <btn color="blue" outline @click="show3 = true"> 视图演示 </btn>
          <modal v-model="show3" size="sm">
            弹出窗内容
          </modal>
        </td>
      </tr>
      <tr>
        <td> 最大宽度 </td>
        <td>
          <btn color="dark" outline @click="show4 = true"> 视图演示 </btn>
          <modal v-model="show4" size="full">
            弹出窗内容
          </modal>
        </td>
      </tr>
      <tr>
        <td> 没有遮盖 </td>
        <td>
          <btn color="yellow" outline @click="show5 = true"> 视图演示 </btn>
          <modal v-model="show5" :mask="false">
            弹出窗内容
          </modal>
        </td>
      </tr>
      <tr>
        <td> 弹出窗底部 </td>
        <td>
          <btn color="green" outline @click="show6 = true"> 视图演示 </btn>
          <modal :show.sync="show6">
            弹出窗内容
            <btn color="yellow" outline @click="show = true" slot="footer"> 窗口1 </btn>
            <btn color="yellow" outline @click="show2 = true" slot="footer"> 窗口2 </btn>
          </modal>
        </td>
      </tr>
    </tbody>
  </table>

  <script>
    export default{
      data () {
        return {
          show: false,
          show2: false,
          show3: false,
          show4: false,
          show5: false,
          show6: false,
          show7: false
        }
      }
    }
  </script>
  
  ```html
  <table class="table table-hover table-striped table-bordered">
    <tbody>
      <tr>
        <td> 基本 </td>
        <td>
          <btn color="red" outline @click="show = true"> 视图演示 </btn>
          <modal v-model="show">
            弹出窗内容
          </modal>
        </td>
      </tr>
      <tr>
        <td> 增大宽度 </td>
        <td>
          <btn color="purple" outline @click="show2 = true"> 视图演示 </btn>
          <modal v-model="show2" size="lg">
            弹出窗内容
          </modal>
        </td>
      </tr>
      <tr>
        <td> 缩小宽度 </td>
        <td>
          <btn color="blue" outline @click="show3 = true"> 视图演示 </btn>
          <modal v-model="show3" size="sm">
            弹出窗内容
          </modal>
        </td>
      </tr>
      <tr>
        <td> 最大宽度 </td>
        <td>
          <btn color="dark" outline @click="show4 = true"> 视图演示 </btn>
          <modal v-model="show4" size="full">
            弹出窗内容
          </modal>
        </td>
      </tr>
      <tr>
        <td> 没有遮盖 </td>
        <td>
          <btn color="yellow" outline @click="show5 = true"> 视图演示 </btn>
          <modal v-model="show5" :mask="false">
            弹出窗内容
          </modal>
        </td>
      </tr>
      <tr>
        <td> 弹出窗底部 </td>
        <td>
          <btn color="green" outline @click="show6 = true"> 视图演示 </btn>
          <modal :show.sync="show6">
            弹出窗内容
            <btn color="yellow" outline @click="show = true" slot="footer"> 窗口1 </btn>
            <btn color="yellow" outline @click="show2 = true" slot="footer"> 窗口2 </btn>
          </modal>
        </td>
      </tr>
    </tbody>
  </table>
  
  <script>
    export default{
      data () {
        return {
          show: false,
          show2: false,
          show3: false,
          show4: false,
          show5: false,
          show6: false,
          show7: false
        }
      }
    }
  </script>
  ```
  ### API
  
  <portlet title="Modal" icon="map-signs" theme="light" bordered>
  
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
                  <td> title </td>
                  <td> 设置标题 </td>
                  <td> String </td>
                  <td> 弹出窗 </td>
              </tr>
              <tr>
                  <td> show </td>
                  <td> 设置是否弹出，必填 </td>
                  <td> Boolean </td>
                  <td> false </td>
              </tr>
              <tr>
                  <td> mask </td>
                  <td> 设置是否显示遮罩 </td>
                  <td> Boolean </td>
                  <td> true </td>
              </tr>
              <tr>
                  <td> size </td>
                  <td> 设置弹出窗尺寸，可选值 lg,  sm, full </td>
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
                  <td> footer </td>
                  <td> 设置底部内容 </td>
              </tr>
          </tbody>
      </table>
  </div>
  
  </portlet>
  
</column>
</row>
