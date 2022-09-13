<template>
  <el-button
    :native-type="nativeType"
    :type="type"
    :size="size"
    :icon="icon"
    :plain="plain"
    :round="round"
    :circle="circle"
    :loading="loading"
    :disabled="disabled"
    :autofocus="autofocus"
  >
  {{text}}
  </el-button>
</template>

<script>
export default {
  name: "HmElementementButton",
  props: {
    /**
     * 按钮文字
     */
    text: {
      type: String,
      default: "默认按钮",
    },
    /**
     * 按钮类型
     * @type Enum
     * @options ["", "button", "submit", "reset"]
     */
     nativeType: {
      type: String,
    },
    /**
     * 按钮颜色
     * @type Enum
     * @options ["", "primary", "success", "warning", "danger", "info", "text"]
     *
     */
    type: {
      type: String,
    },
    /**
     * 按钮尺寸
     * @type Enum
     * @options ["", "medium", "small", "mini"]
     */
    size: {
      type: String,
    },
    /**
     * 图标
     * @type Icon
     */
     icon: {
      type: String,
    },
    /**
     * 是否朴素按钮
     */
     plain: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否圆角按钮
     */
     round: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否圆形按钮
     */
     circle: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否加载中状态
     */
     loading: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否禁用状态
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否默认聚焦
     */
     autofocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>
<style scoped>
</style>
