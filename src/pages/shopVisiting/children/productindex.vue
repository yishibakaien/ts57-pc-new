<template lang="html">
  <div class="productIndex">
    <p class="productIndex-empty onepx" v-if="length<=0">该网店暂未上架花型</p>
    <div v-for="(item,index) in CompanyProducts" v-if="!!item.list.length">
      <ts-title-block :bodyStyle="{'font-size':'20px'}">
        <i class="icon-huaxin"></i>&nbsp;{{item.className}}
        <a slot="menu" v-if="!!item.list.length&&item.classId!==getHotSearch" @click="handleGoto(item)">
            更多&nbsp;&nbsp;<i class="icon-gengduo"></i>
        </a>
      </ts-title-block>
      <ts-grid :type="item.className==='全部花型'?'flexbox':'table'" :data="item.list">
        <ts-grid-item :style="{'width':item.classId===getHotSearch?'400px':'240px'}" v-for="(product,e) in item.list" :key="product" @click="handleViewProduct(product)">
          <span class="topRanking productIndex-rank" :class="'topRanking_'+e" v-if="item.classId===getHotSearch"></span>
          <ts-image
           :width="getHotSearch?'':'170'"
           height="170"
           :canView="false"
           disabledHover
           :src="product.defaultPicUrl">
           </ts-image>
           <p class="productIndex-product--number">{{product.productNo}}</p>
           <template slot="footer">
             <span v-if="product.price>0&&product.price">¥{{product.price/100}}/{{product.priceUnit | filterDict(DICT.PriceUnits) }}</span>
             <span v-else>价格面议</span>
           </template>
         </ts-grid-item>
      </ts-grid>
    </div>
</div>
</template>

<script>
import {
  getVisitUserProductCategoryList,
  getVisitSystemProductCategoryList,
  getCompanyBindingProductList,
  getVistitCompanyProductsList
} from '@/common/api/api';
import DICT from '@/common/dict';
export default {
  data() {
    return {
      // 数据字典
      DICT: {
        PriceUnits: DICT.PriceUnits
      },
      length: 0,
      CategoryList: [],
      CompanyProducts: [],
      Params: {
        pageSize: 5,
        pageNo: 1,
        companyId: null,
        classId: null
      }
    };
  },
  methods: {
    // 店铺
    handleViewProduct(product) {
      console.log(this.$route.params.id);
      this.goto(`/product/${product.id}?route=shop&companyId=${this.$route.params.id}`);
    },
    // 未上架任何花型时，需显示——该网店暂未上架花型
    handleGoto(item) {
      if (item.className === '全部花型') {
        this.goto(`/shop/${this.Params.companyId}/allProducts`);
      } else {
        this.$router.push({
          path: 'catagory',
          query: {
            name: item.className,
            catagoryId: item.classId
          }
        });
      }
    }
  },
  computed: {
    getHotSearch() {
      if (this.CategoryList.some(item => item.className === '爆款')) {
        return this.CategoryList.filter(item => item.className === '爆款')[0].id;
      }
    }
  },
  async created() {
    // ========
    // 绑定公司ID
    this.Params.companyId = this.$route.params.id;
    this.length = (await getVistitCompanyProductsList(this.Params)).data.data.list.length;
    // ========
    // 获取所有分类  => 做循环加载使用
    let UserCategories = (await getVisitUserProductCategoryList({
      companyId: this.$route.params.id,
      pageNo: 1,
      pageSize: 1000
    })).data.data.list;
    let SystemCategories = (await getVisitSystemProductCategoryList({
      companyId: this.$route.params.id
    })).data.data;
    this.CategoryList = [...SystemCategories, ...UserCategories];
    // =========
    // 独家花型
    let exclusiveID = null;
    let exclusiveArr = this.CategoryList.filter(item => item.className === '独家花型');
    if (exclusiveArr.length) {
      exclusiveID = exclusiveArr[0].id;
    }
    // =============
    // 循环加载
    for (let i in this.CategoryList) {
      if (exclusiveID !== this.CategoryList[i].id) {
        this.Params.classId = this.CategoryList[i].id;
        // 如果为爆款=>加载3款，
        // 其他加载5款
        this.Params.pageSize = this.CategoryList[i].id === this.getHotSearch ? 3 : 5;
        let lists = (await getCompanyBindingProductList(this.Params)).data.data.list;
        this.CompanyProducts.push({
          classId: this.CategoryList[i].id,
          className: this.CategoryList[i].className,
          list: lists
        });
      }
    }
    // ===========
    // 加载全部花型
    this.Params.pageSize = 10;
    this.Params.classId = null;
    this.CompanyProducts.push({
      classId: '',
      className: '全部花型',
      list: (await getVistitCompanyProductsList(this.Params)).data.data.list
    });
  }
};
</script>

<style lang="css" scoped>
@component-namespace productIndex{
  @component rank{
    position: absolute;
    z-index: 2;
    left:16px;
  }
  @component empty{
    display: table;
    width: 100%;
    line-height: 40px;
    text-align: center;
    margin: 10px auto;
    font-size: 16px;
    color: #666;
  }
  @component product{
    @modifier number{
      font-size: 16px;
      margin-top: 10px;
      max-width: 200px;
      text-align: left;
      @utils-ellipsis;
    }
  }
}
</style>
