<template>
<row>
  <column :md=2 :sm=2 :xs=6 v-for='color in colorKeys' :key="color">
    <div class="color-demo tooltips" data-original-title="Click to view demos for this color" @click="modals[color].showModal = true">
      <div :class="['color-view','bg-'+color,'bg-font-'+color,'bold','uppercase']"> {{colors[color].base}} </div>
      <div :class="['color-info','bg-white','c-font-14','sbold']"> {{color}} </div>
    </div>
    <modal :show.sync="modals[color].showModal" :title="color" size="lg">
      <tabs mode="line">
        <tab-pane name="Typography" cur>
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
          <h4>Class usage</h4> <code>class="font-{{color}}"</code>
        </tab-pane>
        <tab-pane name="Background & Border">
          <div style="margin: 30px 0;">
            <div :class="['border-'+color,'margin-bottom-10']" style="padding: 10px; border: 2px solid #fff;"> Box with custom border color </div> <code>class="border-{{color}}"</code>
          </div>
          <div style="margin: 30px 0;">
            <div :class="['bg-'+color,'bg-font-'+color,'margin-bottom-10']" style="padding: 10px; "> Box with custom background color </div> <code>class="bg-{{color}} bg-font-{{color}}"</code>
          </div>
        </tab-pane>
        <tab-pane name="Buttons">
          <div style="margin: 10px 0 30px 0">
            <a href="#" :class="['btn','uppercase',color]">Button</a> &nbsp; <code>class="btn {{color}}"</code> </div>
          <div style="margin: 10px 0 30px 0">
            <a href="#" :class="['btn','sbold','uppercase','btn-outline',color]">Button</a> &nbsp; <code>class="c-btn-border-1x c-btn-{{color}}"</code> </div>
          <div style="margin: 10px 0 30px 0">
            <a href="#" :class="['btn','sbold','uppercase','btn-circle',color]">Button</a> &nbsp; <code>class="btn btn-circle {{color}}"</code> </div>
        </tab-pane>
        <tab-pane name="Components">
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
        </tab-pane>
      </tabs>
    </modal>
  </column>
</row>
</template>
<script>
  import {colors, colorKeys} from '@/untils'

  export default{
    data () {
      return {
        colors: colors,
        colorKeys: colorKeys,
        modals: (
          function () {
            var self = colors
            colorKeys.forEach(function (color) {
              self[color].showModal = false
            })
            return self
          }
        )()
      }
    }
  }
</script>
