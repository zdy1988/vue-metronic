<row>
  <column :md=12>
    <portlet title="PROGRESS" icon="share" theme="light" bordered>
      <h4 class="block">Base</h4>
      <progress-bar :value="progress" :max="max" :min="min" :step="step" title="Complete (success)" show-value></progress-bar>
      <btn @click="randomProgress">Random Progress</btn>
      <h4 class="block">Styles</h4>
      <progress-bar :value="40" theme="success"></progress-bar>
      <progress-bar :value="40" theme="info"></progress-bar>
      <progress-bar :value="40" theme="warning"></progress-bar>
      <progress-bar :value="40" theme="danger"></progress-bar>
      <h4 class="block">Striped</h4>
      <progress-bar :value="40" theme="success" stripe="static"></progress-bar>
      <progress-bar :value="40" theme="info" stripe="static"></progress-bar>
      <progress-bar :value="40" theme="warning" stripe="static"></progress-bar>
      <progress-bar :value="40" theme="danger" stripe="static"></progress-bar>
      <h4 class="block">Animated</h4>
      <progress-bar :value="40" theme="success" stripe="active"></progress-bar>
      <progress-bar :value="40" theme="info" stripe="active"></progress-bar>
      <progress-bar :value="40" theme="warning" stripe="active"></progress-bar>
      <progress-bar :value="40" theme="danger" stripe="active"></progress-bar>
      <h4 class="block">Code</h4>
    </portlet>
  </column>
</row>
<script>
  export default {
    data () {
      return {
        min: 20,
        max: 100,
        step: 1,
        progress: 43.8
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
