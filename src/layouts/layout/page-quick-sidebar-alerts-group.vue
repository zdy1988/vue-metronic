<template>
  <div>
    <h3 class="list-heading" v-if="alerts.length > 0">{{name}}</h3>
    <ul class="feeds list-items" v-if="alerts.length > 0">
      <li v-for="(feed, index) in alerts">
        <div class="col1">
          <div class="cont">
            <div class="cont-col1">
              <div class="label label-sm" :class="'label-' + feed.status">
                <i class="fa" :class="'fa-' + feed.icon"></i>
              </div>
            </div>
            <div class="cont-col2">
              <div class="desc">
                {{feed.desc}}
              </div>
            </div>
          </div>
        </div>
        <div class="col2">
          <div class="date"> {{handleGetDateDiff(feed.time)}} </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {common} from '@/untils'

  export default {
    name: 'PageQuickSidebarAlertsGroup',
    props: {
      name: '',
      alerts: {}
    },
    methods: {
      handleGetDateDiff (dateStr) {
        return common.getDateDiff(dateStr)
      }
    }
  }
</script>
