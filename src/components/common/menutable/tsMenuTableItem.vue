<template lang="html">
  <div class="ts-menutable-box" :style="{width:boxWidth}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    // 默认宽度是160px
    width: {
      type: String,
      default: '160'
    }
  },
  computed: {
    // 如果不写单位自动加上px
    // 写了单位就取%
    boxWidth() {
      if (this.width.indexOf('%') < 0) {
        return this.width + 'px';
      } else {
        return this.width;
      }
    }
  }
};
</script>

<style lang="css" scoped>
@import '../../../common/css/_var.css';
@component-namespace ts{
  @component menutable-box{
    border-right: var(--menuTableHeaderBorder);
    background: #fff;
    padding:10px;
    box-sizing: border-box;
    line-height: 150%;
    max-width: 80%;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    word-break: break-all;
    .ts-image{
      float: left;
    }
    .ts-row{
      border-bottom: 1px dotted #eaeaea;
      display: table;
      width: 100%;
      table-layout: fixed;
      &:last-child{
        border-bottom:none;
      }
    }
    &:last-child{
      border-right:none;
    }
  }
}
</style>
<style media="screen">
.ts-menutable-box {
  .ts-col {
    border-right: 1px dotted #eaeaea;
    padding: 10px;
    display: table-cell;
    vertical-align: middle;
    word-break: break-all;
    float: none;
    &:last-child {
      border-right: none;
    }
  }
}
</style>
