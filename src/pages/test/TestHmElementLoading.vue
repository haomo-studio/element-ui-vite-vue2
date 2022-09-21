<template>
  <div>
    <HmElementloading
      :vLoading="true"
      elementLoadingText="这是一个加载组件"
      elementLoadingSpinner="el-icon-loading"
      elementLoadingBackground="rgba(0, 0, 0, 0.8)"
    ></HmElementloading>
  </div>
</template>

<script>
import HmElementloading from "/@/components/built-in/element-vue2/HmElementloading.vue";

export default {
  components: {
    HmElementloading
  }
};
</script>

<style lang="less" scoped>
</style>