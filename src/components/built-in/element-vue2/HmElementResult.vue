<template>
  <el-result :title="title" :sub-title="subTitle" :icon="icon">
    <template #icon></template>
    <template #title></template>
    <template #subTitle></template>
    <template #extra></template>
  </el-result>
</template>

<script>
export default {
  name: "HmElementResult",
  props: {
    /**
     * 标题文字
     */
    title: {
      type: String,
      default: "标题文字",
    },
    /**
     * 二级标题文字
     */
    subTitle: {
      type: String,
      default: "二级标题文字",
    },
            /**
     * 图标类型
     * @type Enum
     * @options ["success","warning","info","error"]
     */
    icon: {
      type: String,
       default: "medium"
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
</style>
