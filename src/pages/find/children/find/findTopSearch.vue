<template lang="html">
  <div class="hotSearch-wrapper">
    <div slot="menu">
      <div class="hotSearch-title">
        爆款热搜
        <i class="icon-baokuanresou"></i>
      </div>
    </div>
    <div class="hotSearch-list">
      <ts-grid layOut="column" :data="BurstHotSearch">
        <ts-grid-item v-for="(product,index) in BurstHotSearch" :key="product" @click="handleViewProduct(product,index)">
          <span class="ranking hotSearch-rank" :class="`ranking_${index+1}`" v-if="index<3&&Params.pageNo===1"></span>
          <ts-image
           width="220"
           height="220"
           :canView="false"
           disabledHover
           :src="product.pics[0]+'?x-oss-process=image/resize,m_fill,h_220,w_220'+watermask">
           </ts-image>
           <template slot="footer" class="hotSearch-footer">
             <p>搜索量&nbsp;<span class="hotSearch-footer--searchNum">{{product.searchs}}</span></p>
             <p class="hotSearch-footer--total">共{{product.sameCount}}款</p>
           </template>
         </ts-grid-item>
      </ts-grid>
      <router-link to="topSearch">
        <ts-button type="plain" size="large"  class="hotSearch-search" :disabled="isEmpty">更多爆款</ts-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {
  burstHotSearch
} from '@/common/api/api';
export default {
  data() {
    return {
      Params: {
        pageNO: 1,
        pageSize: 10
      },
      BurstHotSearch: {}
    };
  },
  computed: {
    ...mapGetters(['watermask']),
    isEmpty() {
      return !this.BurstHotSearch.length;
    }
  },
  methods: {
    handleViewProduct(item, index) {
      this.$router.push({
        name: 'updateResult',
        params: {
          id: index + 1
        },
        query: {
          sameCount: item.sameCount,
          searchs: item.searchs
        }
      });
    }
  },
  async created() {
    this.BurstHotSearch = (await burstHotSearch(this.Params)).data.data.list;
  }
};
</script>

<style lang="css" scoped>
@component-namespace hotSearch{
  @component list{
    padding: 22px;
    background: #fff;
  }
  @component footer{
    @modifier searchNum{
      color: #FF8400;
    }
    @modifier total{
      color:#999999;
    }
  }
  @component search{
    margin-top: 26px;
  }
  @component wrapper{
    min-width: 294px;
  }
  @component title{
    line-height: 45px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    background:#f4543c;
  }
  @component rank{
    position: absolute;
    z-index: 1;
  }
}
</style>
