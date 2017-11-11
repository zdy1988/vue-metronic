<template>
<row>
  <Column :md=12>
    <portlet state='light' :icon='user' color='green-sharp' bordered title='Bootstrap Modal Demos' icon='bubble'>
      <table class="table table-hover table-striped table-bordered">
        <tbody>
        <tr>
          <td> Basic Example </td>
          <td>
            <btn color="red" outline klass="sbold" @click="show = true"> View Demo </btn>
            <modal :show.sync="show">
              Modal body goes here
            </modal>
          </td>
        </tr>
        <tr>
          <td> Large Width Example </td>
          <td>
            <btn color="purple" outline klass="sbold" @click="show2 = true"> View Demo </btn>
            <modal :show.sync="show2" size="lg">
              Modal body goes here
            </modal>
          </td>
        </tr>
        <tr>
          <td> Small Width Example </td>
          <td>
            <btn color="blue" outline klass="sbold" @click="show3 = true"> View Demo </btn>
            <modal :show.sync="show3" size="sm">
              Modal body goes here
            </modal>
          </td>
        </tr>
        <tr>
          <td> Full Width Example </td>
          <td>
            <btn color="dark" outline klass="sbold" @click="show4 = true"> View Demo </btn>
            <modal :show.sync="show4" size="full">
              Modal body goes here
            </modal>
          </td>
        </tr>
        <tr>
          <td> No Masker </td>
          <td>
            <btn color="yellow" outline klass="sbold" @click="show5 = true"> View Demo </btn>
            <modal :show.sync="show5" :mask="false">
              Modal body goes here
            </modal>
          </td>
        </tr>
        <tr>
          <td> Footer Inside </td>
          <td>
            <btn color="green" outline klass="sbold" @click="show6 = true"> View Demo </btn>
            <modal :show.sync="show6">
              Modal body goes here
              <btn color="yellow" outline klass="sbold" @click="show = true" slot="footer"> View Demo </btn>
              <btn color="yellow" outline klass="sbold" @click="show2 = true" slot="footer"> View Demo </btn>
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
