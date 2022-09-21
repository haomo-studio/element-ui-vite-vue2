<template>
  <el-pagination
    :small="small"
    :background="background"
    :page-size="pageSize"
    :total="total"
    :pager-count="pagerCount"
    :current-page="currentPage"
    :layout="layout"
    :page-sizes="pageSizes"
    :popper-class="popperClass"
    :prev-text="prevText"
    :next-text="nextText"
    :disabled="disabled"
    :hide-on-single-page="hideOnSinglePage"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    @prev-click="prevClick"
    @next-click="nextClick"
  ></el-pagination>
</template>
<script>
export default {
  name: "HmElementPagination",
  props: {
    /**
     * 总条目数
     */
    total: {
      type: Number,
      default: 200,
    },
    /**
      当前页数
     */
    currentPage: {
      type: Number,
      default: 1,
    },
    /**
     * 页条目数
     */
    pageSize: {
      type: Number,
      default: 10,
    },
    /**
     * 页条目数组
     */
    pageSizes: {
      type: Array,
      default: function () {
        return ["10", "20", "50", "100"];
      },
    },
    /**
     * 下拉显示类名
     */
    popperClass: {
      type: String,
      default: "",
    },
    /**
     * 上一页
     */
    prevText: {
      type: String,
      default: "",
    },
    /**
     * 下一页
     */
    nextText: {
      type: String,
      default: "",
    },
    /**
     * 最大按钮数
     */
    pagerCount: {
      type: Number,
      default: 5,
    },
    /**
     * 背景色
     */
    background: {
      type: Boolean,
      default: false,
    },
    /**
     * 组件布局
     */
    layout: {
      type: String,
      default: "total,sizes,prev,pager,next,jumper",
    },
    /**
     * 是否用小样式
     */
    small: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否禁用分页
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 一页是否隐藏
     */
    hideOnSinglePage: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleSizeChange(e) {
      this.$emit("handleSizeChange", e);
    },
    handleCurrentChange(e) {
      this.$emit("handleCurrentChange", e);
    },
    prevClick(e) {
      this.$emit("prevClick", e);
    },
    nextClick(e) {
      this.$emit("nextClick", e);
    },
  },
};
</script>
<style scoped>
</style>