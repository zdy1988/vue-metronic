<template>
  <row>
    <column :md="12">
      <step-panel :active-index.sync="activeIndex" :active-async="activeAsync">
        <div slot="desc">
          <div class="caption-desc font-grey-cascade">The active index is <pre class="mt-code">{{activeIndex}}</pre></div>
          <br>
        </div>
        <step title="PURCHASE" content="Purchasing the item"></step>
        <step title="PAYMENT" content="Complete your payment"></step>
        <step title="DEPLOY" content="Receive item integration"></step>
        <step title="DEPLOY" content="Receive item integration"></step>
      </step-panel>
      <br>
      <btn @click="prev">Prev</btn>
      <btn @click="next">Next</btn>
    </column>
    <column :md="12">
      <step-panel :active-index.sync="activeIndex" :active-async="activeAsync" theme="thin">
        <div slot="desc">
          <div class="caption-desc font-grey-cascade">The active index is <pre class="mt-code">{{activeIndex}}</pre></div>
          <br>
        </div>
        <step title="PURCHASE" content="Purchasing the item"></step>
        <step title="PAYMENT" content="Complete your"></step>
        <step title="DEPLOY" content="Receive item"></step>
        <step title="DEPLOY" content="Receive item"></step>
      </step-panel>
    </column>
    <column :md="12">
      <step-panel :active-index.sync="activeIndex" :active-async="activeAsync" theme="no-background">
        <div slot="desc">
          <div class="caption-desc font-grey-cascade">The active index is <pre class="mt-code">{{activeIndex}}</pre></div>
          <br>
        </div>
        <step title="PURCHASE" content="Purchasing the item"></step>
        <step title="PAYMENT" content="Complete your"></step>
        <step title="DEPLOY" content="Receive item"></step>
        <step title="DEPLOY" content="Receive item"></step>
      </step-panel>
    </column>
    <column :md="12">
      <step-panel :active-index.sync="activeIndex" :active-async="activeAsync" theme="no-background-thin" color="dark">
        <div slot="desc">
          <div class="caption-desc font-grey-cascade">The active index is <pre class="mt-code">{{activeIndex}}</pre></div>
          <br>
        </div>
        <step title="PURCHASE" content="Purchasing the item"></step>
        <step title="PAYMENT" content="Complete your"></step>
        <step title="DEPLOY" content="Receive item"></step>
        <step title="DEPLOY" content="Receive item"></step>
      </step-panel>
    </column>
    <column :md="12">
      <step-panel :active-index.sync="activeIndex" :active-async="activeAsync" theme="background">
        <div slot="desc">
          <div class="caption-desc font-grey-cascade">The active index is <pre class="mt-code">{{activeIndex}}</pre></div>
          <br>
        </div>
        <step title="PURCHASE" content="Purchasing the item"></step>
        <step title="PAYMENT" content="Complete your"></step>
        <step title="DEPLOY" content="Receive item"></step>
        <step title="DEPLOY" content="Receive item"></step>
      </step-panel>
    </column>
    <column :md="12">
      <step-panel :active-index.sync="activeIndex" :active-async="activeAsync" theme="background-thin">
        <div slot="desc">
          <div class="caption-desc font-grey-cascade">The active index is <pre class="mt-code">{{activeIndex}}</pre></div>
          <br>
        </div>
        <step title="PURCHASE" content="Purchasing the item"></step>
        <step title="PAYMENT" content="Complete your"></step>
        <step title="DEPLOY" content="Receive item"></step>
        <step title="DEPLOY" content="Receive item"></step>
      </step-panel>
    </column>
    <column :md="12">
      <step-panel :active-index.sync="activeIndex" :active-async="activeAsync" theme="line" color="white">
        <div slot="desc">
          <div class="caption-desc font-grey-cascade">The active index is <pre class="mt-code">{{activeIndex}}</pre></div>
          <br>
        </div>
        <step title="PURCHASE" content="Purchasing the item"></step>
        <step title="PAYMENT" content="Complete your"></step>
        <step title="DEPLOY" content="Receive item"></step>
        <step title="DEPLOY" content="Receive item"></step>
      </step-panel>
    </column>
    <column :md="12">
      <step-panel :active-index.sync="activeIndex" :active-async="activeAsync" theme="line-less" color="white">
        <div slot="desc">
          <div class="caption-desc font-grey-cascade">The active index is <pre class="mt-code">{{activeIndex}}</pre></div>
          <br>
        </div>
        <step title="PURCHASE" content="Purchasing the item"></step>
        <step title="PAYMENT" content="Complete your"></step>
        <step title="DEPLOY" content="Receive item"></step>
        <step title="DEPLOY" content="Receive item"></step>
      </step-panel>
    </column>
  </row>
</template>
<script>
  import StepPanel from '../components/step/step-panel'
  export default {
    data () {
      return {
        activeIndex: 1
      }
    },
    methods: {
      next () {
        this.activeIndex += 1
      },
      prev () {
        this.activeIndex -= 1
      },
      activeAsync (prevIndex, resolve) {
        if (prevIndex === 1) {
          resolve(false)
        } else {
          resolve(true)
        }
      }
    },
    components: {StepPanel}
  }
</script>
