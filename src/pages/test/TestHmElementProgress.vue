<template>
<div>
  <Hm-Element-Progress></Hm-Element-Progress>
  <Hm-Element-Progress
    :percentage="50"
    type="line"
    :strokeWidth="20"
    :textInside="textInside"
    :showText="true"
    :color="color"
    status="warning"
    :indeterminate="false"
    :duration="3"
  ></Hm-Element-Progress>
</div>
</template>

<script>
import HmElementProgress from "/@/components/built-in/element-vue2/HmElementProgress.vue";

export default {
  components: {
    HmElementProgress,
  },
  data() {
    return {
      textInside: true,
      color: [{ color: "#f56c6c", percentage: 100 }],
    };
  },
};
</script>

<style lang="less" scoped>
</style>
