<template>
  <row>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay color='red'>
          <img :src="img1">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay theme="1-scroll-up">
          <img :src="img1">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay theme="1-scroll-down">
          <img :src="img1">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay theme="1-scroll-left">
          <img :src="img1">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay theme="1-scroll-right">
          <img :src="img1">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay theme="2" title="overlay">
          <img :src="img1">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay theme="2-gray-scale" title="overlay">
          <img :src="img1">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay theme="3" title="overlay">
          <img :src="img1">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay theme="4" title="overlay">
          <img :src="img1">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay theme="5" title="overlay">
          <img :src="img2">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
    <column :md="4">
      <portlet theme='light' color='red' bordered title='overlay' icon='pencil'>
        <overlay theme="6" title="overlay">
          <img :src="img3">
          <btn klass="default" outline slot="content" @click="_click">More</btn>
        </overlay>
      </portlet>
    </column>
  </row>
</template>
<script>
  import Overlay from '../components/overlay/overlay'
  export default {
    data () {
      return {
        img1: require('../../static/img/pages/page_general_search/03.jpg'),
        img2: require('../../static/img/pages/background/12.jpg'),
        img3: require('../../static/img/pages/page_general_search/3.jpg')
      }
    },
    methods: {
      _click () {
        this.$alert('hello vue!')
      }
    },
    components: {Overlay}
  }
</script>
