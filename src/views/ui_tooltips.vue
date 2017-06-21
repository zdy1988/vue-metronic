<template>
  <row>
    <column :md=6>
      <portlet title="TOOLTIPS" icon="settings" color="green-sharp" mode="light" bordered klass="util-btn-group-margin-bottom-5">
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
            <tooltip :content="msg" placement="top" :triggers="['focus','hover']">
              <btn>focus + hover</btn>
            </tooltip>
          </column>
        </row>
      </portlet>
    </column>
  </row>
</template>
<script>
  import {Row, Column} from '@/layouts/girds'
  import {Portlet} from '@/components/portlet'
  import Btn from '@/components/button/btn'
  import Tooltip from '@/components/tooltip/tooltip'

  export default{
    data () {
      return {
        msg: 'hello vue!',
        placement: 'top'
      }
    },
    components: {
      Row,
      Column,
      Portlet,
      Btn,
      Tooltip
    }
  }
</script>
