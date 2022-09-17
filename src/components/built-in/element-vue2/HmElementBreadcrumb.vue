<template>
<div>
  <el-breadcrumb :separator="separator" :separator-icon="separatorIcon">
    <el-breadcrumb-item :to="item.to" v-for="(item, index) in testList" :key="index">{{ item.text }}</el-breadcrumb-item>
  </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "HmElementBreadcrumb",
  props: {
    /**
     * 内容数据
     */
    testList: {
      type: Array,
      default: function() {
        return [
          { to: "HmElementNavMenu", text: "首页" },
          { to: "HmElementMessageBox", text: "活动管理" }
        ];
      }
    },
    /**
     * 分隔符
     */
    separator: {
      type: String,
      default: "/"
    },
    /**
     * 图标分隔符
     */
    separatorIcon: {
      type: String,
      default: ""
    }
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>