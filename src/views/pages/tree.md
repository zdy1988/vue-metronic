<row>
<column :md=12>

### Tree View

<row>
  <column :md=6>
    <tree :data="data" show-checkbox multiple allow-batch whole-row @item-click="itemClick"></tree>
  </column>
  <column :md=6>
    <textarea  style="height:300px; width:100%;">
      {{data}}
    </textare>
  </column>
</row>

### Async Loading

<row>
  <column :md=6>
    <tree :data="asyncData" :async="loadData" show-checkbox multiple allow-batch whole-row @item-click="itemClick"></tree>
  </column>
  <column :md=6>
    <textarea  style="height:300px; width:100%;">
      {{asyncData}}
    </textarea>
  </column>
</row>

</column>
</row>


<script>
  export default {
    data () {
      return {
        data: [
          {
            "text": "Same but with checkboxes",
            "opened": true,
            "children": [
              {
                "text": "initially selected",
                "selected": true
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-danger"
              },
              {
                "text": "initially open",
                "icon": "fa fa-folder icon-state-default",
                "opened": true,
                "children": [
                  {
                    "text": "Another node"
                  }
                ]
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-warning"
              },
              {
                "text": "disabled node",
                "icon": "fa fa-check icon-state-success",
                "disabled": true
              }
            ]
          },
          {
            "text": "Same but with checkboxes",
            "opened": true,
            "children": [
              {
                "text": "initially selected",
                "selected": true
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-danger"
              },
              {
                "text": "initially open",
                "icon": "fa fa-folder icon-state-default",
                "opened": true,
                "children": [
                  {
                    "text": "Another node"
                  }
                ]
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-warning"
              },
              {
                "text": "disabled node",
                "icon": "fa fa-check icon-state-success",
                "disabled": true
              }
            ]
          },
          {
            "text": "And wholerow selection"
          }
        ],
        asyncData: [],
        loadData: (parent) => {
          var tag = !!parent && !!parent.id ? parent.id : ''
          return [
            {
              "text": "New Item 1..." + tag
            },
            {
              "text": "New Item 2..." + tag
            }
          ]
        }
      }
    },
    methods: {
      itemClick (item) {
        console.log(item.text + ' clicked !')
      }
    }
  }
</script>
