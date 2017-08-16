<row>
<column :md=12>

### 使用

<progress-bar :value="20"></progress-bar>
      
```html
<progress-bar :value="20"></progress-bar>
```

### 状态色

<progress-bar :value="40" state="success"></progress-bar>
<progress-bar :value="40" state="info"></progress-bar>
<progress-bar :value="40" state="warning"></progress-bar>
<progress-bar :value="40" state="danger"></progress-bar>

```html
<progress-bar :value="40" state="success"></progress-bar>
<pogress-bar :value="40" state="info"></progress-bar>
<progress-bar :value="40" state="warning"></progress-bar>
<progress-bar :value="40" state="danger"></progress-bar>
```

### 条纹

<progress-bar :value="40" state="success" stripe="static"></progress-bar>
<progress-bar :value="40" state="info" stripe="static"></progress-bar>
<progress-bar :value="40" state="warning" stripe="static"></progress-bar>
<progress-bar :value="40" state="danger" stripe="static"></progress-bar>

```html
<progress-bar :value="40" state="success" stripe="static"></progress-bar>
<progress-bar :value="40" state="info" stripe="static"></progress-bar>
<progress-bar :value="40" state="warning" stripe="static"></progress-bar>
<progress-bar :value="40" state="danger" stripe="static"></progress-bar>
```

### 动态条纹

<progress-bar :value="40" state="success" stripe="active"></progress-bar>
<progress-bar :value="40" state="info" stripe="active"></progress-bar>
<progress-bar :value="40" state="warning" stripe="active"></progress-bar>
<progress-bar :value="40" state="danger" stripe="active"></progress-bar>

```html
<progress-bar :value="40" state="success" stripe="active"></progress-bar>
<progress-bar :value="40" state="info" stripe="active"></progress-bar>
<progress-bar :value="40" state="warning" stripe="active"></progress-bar>
<progress-bar :value="40" state="danger" stripe="active"></progress-bar>
```

### 例子

<progress-bar :value="progress" :max="max" :min="min" :step="step" title="完成" show-value></progress-bar>
<btn @click="randomProgress">改变进度</btn>

<script>
  export default {
    data () {
      return {
        min: 20,
        max: 100,
        step: 1,
        progress: 43.8
      }
    },
    methods: {
      getRandomNum (Min, Max) {
        var Range = Max - Min
        var Rand = Math.random()
        return (Min + Math.round(Rand * Range))
      },
      randomProgress () {
        this.progress = this.getRandomNum(this.min, this.max)
      }
    }
  }
</script>

```html
<progress-bar :value="progress" :max="max" :min="min" :step="step" title="完成" show-value></progress-bar>
<btn @click="randomProgress">改变进度</btn>
<script>
  export default {
    data () {
      return {
        min: 20,
        max: 100,
        step: 1,
        progress: 43.8
      }
    },
    methods: {
      getRandomNum (Min, Max) {
        var Range = Max - Min
        var Rand = Math.random()
        return (Min + Math.round(Rand * Range))
      },
      randomProgress () {
        this.progress = this.getRandomNum(this.min, this.max)
      }
    }
  }
</script>
```

### API

<portlet title="Progress Bar" icon="map-signs" theme="light" bordered>    
 
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
                  <td> state </td>
                  <td> 设置状态色，可选值 success, info, warning, danger </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> title </td>
                  <td> 设置进度旁文字 </td>
                  <td> String </td>
                  <td> - </td>
              </tr>
              <tr>
                  <td> showValue </td>
                  <td> 设置是否显示文字 </td>
                  <td> Boolean </td>
                  <td> false </td>
              </tr>
              <tr>
                  <td> max </td>
                  <td> 设置最大值 </td>
                  <td> Number </td>
                  <td> 100 </td>
              </tr>
              <tr>
                  <td> min </td>
                  <td> 设置最小值 </td>
                  <td> Number </td>
                  <td> 0 </td>
              </tr>
              <tr>
                  <td> step </td>
                  <td> 设置间隔 </td>
                  <td> Number </td>
                  <td> 1 </td>
              </tr>
              <tr>
                  <td> value </td>
                  <td> 设置值 </td>
                  <td> Number </td>
                  <td> 0 </td>
              </tr>
              <tr>
                  <td> stripe </td>
                  <td> 是否条纹，可选值 active, static </td>
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
</portlet>
</column>
</row>
