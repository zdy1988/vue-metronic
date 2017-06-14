<template>
<row>
  <Column :md=12>
    <portlet mode='light' :icon='user' color='green-sharp' bordered title='Bootstrap Modal Demos' icon='bubble'>
      <table class="table table-hover table-striped table-bordered">
        <tbody>
        <tr>
          <td> Basic Example </td>
          <td>
            <a class="btn red btn-outline sbold" @click="show = true"> View Demo </a>
            <modal :show="show" @update:show="val => show = val" @onOpen="statusChange" @onClose="statusChange">
              Modal body goes here
            </modal>
          </td>
        </tr>
        <tr>
          <td> Large Width Example </td>
          <td>
            <a class="btn purple btn-outline sbold" @click="show2 = true"> View Demo </a>
            <modal :show="show2" @update:show="val => show2 = val" size="lg">
              Modal body goes here
            </modal>
          </td>
        </tr>
        <tr>
          <td> Small Width Example </td>
          <td>
            <a class="btn blue btn-outline sbold" @click="show3 = true"> View Demo </a>
            <modal :show="show3" @update:show="val => show3 = val" size="sm">
              Modal body goes here
            </modal>
          </td>
        </tr>
        <tr>
          <td> Full Width Example </td>
          <td>
            <a class="btn dark btn-outline sbold" @click="show4 = true"> View Demo </a>
            <modal :show="show4" @update:show="val => show4 = val" size="full">
              Modal body goes here
            </modal>
          </td>
        </tr>
        <tr>
          <td> No Masker </td>
          <td>
            <a class="btn yellow btn-outline sbold" @click="show5 = true"> View Demo </a>
            <modal :show="show5" @update:show="val => show5 = val" :mask="false">
              Modal body goes here
            </modal>
          </td>
        </tr>
        <tr>
          <td> Footer Inside </td>
          <td>
            <a class="btn green btn-outline sbold" @click="show6 = true"> View Demo </a>
            <modal :show="show6" @update:show="val => show6 = val">
              Modal body goes here
              <a class="btn yellow btn-outline sbold" @click="show = true" slot="footer"> View Demo 1 </a>
              <a class="btn yellow btn-outline sbold" @click="show2 = true" slot="footer"> View Demo 2 </a>
            </modal>
          </td>
        </tr>
        <tr>
          <td> Responsive </td>
          <td>
            <a class="btn red btn-outline sbold" data-toggle="modal" href="#responsive"> View Demo </a>
          </td>
        </tr>
        <tr>
          <td> AJAX content loading </td>
          <td>
            <a class=" btn yellow btn-outline sbold" href="ui_modals_ajax_sample.html" data-target="#ajax" data-toggle="modal"> View Demo </a>
          </td>
        </tr>
        <tr>
          <td> Stackable </td>
          <td>
            <a class=" btn green btn-outline sbold" data-target="#stack1" data-toggle="modal"> View Demo </a>
          </td>
        </tr>
        <tr>
          <td> Static Background </td>
          <td>
            <a class=" btn purple btn-outline sbold" data-toggle="modal" href="#static"> View Demo </a>
          </td>
        </tr>
        <tr>
          <td> Long Modals </td>
          <td>
            <a class=" btn dark btn-outline sbold" data-toggle="modal" href="#long"> View Demo </a>
          </td>
        </tr>
        </tbody></table>
    </portlet>
  </Column>
</row>
</template>
<script>
  import Row from '@/layouts/girds/row'
  import Column from '@/layouts/girds/column'
  import Portlet from '@/components/portlet/portlet'
  import Modal from '@/components/modal/modal'

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
    },
    methods: {
      statusChange: (v) => {
        console.log(v)
      }
    },
    components: {
      Modal,
      Row,
      Column,
      Portlet
    }
  }
</script>
