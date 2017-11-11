<template>
  <row>
    <column :md=12>

      ### Tree View

      <row>
        <column :md=6>
          <tree :data='data' show-checkbox multiple allow-batch whole-row @item-click='itemClick'></tree>
        </column>
        <column :md=6>
    <textarea  style='height:300px; width:100%;'>
      {{data}}
      </textarea>
        </column>
      </row>

      ### Async Loading

      <row>
        <column :md=6>
          <tree :data='asyncData' :async='loadData' show-checkbox multiple allow-batch whole-row @item-click='itemClick'></tree>
        </column>
        <column :md=6>
    <textarea  style='height:300px; width:100%;'>
      {{asyncData}}
    </textarea>
        </column>
      </row>
    </column>
  </row>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'A Tree Plugin For Vue2',
        data: [
          {
            'text': 'Same but with checkboxes',
            'children': [
              {
                'text': 'initially selected',
                'selected': true
              },
              {
                'text': 'custom icon',
                'icon': 'fa fa-warning icon-state-danger'
              },
              {
                'text': 'initially open',
                'icon': 'fa fa-folder icon-state-default',
                'opened': true,
                'children': [
                  {
                    'text': 'Another node'
                  }
                ]
              },
              {
                'text': 'custom icon',
                'icon': 'fa fa-warning icon-state-warning'
              },
              {
                'text': 'disabled node',
                'icon': 'fa fa-check icon-state-success',
                'disabled': true
              }
            ]
          },
          {
            'text': 'Same but with checkboxes',
            'opened': true,
            'children': [
              {
                'text': 'initially selected',
                'selected': true
              },
              {
                'text': 'custom icon',
                'icon': 'fa fa-warning icon-state-danger'
              },
              {
                'text': 'initially open',
                'icon': 'fa fa-folder icon-state-default',
                'opened': true,
                'children': [
                  {
                    'text': 'Another node'
                  }
                ]
              },
              {
                'text': 'custom icon',
                'icon': 'fa fa-warning icon-state-warning'
              },
              {
                'text': 'disabled node',
                'icon': 'fa fa-check icon-state-success',
                'disabled': true
              }
            ]
          },
          {
            'text': 'And wholerow selection'
          }
        ],
        asyncData: [],
        loadData: (oriNode, resolve) => {
          var id = !!oriNode && !!oriNode.model ? oriNode.model.id : 0
          setTimeout(() => {
            let data = []
            if (id > 20) {
              data = []
            } else {
              data = [
                {
                  'text': 'New Item 1...' + id
                },
                {
                  'text': 'New Item 2...' + id
                }
              ]
            }
            resolve(data)
          }, 500)
        }
      }
    },
    methods: {
      itemClick (node) {
        console.log(node.model.text + ' clicked !')
      }
    }
  }
</script>
