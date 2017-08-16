<row>
  <column :md=12>
    
  ### 使用
  
  <btn>按钮</btn>
   
  ```html
  <btn>按钮</btn>
  ```
  
  </column>
  <column :md=12>
      
  ### 状态色
  
  <p class="util-btn-margin-bottom-5">
    <btn state="default">Default</btn>
    <btn state="primary" >Primary</btn>
    <btn state="success" >Success</btn>
    <btn state="info" >Info</btn>
    <btn state="warning" >Warning</btn>
    <btn state="danger" >Danger</btn>
    <btn state="link" >Link</btn>
  </p>
     
  ```html
  <btn state="default">Default</btn>
  <btn state="primary" >Primary</btn>
  <btn state="success" >Success</btn>
  <btn state="info" >Info</btn>
  <btn state="warning" >Warning</btn>
  <btn state="danger" >Danger</btn>
  <btn state="link" >Link</btn>
  ```
  
  ### 背景色
  
  <p class="util-btn-margin-bottom-5">
      <btn color="default" >default</btn>
      <btn color="red" >red</btn>
      <btn color="blue" >blue</btn>
      <btn color="green" >green</btn>
      <btn color="yellow" >yellow</btn>
  </p>
  
  ```html
  <btn color="default" >default</btn>
  <btn color="red" >red</btn>
  <btn color="blue" >blue</btn>
  <btn color="green" >green</btn>
  <btn color="yellow" >yellow</btn>
  ```
  
  ### 圆角
  
  <p class="util-btn-margin-bottom-5">
    <btn shape="circle" color="default" >default</btn>
    <btn shape="circle" color="red" >red</btn>
    <btn shape="circle" color="blue" >blue</btn>
    <btn shape="circle" color="green" >green</btn>
    <btn shape="circle" color="yellow" >yellow</btn>
  </p>
  
  ```html
  <btn shape="circle" color="default" >default</btn>
  <btn shape="circle" color="red" >red</btn>
  <btn shape="circle" color="blue" >blue</btn>
  <btn shape="circle" color="green" >green</btn>
  <btn shape="circle" color="yellow" >yellow</btn>
  ```
  
  ### 外边框
  
  <p class="util-btn-margin-bottom-5">
     <btn color="default" outline >default</btn>
     <btn color="red" outline >red</btn>
     <btn color="blue" outline >blue</btn>
     <btn color="green" outline >green</btn>
     <btn color="yellow" outline >yellow</btn>
  </p>

  ```html
  <btn color="default" outline >default</btn>
  <btn color="red" outline >red</btn>
  <btn color="blue" outline >blue</btn>
  <btn color="green" outline >green</btn>
  <btn color="yellow" outline >yellow</btn>
  ```
  ### 条纹
  
  <p class="util-btn-margin-bottom-5">
    <btn stripe="blue-hoki" color="default" >Blue Hoki</btn>
    <btn stripe="blue" color="default" >Blue</btn>
    <btn stripe="green-meadow" color="default" >Green Meadow</btn>
    <btn stripe="red-sunglo" color="default" >Red Sunglo</btn>
    <btn stripe="yellow-crusta" color="default" >Yellow Crusta</btn>
  </p>  
   
  ```html
  <btn stripe="blue-hoki" color="default" >Blue Hoki</btn>
  <btn stripe="blue" color="default" >Blue</btn>
  <btn stripe="green-meadow" color="default" >Green Meadow</btn>
  <btn stripe="red-sunglo" color="default" >Red Sunglo</btn>
  <btn stripe="yellow-crusta" color="default" >Yellow Crusta</btn>     
  ```  
    
  ### 尺寸
    
  <p class="util-btn-margin-bottom-5">
    <btn size="lg" color="default" >Large button</btn>
    <btn color="red" >Default button</btn>
    <btn size="sm" color="blue" >Small button</btn>
    <btn size="xs" color="green" >Extra small button</btn>
  </p>
  
  ```html
  <btn size="lg" color="default" >Large button</btn>
  <btn color="red" >Default button</btn>
  <btn size="sm" color="blue" >Small button</btn>
  <btn size="xs" color="green" >Extra small button</btn>
  ```
    
  ### 图标
  
  <p class="util-btn-margin-bottom-5">  
    <btn color="purple" size="sm">
      Purple <fa name="bell"></fa>
    </btn>
    <btn color="purple" size="icon-only">
      <fa name="bell"></fa>
    </btn>
  </p>
    
  ```html
  <btn color="purple" size="sm">
    Purple <fa name="bell"></fa>
  </btn>
  <btn color="purple" size="icon-only">
    <fa name="bell"></fa>
  </btn>  
  ``` 
  ### 块
  
  <p class="util-btn-margin-bottom-5">  
     <btn block state="default" >Button</btn>
     <btn block color="red" >Button</btn>
     <btn block color="purple" >Button</btn>
  </p>
    
  ```html
  <btn block state="default" >Button</btn>
  <btn block color="red" >Button</btn>
  <btn block color="purple" >Button</btn>    
  ```  
  
  ### 加载状态
  
  <p class="util-btn-margin-bottom-5">
    <btn state="primary" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
    <btn state="default" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
  </p>
  <script>
    export default {
      data () {
        return {
          loading: false
        }
      },
      methods: {
        showLoading () {
          var _this = this
          this.loading = true
          setTimeout(function () {
            _this.loading = false
          }, 2000)
        }
      }
    }
  </script>
  
  ```html
  <btn state="primary" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
  <btn state="default" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
  <script>
    export default {
      data () {
        return {
          loading: false
        }
      },
      methods: {
        showLoading () {
          var _this = this
          this.loading = true
          setTimeout(function () {
            _this.loading = false
          }, 2000)
        }
      }
    }
  </script>
  ```
  
  ### 按钮组
  
  <p class="util-btn-margin-bottom-5">
    <btn-toolbar klass="margin-bottom-10">
      <btn-group size="lg">
        <btn color="red">Left</btn>
        <btn color="green">Middle</btn>
        <btn color="blue">Right</btn>
      </btn-group>
    </btn-toolbar>
    <btn-toolbar klass="margin-bottom-10">
      <btn-group>
        <btn color="red">Left</btn>
        <btn color="green">Middle</btn>
        <btn color="blue">Right</btn>
      </btn-group>
    </btn-toolbar>
    <btn-toolbar klass="margin-bottom-10">
      <btn-group size="sm">
        <btn color="red">Left</btn>
        <btn color="green">Middle</btn>
        <btn color="blue">Right</btn>
      </btn-group>
    </btn-toolbar>
    <btn-toolbar klass="margin-bottom-10">
      <btn-group size="xs">
        <btn color="red">Left</btn>
        <btn color="green">Middle</btn>
        <btn color="blue">Right</btn>
      </btn-group>
    </btn-toolbar>
  </p>
  
  ```html
  <btn-group size="lg">
    <btn color="red">Left</btn>
    <btn color="green">Middle</btn>
    <btn color="blue">Right</btn>
  </btn-group> 
  <btn-group>
    <btn color="red">Left</btn>
    <btn color="green">Middle</btn>
    <btn color="blue">Right</btn>
  </btn-group> 
  <btn-group size="sm">
    <btn color="red">Left</btn>
    <btn color="green">Middle</btn>
    <btn color="blue">Right</btn>
  </btn-group> 
  <btn-group size="xs">
    <btn color="red">Left</btn>
    <btn color="green">Middle</btn>
    <btn color="blue">Right</btn>
  </btn-group> 
  ```
  
  ### 按钮工具栏
  
  <p class="util-btn-margin-bottom-5">
    <btn-toolbar>
      <btn-group>
        <btn color="red">1</btn>
        <btn color="green">2</btn>
        <btn color="blue">3</btn>
        <btn color="yellow">4</btn>
      </btn-group>
      <btn-group>
        <btn color="purple">5</btn>
        <btn color="dark">6</btn>
        <btn color="default">7</btn>
      </btn-group>
      <btn-group>
        <btn color="red">8</btn>
      </btn-group>
    </btn-toolbar>
  </p>
  
  ```html
  <btn-toolbar>
    <btn-group>
      <btn color="red">1</btn>
      <btn color="green">2</btn>
      <btn color="blue">3</btn>
      <btn color="yellow">4</btn>
    </btn-group>
    <btn-group>
      <btn color="purple">5</btn>
      <btn color="dark">6</btn>
      <btn color="default">7</btn>
    </btn-group>
    <btn-group>
      <btn color="red">8</btn>
    </btn-group>
  </btn-toolbar>  
  ```
  
  ### 下拉按钮组
  
  <p class="util-btn-margin-bottom-5">
    <btn-dropdown text="Tools" state="default" textAlign="left">
      <btn color="white">Settings</btn>
      <btn color="white">Preferences</btn>
      <btn color="white">Window Options</btn>
      <btn-dropdown-divider></btn-dropdown-divider>
      <btn color="white">Help</btn>
    </btn-dropdown>
    <btn-dropdown text="User" color="purple" icon="user" textAlign="left" dropup>
      <btn color="white">
        <fa name="plus"></fa> Add
      </btn>
      <btn color="white">
        <fa name="edit"></fa> Edit
      </btn>
      <btn color="white">
        <fa name="remove"></fa> Delete
      </btn>
      <btn-dropdown-divider></btn-dropdown-divider>
      <btn color="white">
        Full Settings
      </btn>
    </btn-dropdown>
    <btn-dropdown text="" textAlign="left">
       <btn slot="before">Default</btn>
       <btn color="white">Settings</btn>
       <btn color="white">Preferences</btn>
       <btn color="white">Window Options</btn>
       <btn-dropdown-divider></btn-dropdown-divider>
       <btn color="white">Help</btn>
    </btn-dropdown>    
  </p>
  
  ```html
  <btn-dropdown text="Tools" state="default" textAlign="left">
    <btn color="white">Settings</btn>
    <btn color="white">Preferences</btn>
    <btn color="white">Window Options</btn>
    <btn-dropdown-divider></btn-dropdown-divider>
    <btn color="white">Help</btn>
  </btn-dropdown>
  <btn-dropdown text="User" color="purple" icon="user" textAlign="left" dropup>
    <btn color="white">
      <fa name="plus"></fa> Add
    </btn>
    <btn color="white">
      <fa name="edit"></fa> Edit
    </btn>
    <btn color="white">
      <fa name="remove"></fa> Delete
    </btn>
    <btn-dropdown-divider></btn-dropdown-divider>
    <btn color="white">
      Full Settings
    </btn>
  </btn-dropdown>  
  ```
  
  ### API
  
  <portlet title="Btn And LinkBtn" icon="map-signs" theme="light" bordered>     
  
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
                  <td> type </td>
                  <td> 设置按钮类型，可选项 button,  submit,  reset, 由于 link-btn 是由 a 标签构造，所以无此属性 </td>
                  <td> String </td>
                  <td> button </td>
              </tr>
              <tr>
                  <td> state </td>
                  <td> 设置状态色，可选值 default, primary, success, info, warning, danger, link </td>
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
                  <td> stripe </td>
                  <td> 设置条纹色，只有在设置 color 的情况下生效，可选值参考 <router-link to="/main/color">Color</router-link> </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> shape </td>
                  <td> 设置圆角，可选值 circle </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> outline </td>
                  <td> 设置是否是外边框样式 </td>
                  <td> Boolean </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> size </td>
                  <td> 设置尺寸，可选值 lg, sm, xs, icon-only </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> block </td>
                  <td> 设置是否为块状 </td>
                  <td> Boolean </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> disabled </td>
                  <td> 设置是否禁用 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> loading </td>
                  <td> 设置是否显示Loading </td>
                  <td> String </td>
                  <td> false </td>
              </tr>
              <tr>
                  <td> loadingText </td>
                  <td> 设置显示Loading时的文字提示 </td>
                  <td> String </td>
                  <td> Loading... </td>
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
  
  <portlet title="Btn Group" icon="map-signs" theme="light" bordered>     
  
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
                  <td> shape </td>
                  <td> 设置圆角，可选值 circle </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> size </td>
                  <td> 设置尺寸，可选值 lg, sm, xs </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> orientation </td>
                  <td> 设置取向，可选值 vertical, horizontal </td>
                  <td> String </td>
                  <td> horizontal </td>
              </tr>
              <tr>
                  <td> justified </td>
                  <td> 设置是否充满一整行，只能又 link-btn 完成，因为 button 标签是不支持 display: table-cell 的，而 a 标签支持。 </td>
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
                  <td> 设置按钮组中加入按钮，只能写入 Btn </td>
              </tr>             
          </tbody>
      </table>      
  </div>
  
  </portlet>
  
  <portlet title="Btn Toolbar" icon="map-signs" theme="light" bordered>     
  
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
                  <td> 设置按钮工具栏中加入按钮，只能写入 Btn 或 BtnGroup 或 BtnDropdown</td>
              </tr>             
          </tbody>
      </table>      
  </div>
    
  </portlet>

  <portlet title="Btn Dropdown" icon="map-signs" theme="light" bordered>     
  
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
                  <td> text </td>
                  <td> 设置默认按钮文字 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> icon </td>
                  <td> 设置默认按钮图标 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> textAlign </td>
                  <td> 设置下载板面中的按钮的文字浮动，可选值 left, center, right </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> state </td>
                  <td> 设置状态色，可选值 default, primary, success, info, warning, danger, link </td>
                  <td> String </td>
                  <td> default </td>
              </tr>
              <tr>
                  <td> color </td>
                  <td> 设置背景色，将覆盖主题颜色，可选值参考 <router-link to="/main/color">Color</router-link> </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> shape </td>
                  <td> 设置圆角，可选值 circle </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> size </td>
                  <td> 设置尺寸，可选值 lg, sm, xs </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> dropup </td>
                  <td> 设置是否向上展开 </td>
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
                  <td> 设置展开版面中的按钮，只能写入 Btn 和分隔符 BtnDropdownDivider </td>
              </tr>
              <tr>
                  <td> before </td>
                  <td> 设置在默认按钮前加入按钮，只能写入 Btn </td>
              </tr>
              <tr>
                  <td> after </td>
                  <td> 设置在默认按钮后加入按钮，只能写入 Btn </td>
              </tr>              
          </tbody>
      </table>      
  </div>
  
  </portlet>
  
  <portlet title="Btn Dropdown Divider" icon="map-signs" theme="light" bordered>     
  
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
                  <td> margin </td>
                  <td> 设置 BtnDropdown 上下间隔 </td>
                  <td> Number </td>
                  <td> 9 </td>
              </tr>
          </tbody>
      </table>
  </div>
  </portlet>
    
  
  </column>
</row>
<style>
  .util-btn-group-margin-bottom-5 .btn-group, .util-btn-margin-bottom-5 .btn{
    margin-bottom: 5px!important;
  }
</style>
