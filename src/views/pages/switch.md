<row>
<column :md=12>

### 使用

<switch-btn></switch-btn> 

```html
<switch-btn></switch-btn> 
```

<switch-btn v-model="checked" title="开关："></switch-btn>
<p>{{checked}}</p>
<formbox label="开关" help="可以控制开关">
  <switch-btn v-model="checked"></switch-btn>
</formbox>

```html
<switch-btn v-model="checked" title="开关："></switch-btn>
<p>{{checked}}</p>
<formbox label="开关" help="可以控制开关">
  <switch-btn v-model="checked"></switch-btn>
</formbox>
```

### 状态色

<switch-btn v-model="checked" state="default" title="开关："></switch-btn><br>
<switch-btn v-model="checked" state="success" title="开关："></switch-btn><br>
<switch-btn v-model="checked" state="danger" title="开关："></switch-btn><br>
<switch-btn v-model="checked" state="info" title="开关："></switch-btn><br>
<switch-btn v-model="checked" state="warning" title="开关："></switch-btn><br>
<switch-btn v-model="checked" state="primary" title="开关："></switch-btn>

```html
<switch-btn v-model="checked" state="default" title="开关："></switch-btn>
<switch-btn v-model="checked" state="success" title="开关："></switch-btn>
<switch-btn v-model="checked" state="danger" title="开关："></switch-btn>
<switch-btn v-model="checked" state="info" title="开关："></switch-btn>
<switch-btn v-model="checked" state="warning" title="开关："></switch-btn>
<switch-btn v-model="checked" state="primary" title="开关："></switch-btn>
```

### 开关组

<h3>Group</h3>
<switch-btn-group v-model="switchGroupStatus">
  <switch-btn :value="1" state="info" title="开关一："></switch-btn>
  <switch-btn :value="2" state="warning" title="开关二："></switch-btn>
  <switch-btn :value="3" state="primary" title="开关三："></switch-btn>
</switch-btn-group>
<p>{{switchGroupStatus}}</p>
<h3>Group Inline</h3>
<switch-btn-group v-model="switchGroupStatus" inline>
  <switch-btn :value="1" state="info" title="开关一："></switch-btn>
  <switch-btn :value="2" state="warning" title="开关二："></switch-btn>
  <switch-btn :value="3" state="primary" title="开关三："></switch-btn>
</switch-btn-group>

<script>
  export default{
    data () {
      return {
        checked: false,
        switchGroupStatus: 2
      }
    }
  }
</script>

<p></p>

```html
<h3>Group</h3>
<switch-btn-group v-model="switchGroupStatus">
  <switch-btn :value="1" state="info" title="开关一："></switch-btn>
  <switch-btn :value="2" state="warning" title="开关二："></switch-btn>
  <switch-btn :value="3" state="primary" title="开关三："></switch-btn>
</switch-btn-group>
<p>{{switchGroupStatus}}</p>
<h3>Group Inline</h3>
<switch-btn-group v-model="switchGroupStatus" inline>
  <switch-btn :value="1" state="info" title="开关一："></switch-btn>
  <switch-btn :value="2" state="warning" title="开关二："></switch-btn>
  <switch-btn :value="3" state="primary" title="开关三："></switch-btn>
</switch-btn-group>

<script>
  export default{
    data () {
      return {
        checked: false,
        switchGroupStatus: 2
      }
    }
  }
</script>
```

</column>
</row>
