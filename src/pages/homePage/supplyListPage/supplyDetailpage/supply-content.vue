<template>
<div class="list-content">
  <div class="fl content-img">
    <magnifier :imgSrc="obj.productPicUrl"></magnifier>
    <collection @clickMethod="collectionMethod" :yes="yesOrNo" style="margin: 28px 10px 0 160px; display: inline-block;"></collection>
    <span style="font-size: 13px; position: relative; top: -2px;">浏览量：{{obj.viewCount}}</span>
  </div>
  <div class="fl content-info">
    <p class="content-info-desc">{{obj.supplyDesc}}</p>
    <p class="content-info-class">
      <span>供应类型：</span>{{obj.supplyShape | buyShape}} - {{obj.supplyType | type}}
    </p>
    <p class="content-info-class">
      <span>供应数量：</span>{{obj.supplyNum}}{{obj.supplyUnit | unit}}
    </p>
    <p class="content-info-class">
      <span>发布时间：</span>{{obj.updateDate | customTime}}
    </p>
    <p class="content-info-class content-info-user"><span>供应厂家：</span>{{obj.userName}}</p>
    <button class="moreSupply btn btn-yes" @click="goSupplyListPage(obj)">更多供应</button>
  </div>
</div>
</template>

<script>
import {
  collection
} from '@/components';
import {
  favoriteBus
} from '@/common/api/api';
import Toast from '@/components/common/toast/toast';
export default {
  data() {
    return {
      param: {
        businessId: '',
        businessType: 3
      },
      yesOrNo: false
    };
  },
  components: {
    collection
  },
  props: {
    obj: {
      type: Object
    }
  },
  watch: {
    obj(val) {
      if (val.isFavorite === 1) {
        this.yesOrNo = true;
      } else {
        this.yesOrNo = false;
      }
    }
  },
  methods: {
    goSupplyListPage(item) {
      this.goto(`/shop/${item.companyId}/supplies`);
    },
    // 收藏
    collectionMethod() {
      this.param.businessId = this.obj.id;
      favoriteBus(this.param).then((res) => {
        if (res.data.code === 0) {
          Toast({
            type: 'success',
            message: res.data.message
          });
          this.yesOrNo = !this.yesOrNo;
        }
      }).catch();
    }
  }
};
</script>

<style lang="scss" scoped>
.list-content {
    /*position: relative;*/
    margin-bottom: 20px;
    padding: 20px 40px 20px 20px;
    width: 760px;
    height: 520px;
    border: 1px solid #e5e5e5;
    .content-img {
        margin-right: 20px;
        width: 420px;
        img {
            width: 100%;
            height: 423px;
            border: 1px solid #d1d1d1;
        }
    }
    .content-info {
        padding-top: 30px;
        width: 320px;
        .content-info-desc {
            margin: 10px 0 20px;
            font-size: 18px;
            color: #000;
            line-height: 24px;
            letter-spacing: 1px;
        }
        .content-info-class {
            font-size: 14px;
            color: #333;
            span {
                display: inline-block;
                width: 105px;
                color: #666;
                line-height: 24px;
                letter-spacing: 1px;
            }
        }
        .content-info-user {
            margin: 20px 0 0;
            line-height: 40px;
            border: 1px solid #e5e5e5;
            border-left: 0;
            border-right: 0;
        }
        .btn {
            margin-top: 50px;
            width: 320px;
            height: 48px;
            border: 0;
            color: #fff;
            font-size: 20px;
        }
        .btn-yes {
            background: #4C93FD;
        }
        /*.moreSupply {
            position: absolute;
            bottom: 150px;
        }*/
    }
    .sucessList {
        i {
            display: block;
            margin-bottom: 20px;
            font-size: 35px;
        }
        margin-top: 50px;
        width: 320px;
        font-size: 24px;
        color: #ff8300;
        text-align: center;
    }
}
</style>
