<template lang="html">
  <div @mouseover="isSHow=true" @mouseout="isSHow=false" class="ts-image" :style="{width:width+'px',height:height+'px'}" @click="handleImg" :class="{'is-overhidden':showOriginPic,'is-round':shape==='round'}">
    <img class="ts-image-img" v-lazy="src" :class="{'is-view':showOriginPic,'is-disabledHover':disabledHover}">
  </div>
</template>

<script>
// 预览图片
var createLoginLayer = ((imgUrl) => {
  var div;
  return (imgUrl) => {
    if (!div) {
      div = document.createElement('div');
      div.style.display = 'none';
      document.body.appendChild(div);
    }
    div.innerHTML = `<img src=${imgUrl} class="ts-image--popup">`;
    return div;
  };
})();
import emitter from '@/common/js/mixins/emitter';
import Popup from '@/common/js/utils/popup/';
export default {
  data() {
    return {
      showOriginPic: false
    };
  },
  mixins: [emitter, Popup],
  watch: {
    src(val) {
      this.dispatch('tsFormItem', 'ts.form.change', [val]);
    }
  },
  /**
   * src -- 图片路径
   * width/height--图片宽高
   * disabledHover -- 不允许hover的时候放大图片
   * canView -- 是否能点击放大图片
   * shape -- 形状 ---- 正方／圆形
   */
  props: {
    src: String,
    height: String,
    width: String,
    shape: {
      type: String,
      default: 'square'
    },
    disabledHover: {
      type: Boolean,
      default: false
    },
    modal: {
      default: true
    },
    canView: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 2
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      default: true
    },
    closeOnPressEscape: {
      default: true
    }
  },
  methods: {
    doClose() {
      this.$el.style.zIndex = 0;
      this.value = false;
      this._closing = true;
      var loginLayer = createLoginLayer(this.src);
      loginLayer.style.display = 'none';
      this.onClose && this.onClose();
      setTimeout(() => {
        if (this.modal && this.bodyOverflow !== 'hidden') {
          document.body.style.overflow = this.bodyOverflow;
          document.body.style.paddingRight = this.bodyPaddingRight;
        }
        this.bodyOverflow = null;
        this.bodyPaddingRight = null;
      }, 200);
      this.opened = false;
      this.showOriginPic = false;
      if (!this.transition) {
        this.doAfterClose();
      }
    },
    handleImg() {
      this.$emit('click');
      if (this.canView) {
        this.open();
        this.$el.style.zIndex = 0;
        var loginLayer = createLoginLayer(this.src);
        loginLayer.style.display = 'block';
      }
    }
  }
};
</script>

<style lang="css" scoped>
@import '../../common/css/_var.css';
@keyframes imgfade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@component-namespace ts{
  @component image{
    color:#fff;
    overflow: hidden;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    vertical-align: middle;
    @when overhidden{
      overflow: auto;
    }
    @when round{
      border-radius: 50%;
    }
    @descendent img{
      max-width: 100%;
      min-height:100%;
      vertical-align: middle;
      transition: all 0.3s;
      animation: imgfade .4s;
      &:hover{
        transform:scale(1.05);
      }
      @when round{
        border-radius: 50%;
      }
      @when disabledHover{
        &:hover{
          transform:none;
        }
      }
    }
  }
}
</style>
<style media="screen">
.ts-image--popup {
  position: fixed;
  z-index: 99999;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  animation: imgfade .4s;
  max-height: 70%;
  max-width: 70%;
  &:after{
    content:'&times';
    font-size: 12px;
  }
}
</style>
