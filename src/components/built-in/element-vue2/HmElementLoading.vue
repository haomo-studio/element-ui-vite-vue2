<template>
  <div
    v-loading="vLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-background="elementLoadingBackground"
    :customClass="customClass"
  ></div>
</template> 
<script>
export default {
  name: "HmElementLoading",
  props: {
    /**
     * 是否调用加载
     */
    vLoading: {
      type: Boolean,
      default: true
    },
    /**
     * 显示加载文案
     */
    elementLoadingText: {
      type: String,
      default: "用户信息"
    },
    /**
     * 图标类名
     */
    elementLoadingSpinner: {
      type: String,
      default: ""
    },
    /**
     * 遮罩背景色   
     */
    elementLoadingBackground: {
      type: String,
      default: "#f6f6f6"
    },
    /**
     * 自定义类名
     */
    customClass: {
      type: String,
      default: ""
    }
  }
};
</script>
<style>
</style>
