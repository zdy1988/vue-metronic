<template>
  <row>
    <column :md=6>
      <portlet title="TOOLTIPS" icon="pencil" color="green-sharp" theme="light" bordered klass="util-btn-group-margin-bottom-5">
        <h4 class="block">Placement</h4>
        <row>
          <column :md=3 class="text-center">
            <tooltip :content="msg" placement="top">
              <btn>top</btn>
            </tooltip>
          </column>
          <column :md=3 class="text-center">
            <tooltip :content="msg" placement="left">
              <btn>left</btn>
            </tooltip>
          </column>
          <column :md=3 class="text-center">
            <tooltip :content="msg" placement="right">
              <btn>right</btn>
            </tooltip>
          </column>
          <column :md=3 class="text-center">
            <tooltip :content="msg" placement="bottom">
              <btn>bottom</btn>
            </tooltip>
          </column>
        </row>
        <h4 class="block">Triggers</h4>
        <row>
          <column :md=4 class="text-center">
            <tooltip :content="msg" placement="top" triggers="click">
              <btn>click</btn>
            </tooltip>
          </column>
          <column :md=4 class="text-center">
            <tooltip :content="msg" placement="top" triggers="focus">
              <btn>focus</btn>
            </tooltip>
          </column>
          <column :md=4 class="text-center">
            <tooltip :content="msg" placement="top" triggers="hover">
              <btn>hover</btn>
            </tooltip>
          </column>
        </row>
        <row klass="margin-top-20">
          <column :md=4 class="text-center">
            <tooltip :content="msg" placement="top" :triggers="['click','focus']">
              <btn>click + focus</btn>
            </tooltip>
          </column>
          <column :md=4 class="text-center">
            <tooltip :content="msg" placement="top" :triggers="['click','hover']">
              <btn>click + hover</btn>
            </tooltip>
          </column>
          <column :md=4 class="text-center">
            <tooltip :content="msg" placement="top" :triggers="['hover','focus']">
              <btn>focus + hover</btn>
            </tooltip>
          </column>
        </row>
        <h4 class="block">Content via properties or slots</h4>
        <row>
          <column :md=6 class="text-center">
            <tooltip :content="tooltipContent" placement="top" :triggers="['focus']">
              <btn>Using properties</btn>
            </tooltip>
          </column>
          <column :md=6 class="text-center">
            <tooltip placement="top" :triggers="['focus']">
              <btn>Using slots</btn>
              <div slot="content">
                Embedding content
                <span style="color: red;">using slots</span>
                affords you
              </div>
            </tooltip>
          </column>
        </row>
        <h4 class="block">Delay</h4>
        <row>
          <column :md=4 class="text-center">
            <tooltip :delay="1000" content="Sorry, I'm a little sleepy." triggers="focus">
              <btn>1000ms</btn>
            </tooltip>
          </column>
          <column :md=4 class="text-center">
            <tooltip :delay="{show: 1000, hide: 0}" content="This will disappear right away!" triggers="focus">
              <btn>1000ms on show</btn>
            </tooltip>
          </column>
          <column :md=4 class="text-center">
            <tooltip :delay="{show: 0, hide: 1000}" content="This will disappear after a second's delay." triggers="focus">
              <btn>1000ms on hide</btn>
            </tooltip>
          </column>
        </row>
        <h4 class="block">Popover</h4>
        <row>
          <column :md=3 class="text-center">
            <popover placement="top">
              <btn>top</btn>
              <div slot="content">
                <btn>{{msg}}</btn>
              </div>
            </popover>
          </column>
          <column :md=3 class="text-center">
            <popover placement="left">
              <btn>left</btn>
              <div slot="content">
                <btn>{{msg}}</btn>
              </div>
            </popover>
          </column>
          <column :md=3 class="text-center">
            <popover placement="right">
              <btn>right</btn>
              <div slot="content">
                <btn>{{msg}}</btn>
              </div>
            </popover>
          </column>
          <column :md=3 class="text-center">
            <popover placement="bottom">
              <btn>bottom</btn>
              <div slot="content">
                <btn>{{msg}}</btn>
                <btn>{{msg}}</btn>
                <btn>{{msg}}</btn>
                <btn>{{msg}}</btn>
                <btn>{{msg}}</btn>
              </div>
            </popover>
          </column>
        </row>
        <h4 class="block">Popover Confirmation</h4>
        <popconfirm @success="_success" @cancel="_cancel">
          <btn>Confirmation 1</btn>
        </popconfirm>
      </portlet>
    </column>
  </row>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue!',
        placement: 'top',
        tooltipContent: 'Embedding content using properties is easier as well as simpler to make dynamic.'
      }
    },
    methods: {
      _success () {
        console.log('success!')
      },
      _cancel () {
        console.log('cancel!')
      }
    }
  }
</script>
