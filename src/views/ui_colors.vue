<template>
<row>
  <column :md=2 :sm=2 :xs=6 v-for='color in colors' :key="color">
    <div class="color-demo tooltips" data-original-title="Click to view demos for this color" @click="modals[color].showModal = true">
      <div :class="['color-view','bg-'+color,'bg-font-'+color,'bold','uppercase']"> {{colors2[color].base}} </div>
      <div :class="['color-info','bg-white','c-font-14','sbold']"> {{color}} </div>
    </div>
    <modal :show="modals[color].showModal" :close="modals[color].closeModal" :title="color" size="lg">
      <div class="tabbable-line">
        <ul class="nav nav-tabs uppercase bold">
          <li class="active">
            <a href="#blue-hoki_tab_1_content" data-toggle="tab">Typography</a>
          </li>
          <li>
            <a href="#blue-hoki_tab_2_content" data-toggle="tab">Background & Border</a>
          </li>
          <li>
            <a href="#blue-hoki_tab_3_content" data-toggle="tab">Buttons</a>
          </li>
          <li>
            <a href="#blue-hoki_tab_4_content" data-toggle="tab">Components</a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active" id="blue-hoki_tab_1_content">
            <h4>Text font</h4>
            <div style="margin: 10px 0 30px 0">
              <span :class="['font-'+color,'font-lg']">Some sample text goes here...</span>
              <br>
              <span :class="['font-'+color,'font-lg','sbold']">Some sample text goes here...</span>
              <br>
              <span :class="['font-'+color,'font-lg','bold','uppercase']">Some sample text goes here...</span>
            </div>
            <h4>Background matching text font</h4>
            <div style="margin: 10px 0 30px 0; padding: 10px" :class="['bg-'+color]">
              <span :class="['bg-font-'+color,'font-lg']">Some sample text goes here...</span>
              <br>
              <span :class="['bg-font-'+color,'font-lg','sbold']">Some sample text goes here...</span>
              <br>
              <span :class="['bg-font-'+color,'font-lg','bold','uppercase']">Some sample text goes here...</span>
            </div>
            <h4>Icon font</h4>
            <div style="margin: 10px 0 30px 0">
              <i :class="['font-'+color,'font-lg','icon-user']"></i>&nbsp;
              <i :class="['font-'+color,'font-lg','icon-settings']"></i>
              <i :class="['font-'+color,'font-lg','icon-calendar']"></i>
              <br>
              <i :class="['font-'+color,'font-lg','fa fa-bar-chart-o']"></i>&nbsp;
              <i :class="['font-'+color,'font-lg','fa fa-code-fork icon-settings']"></i>
              <i :class="['font-'+color,'font-lg','fa fa-cogs']"></i>
              <br>
              <i :class="['font-'+color,'font-lg','glyphicon glyphicon-star-empty']"></i>
              <i :class="['font-'+color,'font-lg','glyphicon glyphicon-leaf']"></i>
              <i :class="['font-'+color,'font-lg','glyphicon glyphicon-warning-sign']"></i>
              <br>
            </div>
            <h4>Background matching icon font</h4>
            <div style="margin: 10px 0 30px 0; padding: 10px" :class="['bg-'+color]">
              <i :class="['bg-font-'+color,'font-lg','icon-user']"></i>&nbsp;
              <i :class="['bg-font-'+color,'font-lg','icon-settings']"></i>
              <i :class="['bg-font-'+color,'font-lg','icon-calendar']"></i>
              <br>
              <i :class="['bg-font-'+color,'font-lg','fa fa-bar-chart-o']"></i>&nbsp;
              <i :class="['bg-font-'+color,'font-lg','fa fa-code-fork icon-settings']"></i>
              <i :class="['bg-font-'+color,'font-lg','fa fa-cogs']"></i>
              <br>
              <i :class="['bg-font-'+color,'font-lg','glyphicon glyphicon-star-empty']"></i>
              <i :class="['bg-font-'+color,'font-lg','glyphicon glyphicon-leaf']"></i>
              <i :class="['bg-font-'+color,'font-lg','glyphicon glyphicon-warning-sign']"></i>
              <br>
            </div>
            <h4>Class usage</h4> <code>class="font-{{color}}"</code> </div>
          <div class="tab-pane" id="blue-hoki_tab_2_content">
            <div style="margin: 30px 0;">
              <div :class="['border-'+color,'margin-bottom-10']" style="padding: 10px; border: 2px solid #fff;"> Box with custom border color </div> <code>class="border-{{color}}"</code> </div>
            <div style="margin: 30px 0;">
              <div :class="['bg-'+color,'bg-font-'+color,'margin-bottom-10']" style="padding: 10px; "> Box with custom background color </div> <code>class="bg-{{color}} bg-font-{{color}}"</code> </div>
          </div>
          <div class="tab-pane" id="blue-hoki_tab_3_content">
            <div style="margin: 10px 0 30px 0">
              <a href="#" :class="['btn','uppercase',color]">Button</a> &nbsp; <code>class="btn {{color}}"</code> </div>
            <div style="margin: 10px 0 30px 0">
              <a href="#" :class="['btn','sbold','uppercase','btn-outline',color]">Button</a> &nbsp; <code>class="c-btn-border-1x c-btn-{{color}}"</code> </div>
            <div style="margin: 10px 0 30px 0">
              <a href="#" :class="['btn','sbold','uppercase','btn-circle',color]">Button</a> &nbsp; <code>class="btn btn-circle {{color}}"</code> </div>
          </div>
          <div class="tab-pane" id="blue-hoki_tab_4_content">
            <div style="margin: 10px 0 30px 0">
              <h4>Statistic Widgets</h4>
              <div :class="['dashboard-stat',color]">
                <div class="visual">
                  <i class="fa fa-bar-chart-o"></i>
                </div>
                <div class="details">
                  <div class="number"> 12,5M$ </div>
                  <div class="desc"> Total Profit </div>
                </div>
                <a class="more" href="javascript:;"> View more
                  <i class="m-icon-swapright m-icon-white"></i>
                </a>
              </div> <code>class="dashboard-stat {{color}}"</code> </div>
          </div>
        </div>
      </div>
    </modal>
  </column>
</row>
</template>
<script>
  import colors from '@/untils/colors'
  import colors2 from '@/untils/colors2'

  import Row from '@/layouts/girds/row'
  import Column from '@/layouts/girds/column'
  import Modal from '@/components/modal/modal'

  export default{
    data () {
      return {
        colors: colors,
        colors2: colors2,
        modals: (
          function () {
            var self = colors2
            colors.forEach(function (color) {
              self[color].showModal = false
              self[color].closeModal = function () {
                self[color].showModal = false
              }
            })
            return self
          }
        )()
      }
    },
    components: {
      Row,
      Column,
      Modal
    }
  }
</script>
