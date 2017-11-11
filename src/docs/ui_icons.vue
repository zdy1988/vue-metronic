<template>
<row>
  <column :md="12">
    <tabs mode="line">
      <tab-pane name=" Fontawesome Icons " cur>
        <div class="note note-success">
          <p> Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS. The complete set of 439 icons in Font Awesome
            4.1.0 </p> For more info check out:
          <a target="_blank" href="http://fortawesome.github.io/Font-Awesome/icons/">http://fortawesome.github.io/Font-Awesome/icons/</a>
        </div>
        <section>
          <h3>Fontawesome Icons</h3>
          <row class="fontawesome-icon-list">
            <div class="fa-item col-md-3 col-sm-4" v-for="faicon in faicons">
              <i :class="['fa','fa-'+faicon]"></i>
              {{faicon}}
            </div>
          </row>
        </section>
      </tab-pane>
      <tab-pane name=" Simple Line Icons ">
        <div class="note note-success">
          <p> Simple Line Icons. 162 Beautifully Crafted Webfont Icons.
            <br> For more info check out
            <a href="http://graphicburger.com/simple-line-icons-webfont/" target="_blank">http://graphicburger.com/simple-line-icons-webfont/</a>
          </p>
        </div>
        <h3>Simple Line Icons</h3>
        <row class="simplelineicons-demo">
          <span class="item-box" v-for="icon in icons">
            <span class="item">
              <span aria-hidden="true" :class="['icon-'+icon]"></span> &nbsp;{{icon}}
            </span>
          </span>
        </row>
      </tab-pane>
    </tabs>
  </column>
</row>
</template>
<script>
  import {icons, faicons} from '@/untils'

  export default{
    data () {
      return {
        icons: icons,
        faicons: faicons
      }
    }
  }
</script>
