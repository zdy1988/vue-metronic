<template>
<row>
  <column :md=2 :sm=2 :xs=6 v-for='color in colors' :key="color">
    <div class="color-demo tooltips" data-original-title="Click to view demos for this color" data-toggle="modal" data-target="#demo_modal_white">
      <div :class="['color-view','bg-'+color,'bg-font-'+color,'bold','uppercase']"> {{colors2[color].base}} </div>
      <div :class="['color-info','bg-white','c-font-14','sbold']"> {{color}} </div>
    </div>
  </column>
</row>
</template>
<script>
  import colors from '@/untils/colors'
  import colors2 from '@/untils/colors2'

  import Row from '@/layouts/girds/row'
  import Column from '@/layouts/girds/column'

  export default{
    data () {
      return {
        colors: colors,
        colors2: colors2
      }
    },
    components: {
      Row,
      Column
    }
  }
</script>
