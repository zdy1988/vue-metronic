<template>
  <row>
    <column :md="6">
      <portlet title="ALERTS" icon="share" theme="light" bordered>
        <h4 class="block">Default Alerts</h4>
        <alert :show.sync="show" content="Success! The page has been added."></alert>
        <btn @click="show = !show">Toggle Alert</btn>
        <h4 class="block">Alert states</h4>
        <alert :show.sync="show_success" state="success">Success! The page has been added.</alert>
        <alert :show.sync="show_info" state="info">Info! You have 198 unread messages.</alert>
        <alert :show.sync="show_warning" state="warning">Warning! Your monthly traffic is reaching limit.</alert>
        <alert :show.sync="show_danger" state="danger">Error! The daily cronjob has failed.</alert>
      </portlet>
      <portlet title="PULSATE" icon="share" theme="light" bordered>
        <h4>Pulsate any page elements.</h4>
        <div class="margin-top-10 margin-bottom-10 clearfix">
          <table class="table table-bordered table-striped">
            <tbody>
            <tr>
              <td>
                <lable>Repeating Pulsate</lable>
              </td>
              <td v-pulsate>
                <textbox size="sm"></textbox>
              </td>
            </tr>
            <tr>
              <td>
                <lable>Pulsate Number</lable>
              </td>
              <td v-pulsate.green="pulsateNumber">
                <textbox size="sm" v-model.lazy="pulsateNumber"></textbox>
              </td>
            </tr>
            <tr>
              <td>
                <lable>Pulsate Crazy</lable>
              </td>
              <td v-pulsate.yellow.crazy>
                <textbox size="sm"></textbox>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </portlet>
      <portlet title="TOOLTIPS" icon="share" theme="light" bordered>
        <well>
          Tight pants next level keffiyeh you probably haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel have a terry richardson vinyl chambray. twitter handle freegan cred raw denim single-origin coffee viral.
        </well>
        <btn v-tooltip.top="'Tooltip in top'">Top</btn>
        <btn v-tooltip.left="'Tooltip in left'">Left</btn>
        <btn v-tooltip.right="'Tooltip in right'">Right</btn>
        <btn v-tooltip.bottom="'Tooltip in bottom'">Bottom</btn>
      </portlet>
      <portlet title="POPOVERS" icon="share" theme="light" bordered>
        <well>
          Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel trigger me on hover terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa.
        </well>
        <btn v-popover.top="'Popover in top'">Top</btn>
        <btn v-popover.left="'Popover in left'">Left</btn>
        <btn v-popover.right="'Popover in right'">Right</btn>
        <btn v-popover.bottom="'Popover in bottom'">Bottom</btn>
        <hr>
        <btn v-popover.top="{title:'Popover in top',content:'Popover body goes here! Popover body goes here!'}">Top</btn>
        <btn v-popover.left="{title:'Popover in left',content:'Popover body goes here! Popover body goes here!'}">Left</btn>
        <btn v-popover.right="{title:'Popover in right',content:'Popover body goes here! Popover body goes here!'}">Right</btn>
        <btn v-popover.bottom="{title:'Popover in bottom',content:'Popover body goes here! Popover body goes here!'}">Bottom</btn>
      </portlet>
      <portlet title="LIST GROUPS" icon="share" theme="light" bordered>
        <h4 class="block">Basic</h4>
        <list>
          <list-item>Item 1</list-item>
          <list-item>Item 2</list-item>
          <list-item>Item 3</list-item>
          <list-item>Item 4</list-item>
        </list>
        <h4 class="block">Custom Colors(refer to ui_colors.html for more colors)</h4>
        <list>
          <list-item color="blue">Item 1</list-item>
          <list-item color="red">Item 2</list-item>
          <list-item color="green">Item 3</list-item>
          <list-item color="purple">Item 4</list-item>
        </list>
        <h4 class="block">Badges</h4>
        <list>
          <list-item>Item 1 <badge>1</badge></list-item>
          <list-item>Item 2 <badge color="red">5</badge></list-item>
          <list-item>Item 3 <badge color="green">2</badge></list-item>
          <list-item>Item 4 <badge color="blue">3</badge></list-item>
        </list>
        <h4 class="block">Contextual States</h4>
        <list>
          <list-item state="default">Default</list-item>
          <list-item state="success">Success</list-item>
          <list-item state="info">Info</list-item>
          <list-item state="danger">Danger</list-item>
          <list-item state="warning">Warning</list-item>
        </list>
        <h4 class="block">Custom Content</h4>
        <list>
          <list-item>
            <h4>List group item heading</h4>
            <p> Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. </p>
          </list-item>
          <list-item>
            <h4>List group item heading</h4>
            <p> Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. </p>
          </list-item>
          <list-item>
            <h4>List group item heading</h4>
            <p> Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. </p>
          </list-item>
        </list>
      </portlet>
      <portlet title="PANELS" icon="share" theme="light" bordered>
        <h4 class="block">Basic Panels</h4>
        <panel title="Panel title">
          Panel content
        </panel>
        <panel>
          <div slot="header">
            Panel heading
          </div>
          Panel content
        </panel>
        <panel>
          <div slot="footer">
            Panel heading
          </div>
          Panel content
        </panel>
        <h4 class="block">Contextual Panels</h4>
        <panel state="default" title="Default Panel">Panel content</panel>
        <panel state="primary" title="Primary Panel">Panel content</panel>
        <panel state="success" title="Success Panel">Panel content</panel>
        <panel state="info" title="Info Panel">Panel content</panel>
        <panel state="warning" title="Warning Panel">Panel content</panel>
        <panel state="danger" title="Danger Panel">Panel content</panel>
        <h4 class="block">With Tables</h4>
        <panel state="info" title="Panel Title">
          <p> Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Nullam id dolor id nibh ultricies vehicula ut id elit. </p>
          <table class="table" slot="table">
            <thead>
            <tr>
              <th> # </th>
              <th> First Name </th>
              <th> Last Name </th>
              <th> Username </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td> 1 </td>
              <td> Mark </td>
              <td> Otto </td>
              <td> @mdo </td>
            </tr>
            <tr>
              <td> 2 </td>
              <td> Jacob </td>
              <td> Thornton </td>
              <td> @fat </td>
            </tr>
            <tr>
              <td> 3 </td>
              <td> Larry </td>
              <td> the Bird </td>
              <td> @twitter </td>
            </tr>
            </tbody>
          </table>
        </panel>
        <h4 class="block">With List Groups</h4>
        <panel state="warning" title="Panel Title">
          <p> Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies
            vehicula ut id elit. </p>
          <list slot="list">
            <list-item>Item 1 <badge>1</badge></list-item>
            <list-item>Item 2 <badge color="red">5</badge></list-item>
            <list-item>Item 3 <badge color="green">2</badge></list-item>
            <list-item>Item 4 <badge color="blue">3</badge></list-item>
          </list>
        </panel>
      </portlet>
    </column>
    <column :md="6">
      <portlet title="NOTE" icon="share" theme="light" bordered>
        <h4 class="block">Default Note</h4>
        <note content="Duis mollis, est non commodo luctus, nisi erat mattis consectetur purus sit amet porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum."></note>
        <h4 class="block">Note states</h4>
        <note title="Success! Some Header Goes Here" state="success">
          Duis mollis, est non commodo luctus, nisi erat mattis consectetur purus sit amet porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
        </note>
        <note title="Info! Some Header Goes Here" state="info">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, mattis consectetur purus sit amet eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
        </note>
        <note title="Danger! Some Header Goes Here" state="danger">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit mattis consectetur purus sit amet.\ Cras mattis consectetur purus sit amet fermentum.
        </note>
        <note title="Warning! Some Header Goes Here" state="warning">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit mattis consectetur purus sit amet. Cras mattis consectetur purus sit amet fermentum.
        </note>
      </portlet>
      <portlet title="PROGRESS" icon="share" theme="light" bordered>
        <h4 class="block">Base</h4>
        <progress-bar :value="progress" :max="max" :min="min" :step="step" title="Complete (success)" show-value></progress-bar>
        <btn @click="randomProgress">Random Progress</btn>
        <h4 class="block">Styles</h4>
        <progress-bar :value="40" state="success"></progress-bar>
        <progress-bar :value="40" state="info"></progress-bar>
        <progress-bar :value="40" state="warning"></progress-bar>
        <progress-bar :value="40" state="danger"></progress-bar>
        <h4 class="block">Striped</h4>
        <progress-bar :value="40" state="success" stripe="static"></progress-bar>
        <progress-bar :value="40" state="info" stripe="static"></progress-bar>
        <progress-bar :value="40" state="warning" stripe="static"></progress-bar>
        <progress-bar :value="40" state="danger" stripe="static"></progress-bar>
        <h4 class="block">Animated</h4>
        <progress-bar :value="40" state="success" stripe="active"></progress-bar>
        <progress-bar :value="40" state="info" stripe="active"></progress-bar>
        <progress-bar :value="40" state="warning" stripe="active"></progress-bar>
        <progress-bar :value="40" state="danger" stripe="active"></progress-bar>
      </portlet>
      <portlet title="LABLES & BADGES" icon="share" theme="light" color="red" bordered>
        <h4 class="block">Labels & Badges Styles</h4>
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th> Class </th>
              <th> Labels </th>
              <th> Badges </th>
              <th> Square Badges </th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td> Default </td>
            <td>
              <lable>Default</lable>
            </td>
            <td>
              <badge>5</badge>
            </td>
            <td>
              <badge shape="square">3</badge>
            </td>
          </tr>
          <tr>
            <td> Primary </td>
            <td>
              <lable state="primary">Primary</lable>
            </td>
            <td>
              <badge state="primary">5</badge>
            </td>
            <td>
              <badge shape="square" state="primary">3</badge>
            </td>
          </tr>
          <tr>
            <td> Info </td>
            <td>
              <lable state="info">Info</lable>
            </td>
            <td>
              <badge state="info">5</badge>
            </td>
            <td>
              <badge shape="square" state="info">3</badge>
            </td>
          </tr>
          <tr>
            <td> Success </td>
            <td>
              <lable state="success">Success</lable>
            </td>
            <td>
              <badge state="success">5</badge>
            </td>
            <td>
              <badge shape="square" state="success">3</badge>
            </td>
          </tr>
          <tr>
            <td> Danger </td>
            <td>
              <lable state="danger">Danger</lable>
            </td>
            <td>
              <badge state="danger">5</badge>
            </td>
            <td>
              <badge shape="square" state="danger">3</badge>
            </td>
          </tr>
          <tr>
            <td> Warning </td>
            <td>
              <lable state="warning">Warning</lable>
            </td>
            <td>
              <badge state="warning">5</badge>
            </td>
            <td>
              <badge shape="square" state="warning">3</badge>
            </td>
          </tr>
          </tbody>
        </table>
        <h4 class="block">Labels In Headings</h4>
        <well>
          <h1>Example heading
            <lable>default</lable>
          </h1>
          <h2>Example heading
            <lable state="success">success</lable>
          </h2>
          <h3>Example heading
            <lable state="danger">danger</lable>
          </h3>
          <h4 class="block">Example heading
            <lable state="info">info</lable>
          </h4>
          <h4>Example heading
            <lable state="warning">warning</lable>
          </h4>
          <h6>Example heading
            <lable state="primary">primary</lable>
          </h6>
        </well>
        <h4 class="block">Badges in Button Dropdowns</h4>
        <btn-dropdown text="Open Me!">
          <btn state="success">Action <badge class="float-right">1</badge></btn>
          <btn state="danger">Action <badge class="float-right">3</badge></btn>
          <btn state="info">Action <badge class="float-right">4</badge></btn>
        </btn-dropdown>
      </portlet>
      <portlet title="PAGINATION" icon="share" theme="light" color="red" bordered>
        <h4 class="block">Basic Pagination</h4>
        <well>Page {{currentPage}} content here</well>
        <div>
          <pagination size="lg" :total-rows="100" v-model="currentPage" :per-page="10"></pagination>
        </div>
        <div>
          <pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10"></pagination>
        </div>
        <div>
          <pagination size="sm" :total-rows="100" v-model="currentPage" :per-page="10"></pagination>
        </div>
      </portlet>
      <portlet title="WELLS" icon="share" theme="light" color="red" bordered>
        <well size="lg">
          <h4 class="block">I am a large well</h4>
          <p> Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. </p>
        </well>
        <well>
          <h4 class="block">I am a default well</h4>
          <p> Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. </p>
        </well>
        <well size="sm">
          <h4 class="block">I am a small well</h4>
          <p> Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. </p>
        </well>
      </portlet>
    </column>
  </row>
</template>
<script>
  export default {
    data () {
      return {
        show: true,
        show_success: true,
        show_info: true,
        show_warning: true,
        show_danger: true,

        min: 20,
        max: 100,
        step: 1,
        progress: 43.8,

        currentPage: 2,

        tooltip: 'tooptip value',

        pulsateNumber: 10
      }
    },
    methods: {
      GetRandomNum (Min, Max) {
        var Range = Max - Min
        var Rand = Math.random()
        return (Min + Math.round(Rand * Range))
      },
      randomProgress () {
        this.progress = this.GetRandomNum(this.min, this.max)
      }
    }
  }
</script>
