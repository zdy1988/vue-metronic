<template>
  <row>
    <column :md="12">
      <ribbon-panel>
        <ribbon slot="ribbon">
          RIBBON BORDER
        </ribbon>
        <p>搜索聚合海量新闻资讯,分分钟更新新闻热点。提供15大分类资讯,涵盖国内、国际、军事、体育、互联网、科技、教育、财经、房产、汽车、娱乐、女性、健康、...</p>
      </ribbon-panel>
      <ribbon-panel>
        <ribbon slot="ribbon" float="right" border="solid">
          RIBBON BORDER
        </ribbon>
        <p>搜索聚合海量新闻资讯,分分钟更新新闻热点。提供15大分类资讯,涵盖国内、国际、军事、体育、互联网、科技、教育、财经、房产、汽车、娱乐、女性、健康、...</p>
      </ribbon-panel>
      <ribbon-panel>
        <ribbon slot="ribbon" float="right" border="solid" vertical>
          <fa name="star"></fa>
        </ribbon>
        <p>搜索聚合海量新闻资讯,分分钟更新新闻热点。提供15大分类资讯,涵盖国内、国际、军事、体育、互联网、科技、教育、财经、房产、汽车、娱乐、女性、健康、...</p>
      </ribbon-panel>
      <ribbon-panel>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark" color="blue">
          <fa name="star"></fa>
        </ribbon>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark" color="red">
          <fa name="star"></fa>
        </ribbon>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark" color="green">
          <fa name="star"></fa>
        </ribbon>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark" color="dark">
          <fa name="star"></fa>
        </ribbon>
        <p>搜索聚合海量新闻资讯,分分钟更新新闻热点。提供15大分类资讯,涵盖国内、国际、军事、体育、互联网、科技、教育、财经、房产、汽车、娱乐、女性、健康、...</p>
      </ribbon-panel>
      <ribbon-panel>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark">
          <fa name="star"></fa>
        </ribbon>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark">
          <fa name="star"></fa>
        </ribbon>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark">
          <fa name="star"></fa>
        </ribbon>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark">
          <fa name="star"></fa>
        </ribbon>
        <p>搜索聚合海量新闻资讯,分分钟更新新闻热点。提供15大分类资讯,涵盖国内、国际、军事、体育、互联网、科技、教育、财经、房产、汽车、娱乐、女性、健康、...</p>
      </ribbon-panel>
      <ribbon-panel>
        <ribbon slot="ribbon" float="right" border="solid" theme="clipped" color="red">
          RIBBON BORDER
        </ribbon>
        <p>搜索聚合海量新闻资讯,分分钟更新新闻热点。提供15大分类资讯,涵盖国内、国际、军事、体育、互联网、科技、教育、财经、房产、汽车、娱乐、女性、健康、...</p>
      </ribbon-panel>
      <portlet theme='light' color='red' title='ribbon' icon='pencil' :tools="false">
        <ribbon slot="ribbon" float="right" border="solid" theme="clipped" color="red">
          RIBBON BORDER
        </ribbon>
        <p>搜索聚合海量新闻资讯,分分钟更新新闻热点。提供15大分类资讯,涵盖国内、国际、军事、体育、互联网、科技、教育、财经、房产、汽车、娱乐、女性、健康、...</p>
      </portlet>
      <portlet theme='light' color='red' title='ribbon' icon='pencil' :tools="false">
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark" color="blue">
          <fa name="star"></fa>
        </ribbon>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark" color="red">
          <fa name="star"></fa>
        </ribbon>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark" color="green">
          <fa name="star"></fa>
        </ribbon>
        <ribbon slot="ribbon" float="right" border="solid" vertical theme="bookmark" color="dark">
          <fa name="star"></fa>
        </ribbon>
        <p>搜索聚合海量新闻资讯,分分钟更新新闻热点。提供15大分类资讯,涵盖国内、国际、军事、体育、互联网、科技、教育、财经、房产、汽车、娱乐、女性、健康、...</p>
      </portlet>
    </column>
  </row>
</template>
<script>
  import RibbonPanel from '../components/ribbon/ribbon-panel'
  import Ribbon from '../components/ribbon/ribbon'
  export default {
    components: {
      Ribbon,
      RibbonPanel
    }
  }
</script>
