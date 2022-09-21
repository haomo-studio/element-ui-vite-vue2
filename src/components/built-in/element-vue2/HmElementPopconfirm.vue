<template>
  <el-popconfirm
  :placement="placement"
    :title="title"
    :confirm-button-text="confirmButtonText"
    :cancel-button-text="cancelButtonText"
    :confirm-button-type="confirmButtonType"
    :cancel-button-type="cancelButtonType"
    :icon="icon"
    :icon-color="iconColor"
    :hide-icon="hideIcon"
    @confirm="confirm"
    @cancel="cancel"
  >
    <template>
      <el-button slot="reference">{{text}}</el-button>
    </template>
  </el-popconfirm>
</template>

<script>
export default {
  name: "HmElementPopconfirm",
  props: {
    /**
     * 标题
     */
     text: {
      type: String,
      default: "删除",
    },
    /**
     * 出现位置
     */
     placement: {
      type: String,
      default: "right-end",
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "确认删除",
    },
    /**
     * 确认按钮文字
     */
     confirmButtonText: {
      type: String,
      default: "确认",
    },
    /**
     * 取消按钮文字
     */
     cancelButtonText: {
      type: String,
      default: "取消",
    },
    /**
     * 确认按钮类型
     */
     confirmButtonType: {
      type: String,
      default: "primary",
    },
    /**
     * 取消按钮类型
     */
     cancelButtonType: {
      type: String,
      default: "text",
    },
    /**
     * Icon
     */
    icon: {
      type: String,
      default: "el-icon-question",
    },
    /**
     * Icon 颜色
     */
    iconColor: {
      type: String,
      default: "#f90",
    },
    /**
     * 是否隐藏 Icon
     */
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    confirm(e) {
      this.$emit("confirm", e);
    },
    cancel(e) {
      this.$emit("cancel", e);
    },
  },
};
</script>

<style scoped>
</style>